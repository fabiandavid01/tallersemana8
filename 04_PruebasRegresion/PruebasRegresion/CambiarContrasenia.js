const playwright = require('playwright');
const fs = require('fs')
const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");

const { viewportHeight, viewportWidth, options } = config;

async function cambiarContrasenia() {

    let variable = '';
    let resultInfo = {};

    for (const browserType of ['chromium']) {
        
        let nombrePrueba = 'CambiarContrasenia';
        var datetime = '20210307'
        if (!fs.existsSync(`./Capturas/${nombrePrueba}/results/${datetime}`)){
            fs.mkdirSync(`./Capturas/${nombrePrueba}/results/${datetime}`, { recursive: true });
        }

        let pathGeneral = `./Capturas/${nombrePrueba}/results/${datetime}/`;
        variable = `./Capturas/${nombrePrueba}/results/${datetime}`;

        let arrayUrls = [config.urlReferencia, config.urlAnalisis];
        let nombrePath = '';

        for (var i=0; i<arrayUrls.length;i++) {
            let contador = 1;
            let url = arrayUrls[i];
            if ( i === 0) {
                nombrePath = 'referencia';
            }else{
                nombrePath = 'analisis'
            }
            const browser = await playwright[browserType].launch(({headless: false}));
            const context = await browser.newContext();
            const page = await browser.newPage();
    
            //Cargar la pagina
            await page.goto(url);

            await page.fill('[placeholder="Email Address"]', 'luque.lopez.adriana@gmail.com');
            await page.fill('[placeholder="Password"]', 'adrianaluque');
    
            await Promise.all([
                page.waitForNavigation(/*{ url: 'http://localhost:2368/ghost/#/site' }*/),
                page.click('button:has-text("Sign in")',{delay:5000})
            ]);

            await page.click('text=View site');
    
            //Cambiar contrase;a
            let urlPerfil = url.replace('signin' , 'staff/adriana')
            await page.goto(urlPerfil);

            await page.screenshot({ path:`${pathGeneral}${nombrePath}-pantalla${contador}-${browserType}.png` });
            contador++;

            await page.fill('input[type="password"]', 'adrianaluque');
            await page.fill('#user-password-new', 'adrianaluque');
            await page.fill('#user-new-password-verification', 'adrianaluque');

            await page.screenshot({ path:`${pathGeneral}${nombrePath}-pantalla${contador}-${browserType}.png` });
            contador++;

            await page.click('button:has-text("Change Password")',{delay:3000});

            await page.screenshot({ path:`${pathGeneral}${nombrePath}-pantalla${contador}-${browserType}.png` });
            contador++;

            //cerrar
            await browser.close();

        }

        for (var i=1; i<4;i++) {
            
            const data = await compareImages(
                fs.readFileSync(`${pathGeneral}referencia-pantalla${i}-${browserType}.png`),
                fs.readFileSync(`${pathGeneral}analisis-pantalla${i}-${browserType}.png`),
                options
            );

            resultInfo[i] = {
                isSameDimensions: data.isSameDimensions,
                dimensionDifference: data.dimensionDifference,
                rawMisMatchPercentage: data.rawMisMatchPercentage,
                misMatchPercentage: data.misMatchPercentage,
                diffBounds: data.diffBounds,
                analysisTime: data.analysisTime
            }

            fs.writeFileSync(`${pathGeneral}compare${i}-${browserType}.png`, data.getBuffer());   
        }
    }

    fs.writeFileSync(`${variable}/report.html`, createReport(datetime, resultInfo));
	fs.copyFileSync('./index.css', `${variable}/index.css`);
} 
(async () => console.log(await cambiarContrasenia()))();

function Paso(p, info){
    return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>Paso: ${p}</h2>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="referencia-pantalla${p}-chromium.png" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="analisis-pantalla${p}-chromium.png" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="compare${p}-chromium.png" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`
}

function createReport(datetime, resInfo){
    let pasos = [1, 2, 3]
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="${config.urlReferencia}"> Ghost Version 3.0 ${config.urlReferencia}</a>
                 <a href="${config.urlReferencia}"> con Ghost Version 3.4 ${config.urlReferencia}</a>
            </h1>
            <p>Executed: ${datetime}</p>
            <h2>CAMBIAR CONTRASEÑA </h2>
            <div id="visualizer">
                ${pasos.map(p=>Paso(p, resInfo[p]))}
            </div>
        </body>
    </html>`
}