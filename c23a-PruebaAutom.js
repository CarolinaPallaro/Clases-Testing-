const { Builder, Key, By, Capabilities } = require("selenium-webdriver")
const chromeCapabilities = Capabilities.chrome()
const assert = require('assert')


async function TC_001(){

    // Settear caracteristicas del navegador
    chromeCapabilities.set('chromeOptions', {args:['--headless']})
    // Definir driver que permite accionar dentro de Chrome
    let driver = await new Builder().forBrowser('chrome').withCapabilities(chromeCapabilities).build()

    // Accionar sobre driver instanciado
    // Dar la URL a la que quiero que se conecte
    await driver.get('https://www.facebook.com/')
    // Cuando se ejecute, que ocupe toda la pantalla (maximizo ventana)
    await driver.manage().window().maximize()

    // Dormir proceso por 10seg (para que al ajecutarlo se vea mas lento)
    await driver.sleep(10000) // No es una buena practica

    // Interactuar con elementos de la UI
    // Localizar elementos por su ID y enviar el valor que quiera (autocompleta los campos)
    await driver.findElement(By.id('email')).sendKeys('dhmaria83@gmail.com')
    await driver.findElement(By.id('pass')).sendKeys('maria12345')
    // Dar click al boton submit (xpath es la alternativa a identificar por id dinamico)
    await driver.findElement(By.xpath("//button[@type='submit']")).click()

    await driver.sleep(2000)

    // Comparar resultado actual con el esperado
    // Validar que al hacer click en inicar sesion, aparece una nueva pantalla con un boton "continuar"
    // Mapeo un elemento nuevo: boton continuar. Almaceno el valor del boton en la variable let
    let buttonTextToCompare = await driver.findElement(By.id('checkpointSubmitButton')).getAttribute('value')
    // Validar que son estricamente iguales el contenido de la variable con el string "Continuar"
    assert.strictEqual(buttonTextToCompare, "Continuar")
    // Si la validacion es exitosa, hago un log
    console.log("Login Successfully");

    await driver.sleep(1000)
    // Cerrar el navegador y la instancia de Selenium Web Driver que esta corriendo
    await driver.quit()

}
TC_001()