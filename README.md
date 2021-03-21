# practiceE2ETests

Pruebas E2E utilizando Kraken y Cypress. Entrega en equipo. MISO Pruebas automatizadas de software

## Integrantes
| Nombre           | Correo                     |
| ---------------- | -------------------------- |
| Rodrigo Orellana | r.orellana@uniandes.edu.co |
| Gonzalo Tixilima | g.tixilima@uniandes.edu.co |


## Pruebas e2e con datos aleatorios

### Escenarios de Prueba
| # | Funcionalidad | Escenario                                       | Estrategia |
| - | ------------- | ----------------------------------------------- | ---------- |
| 1 | Login         | Ingresa datos inválidos                         | a priori   |
| 2 | Login         | Ingresa datos válidos                           | a priori   |
| 3 | Logout        | Cierra Sesión                                   | a priori   |
| 4 | Crear Post    | Crea Post con datos válidos                     | aleatorio  |
| 5 | Crear Post    | Crea Post con título con más de 255 caracteres  | aleatorio  |
| 6 | Editar Post   | Edita Post con datos válidos                    | aleatorio  |   
| 7 | Editar Post   | Edita Post con título con más de 255 caracteres | aleatorio  |
| 8 | Eliminar Post | Elimina Post                                    | a priori   |
| 9 | Eliminar Post | Cancela la eliminación del Post                 | a priori   |
| 10| Guardar Post como borrador | Guarda Post con datos válidos      | aleatorio dinámico |
| 11| Guardar Post como borrador | Guarda Post con título con más de 255 caracteres      | aleatorio dinámico |
| 12 | Crear Página    | Crea Página con datos válidos                     | aleatorio  |
| 13 | Crear Página   | Crea Página con título con más de 255 caracteres  | aleatorio  |
| 14 | Editar Página  | Edita Página con datos válidos                    | aleatorio  |   
| 15 | Editar Página   | Edita Página con título con más de 255 caracteres | aleatorio  |
| 16 | Crear Tag    | Crea Tag con datos válidos                     | aleatorio  |
| 17 | Crear Tag   | Crea Tag con título con más de 191 caracteres  | aleatorio  |
| 18 | Editar Tag  | Edita Tag con datos válidos                    | aleatorio  |   
| 19 | Editar Tag   | Edita Tag con título con más de 191 caracteres | aleatorio  |
| 16 | Crear Tag    | Crea Tag con datos válidos                     | aleatorio  dinámico |
| 17 | Crear Tag   | Crea Tag con título con más de 191 caracteres  | aleatorio  dinámico |
| 18 | Editar Tag  | Edita Tag con datos válidos                    | aleatorio  dinámico |   
| 19 | Editar Tag   | Edita Tag con título con más de 191 caracteres | aleatorio  dinámico |


### Instalación

Instalar dependencias

`npm install`


Instalar cypress

`npm install -g cypress`

Instalar dependencias del proyecto
`npm ci`
`npm install -D cypress-xpath`

### Preparar credenciales

Las credenciales del admin de ghost deben llenarse en el archivo `cypress/fixtures/credentials.json` y en la línea 52 del archivo `cypress/fixtures/loginCases.json`

### Correr pruebas

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

