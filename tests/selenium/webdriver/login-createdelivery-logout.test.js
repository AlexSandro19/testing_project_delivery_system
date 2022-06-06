const webdriver = require('selenium-webdriver');
const { By } = require('selenium-webdriver');
const assert = require('assert');


async function loginCreateDeliveryLogout() {
  let driver = new webdriver.Builder().forBrowser("firefox").build();
  try{
    await driver.get("http://localhost:3000/");

    // // LOGIN // //

    // EMAIL
    const emailInput = driver.findElement(By.id("email"));
	await emailInput.sendKeys('bibendum@outlook.couk');

    // PASSWORD
    const passInput = driver.findElement(By.id("password"));
	await passInput.sendKeys('alex123');

    const submitB = driver.findElement(By.css(".MuiButton-containedPrimary"));
    await submitB.click();

    // // LOGGED ON // //

    // CREATE DELIVERY
    const createDelivery = driver.findElement(By.xpath("//a[contains(text(),'Create a Delivery')]"))
    await createDelivery.click();
    // TEST TO SEE IF YOU ARE ON GET PACKAGE 
    var url = await driver.getCurrentUrl();
    assert.equal(url, "http://localhost:3000/addPackage");
    // ADDING VALUES TO THE PACKAGE

    const weightInput = driver.findElement(By.id("weight"));
	await weightInput.sendKeys('2.0');

    const heightInput = driver.findElement(By.id("height"));
	await heightInput.sendKeys('2.0');

    const widthInput = driver.findElement(By.id("width"));
	await widthInput.sendKeys('2.0');

    const depthInput = driver.findElement(By.id("depth"));
	await depthInput.sendKeys('2.0');


    //SUMBITTING
    const packageSubmit = driver.findElement(By.xpath("//button[@type='submit']"))
    await packageSubmit.click()
    
    // Assert that we moved to delivery
    var url = await driver.getCurrentUrl();
    assert.equal(url, "http://localhost:3000/addDelivery");




    // const internationalChecker = driver.findElement(By.xpath("//div[@id='menu-international']/div[3]/ul/li[2]"));
    // await internationalChecker.click();









    // // LOGOUT // // 
    const logout = driver.findElement(By.xpath("//a[contains(text(),'Logout')]"))
    await logout.click();

    var url = await driver.getCurrentUrl();
    assert.equal(url, "http://localhost:3000/");
    // // LOGGED OUT // //

  } catch(e) {
    //marking the test as Failed if product has not been added to the cart
    console.log("Error:", e.message)
    await driver.executeScript(
      'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "Some elements failed to load."}}'
    );
  }
  await driver.quit();
}
loginCreateDeliveryLogout(); 

  