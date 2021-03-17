# practiceE2ETests
Pruebas E2E utilizando Kraken y Cypress. Entrega en equipo Semana 5. MISO Pruebas automatizadas de software

## Integrantes
| Nombre           | Correo                     |
| ---------------- | -------------------------- |
| Rodrigo Orellana | r.orellana@uniandes.edu.co |
| Gonzalo Tixilima | g.tixilima@uniandes.edu.co |

## Funcionalidades
- Login
- Logout
- Crear Post
- Editar Post
- Eliminar Post

## Escenarios de Prueba
| # | Funcionalidad | Escenario                                       |
| - | ------------- | ----------------------------------------------- |
| 1 | Login         | Ingresa datos inválidos                         |
| 2 | Login         | Ingresa datos válidos                           |
| 3 | Logout        | Cierra Sesión                                   |
| 4 | Crear Post    | Crea Post con datos válidos                     |
| 5 | Crear Post    | Crea Post con título con más de 255 caracteres  |
| 6 | Editar Post   | Edita Post con datos válidos                    |     
| 7 | Editar Post   | Edita Post con título con más de 255 caracteres |
| 8 | Eliminar Post | Elimina Post                                    |
| 9 | Eliminar Post | Cancela la eliminación del Post                 |

## Código semana 7

### Instalación

Instalar dependencias

`npm install`

Instalar cypress

`npm install -g cypress`

### Preparar credenciales

Las credenciales del admin de ghost deben llenarse en el archivo `cypress/fixtures/credentials.json` y en la línea 52 del archivo `cypress/fixtures/loginCases.json`

### Correr pruebas

`cd cypress`

`cypress run ghost`

`cypress run ghostTestPage`

`cypress run ghostTestTag`
