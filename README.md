# tallersemana8

El presente repositiorio se encuentra estructurado a partir de las siguientes carpetas:

* 00 - Documentación
* 01_PruebasManales
* 02_PruebasDeReconocimientomMonkey
* 03_PruebasE2E
* 04_PruebasRegresion
* 05_PruebasDeSistemaAceptacion

A continuación se detalla el contenido de cada una de las carpetas listadas.


# 00 - Documentación
Esta carpeta contiene el documento "Estrategia de pruebas semana 8.docx" el cual describe en detalle la estrategia de pruebas propuesta.  Adicionalmente, incluye la presentación "Estrategias de pruebas.pptx" la cual fue usada para el desarrollo del video. 


# 01_PruebasManales
Esta carpeta  contiene el artefacto "01_Inventario-pruebas-exploratorias.xlsx", en su interior se encontrarán los resultados obtenidos en las pruebas exploratirias, los casos de prueba propuestos y la relación de escenarios de prueba inicialmente contemplados.

# 02_PruebasDeReconocimientomMonkey
La presente carpeta contiene el código fuente de un proyecto Cypress que contiene  las pruebas de exploración aleatorias basadas en la ejecución de un Monkey.   Para llevar a buen termino la siguiente lista de tareas, previemante debe configura el ambiente de desarrollo de cypress de acuerdo al tutorial:

    A través de la consola git, clone el repositorio.
    Ejecute el comando "git checkout pruebascypress"
    Abra con VS Code el proyecto.
    Abra una nueva consola desde VS Code.
    Ubique la consola en la carpeta raíz del proyecto Cyrpess
    Ejecute el comando "./node_modules/.bin/cypress open"
    El comando anterior, desplegará la consola de Cypress, desde donde podrá seleccioanr los casos de prueba implmementados.
   
  
# 03_PruebasE2E
Esta carpeta contiene el código fuente de un proyecto Cypress que contiene las pruebas e2e.  Para llevar a buen termino la siguiente lista de tareas, previemante debe configura el ambiente de desarrollo de cypress de acuerdo al tutorial:

    A través de la consola git, clone el repositorio.
    Ejecute el comando "git checkout pruebascypress"
    Abra con VS Code el proyecto.
    Abra una nueva consola desde VS Code.
    Ubique la consola en la carpeta raíz del proyecto Cyrpess
    Ejecute el comando "./node_modules/.bin/cypress open"
    El comando anterior, desplegará la consola de Cypress, desde donde podrá seleccioanr los casos de prueba implmementados.
    Seleccione del listado el primer caso de prueba disponible. Nota: Asegurese siempre de ejecutar los casos de prueba en orden.


# 04_PruebasRegresion
La presente carpeta contiene el código fuente de un proyecto Cypress que contiene  la automatización de las pruebas de regresion de las funcionalidades contempladas en el plan de pruebas. Para llevar a buen termino la siguiente lista de tareas, previemante debe configura el ambiente de desarrollo de cypress de acuerdo al tutorial:

    A través de la consola git, clone el repositorio.
    Abra con VS Code el proyecto.
    Abra una nueva consola desde VS Code.
    Ubique la consola en la carpeta raíz del proyecto "PruegasRegresión"
    Ejecute el comando "node XXXX" donde XXX corresponde al archivo fuente .js que contiene alguna de las 10 pruebas enumeradas.


# 05_PruebasDeSistemaAceptacion
Esta carpeta contiene el código fuente de un proyecto Cypress que contiene  la automatización de las pruebas de aceptación y hacen uso de un repositorio de datos apriorí.  Cada carpeta contiene 40 casos de preueba implementados de acuerdo a la estrategia de pruebas señalada en su carpeta contenedora. Para configura el proyecto en ambiente de instalación, siga el siguiente procedimiento:

    A través de una consola, genere una carpeta para descargar el proyecto.
    Ingrese a la carpeta creada, clone el repositorioa través del comando "git clone https://github.com/fabiandavid01/tallersemana7.git".
    Ingrese con una consola a la carpeta "tallersemana7".
    Ejecute el comando "npm install cypress"
    Ejecute el comando "npm install faker"
    Ejecute el comando "./node_modules/.bin/cypress open"
    El comando anterior desplegará la consolta de Cypress y en su interior, cada uno de los casos de prueba generados.
    Ingrese a la carpeta "01_PruebasAleatorias" y ejecute cualquiera de los archivos desplegados.
    Ingrese a la carpeta "02-PoolDeDatosAPriori" y ejecute cualquiera de los archivos desplegados.
    Ingrese a la carpeta "03_ PoolPseudoAleatorio" y ejecute cualquiera de los archivos desplegados.
