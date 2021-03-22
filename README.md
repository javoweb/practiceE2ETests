# practiceE2ETests

Estrategia de pruebas de la Aplicación de blogging [Ghost](https://ghost.org/). Detalles de la estrategia puede ser encontrado en el [Wiki](https://github.com/javoweb/practiceE2ETests/wiki)

## Integrantes
| Nombre           | Correo                     |
| ---------------- | -------------------------- |
| Rodrigo Orellana | r.orellana@uniandes.edu.co |
| Gonzalo Tixilima | g.tixilima@uniandes.edu.co |


## Pruebas e2e con datos aleatorios

### Instalación

Ir a la carpetas de prueba

`cd cypress`

Instalar dependencias del proyecto
`npm ci`

### Preparar credenciales

Las credenciales del admin de ghost deben llenarse en el archivo `cypress/fixtures/credentials.json` y en la línea 52 del archivo `cypress/fixtures/loginCases.json`
También se debe especificar la url de la apicación bajo pruebas en `cypress.json`

### Correr pruebas
Ir a la carpeta de pruebas

`cd cypress`

`cypress run`

## Pruebas VRT
* Para ejecutar la rutina completa de prueba regresión y generación de reportes VRT, debe siturse en la carpeta raíz de este proyecto "practiceE2ETest" y ejecutar el script: `sh run_kraken.sh`
Ejemplo:
`/practiceE2ETests$ sh run_kraken.sh`
Nota: Si presenta problemas en la ejecución del script debe revisar los respectivos readme de Kraken y VRT (ver a continuación)


* Para ejecutar Kraken (por si sólo) se debe revisar el readme que está en la sgte ruta: /kraken/ghostKraken/readme.txt

* Para ejecutar la generación de reportes (por si sólo) se debe revisar el readme que está en la sgte ruta: /VRT/README.md

## Pruebas de reconocimiento con RIPuppet

`cd RIPuppet`

`node index.js`

## Pruebas aleatorias con Monkey Cypress

Ir a la carpeta del subproyecto: `cd monkey_cypress`

Correr con el comando: `npm run cypress:open`

Luego en el browser dar click en `monkey.spec.js`

