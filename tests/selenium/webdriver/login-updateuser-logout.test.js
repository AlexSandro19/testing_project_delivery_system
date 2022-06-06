const webdriver = require('selenium-webdriver');
const { By } = require('selenium-webdriver');
const assert = require('assert');


async function loginUpdateUserLogout() {
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

    // UPDATE PROFILE
    const createDelivery = driver.findElement(By.xpath("//a[contains(text(),'Update Profile')]"))
    await createDelivery.click();
    // TEST TO SEE IF YOU ARE ON Update Profile Page
    var url = await driver.getCurrentUrl();
    assert.equal(url, "http://localhost:3000/updateProfile");

    const updpassInput = driver.findElement(By.id("password"));
	await updpassInput.sendKeys('alex123');

    const updpassInputConfirm = driver.findElement(By.id("passwordConfirm"));
	await updpassInputConfirm.sendKeys('alex123');

    const updSecondName = driver.findElement(By.id("secondName"));
	await updSecondName.sendKeys('Colonels');

    //Sumbit Button
    const submitUserUpd = driver.findElement(By.xpath("//button[@type='submit']"))
    await submitUserUpd.click()

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
loginUpdateUserLogout(); 