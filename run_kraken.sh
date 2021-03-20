#!/bin/bash

path=kraken/ghostKraken
cd $path

rm -R reports
rm -R reportsGhostV1-iteracion3
rm -R reportsGhostV3-iteracion3

cp configA.json config.json

bundle exec kraken-mobile run --properties=config.json
mv reports reportsGhostV1-iteracion3

cp configB.json config.json
bundle exec kraken-mobile run --properties=config.json
mv reports reportsGhostV3-iteracion3

cd ../../VRT
npm ci
node index.js
echo Ver reporte en VRT/index.html