const compareImages = require("resemblejs/compareImages");
const fs = require("mz/fs");

async function getDiff(imgPathPrev, imgPathPost, outFolder, outName) {
    const options = {
        output: {
            errorColor: {
                red: 255,
                green: 0,
                blue: 255
            },
            errorType: "movement",
            transparency: 0.1,
            largeImageThreshold: 1200,
            useCrossOrigin: false,
            outputDiff: true
        },
        scaleToSameSize: true,
        ignore: "antialiasing"
    };

    // The parameters can be Node Buffers
    // data is the same as usual with an additional getBuffer() function
    const data = await compareImages(
        await fs.readFile(imgPathPrev),
        await fs.readFile(imgPathPost),
        options
    );
    
    const imgPathResult = outFolder + outName + ".png";

    await fs.writeFile(imgPathResult, data.getBuffer());

    return {
        v1File: imgPathPrev,
        v3File: imgPathPost,
        resultFile: imgPathResult
    };
}

function getFolderContent(path) {
    return fs.readdirSync(path);
}

function createFolder(path) {
    if (!fs.existsSync(path)){
        fs.mkdirSync(path);
    }
}

async function runDiff() {
    let results = [];
    const testsV1 = getFolderContent(baseTestsPath + v1Folder);
    const testsV3 = getFolderContent(baseTestsPath + v3Folder);
    const nScenarios = Math.min(testsV1.length, testsV3.length);
    for (let i = 0; i < nScenarios; i++) {
        const baseScenarioPathV1 = baseTestsPath + v1Folder + testsV1[i] + '/screenshots/';
        const baseScenarioPathV3 = baseTestsPath + v3Folder + testsV3[i] + '/screenshots/';
        const v1Screenshots = getFolderContent(baseScenarioPathV1);
        const v3Screenshots = getFolderContent(baseScenarioPathV3);
        const nScreenshots = Math.min(v1Screenshots.length, v3Screenshots.length);
        createFolder(baseResultsPath + i.toString() + '/');
        let diffs = await getDiffResults(nScreenshots, baseScenarioPathV1, v1Screenshots, baseScenarioPathV3, v3Screenshots, i);
        results.push(diffs);
        
    }
    return results;
}

async function getDiffResults(nScreenshots, baseScenarioPathV1, v1Screenshots, baseScenarioPathV3, v3Screenshots, i) {
    let diffs = [];
    for (let j = 0; j < nScreenshots; j++) {
        let diff = await getDiff(
            baseScenarioPathV1 + v1Screenshots[j],
            baseScenarioPathV3 + v3Screenshots[j],
            baseResultsPath + i.toString() + '/',
            j.toString()
        );
        diffs.push(diff);
        
    }
    return diffs;
}

function generateReport(results) {
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for Ghost app v.stable vs v3.3.0
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${generateTestTable(results)}
            </div>
        </body>
    </html>`
}

function generateTestTable(results) {
    let resultTable = [];
    results.forEach(r => {
        resultTable.push(`
        <h2> Experiment </h2>
        <div class="imgline">
      ${generateScreenshotTable(r)}
    </div>
    `)
    })
    return resultTable
}

function generateScreenshotTable(result) {
    let table = []
    result.forEach(screenshot => {
        table.push(`<div class="imgcontainer">
    <span class="imgname">Reference</span>
    <img class="img2" src="${screenshot.v1File}" id="refImage" label="Reference">
  </div>
  <div class="imgcontainer">
    <span class="imgname">Test</span>
    <img class="img2" src="${screenshot.v3File}" id="testImage" label="Test">
  </div>
</div>
<div class="imgline">
  <div class="imgcontainer">
    <span class="imgname">Diff</span>
    <img class="imgfull" src="${screenshot.resultFile}" id="diffImage" label="Diff">
  </div>`)
    });
    return table
}

const datetime = new Date().toISOString().replace(/:/g,".");
const baseTestsPath = '../kraken/ghostKraken/';
const baseResultsPath = './diffs/';
const v1Folder = 'reportsGhostV1-iteracion3/';
const v3Folder = 'reportsGhostV3-iteracion3/';
let diffResults = runDiff();
diffResults.then((results) => {
    fs.writeFileSync('./index.html', generateReport(results));
});







