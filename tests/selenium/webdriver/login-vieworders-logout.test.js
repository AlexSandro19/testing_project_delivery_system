const webdriver = require('selenium-webdriver');
const { By } = require('selenium-webdriver');
const assert = require('assert');


async function viewOrder() {
  let driver = new webdriver.Builder().forBrowser("firefox").build();
  try{
    await driver.get("http://localhost:3000/");

    // EMAIL
    const emailInput = driver.findElement(By.id("email"));
	await emailInput.sendKeys('bibendum@outlook.couk');

    // PASSWORD
    const passInput = driver.findElement(By.id("password"));
	await passInput.sendKeys('alex123');

    const submitB = driver.findElement(By.css(".MuiButton-containedPrimary"));
    await submitB.click();
    // Thread.sleep(4000);  
    //On the profile page Assertion
    var url = await driver.getCurrentUrl();
    assert.equal(url, "http://localhost:3000/profile");

    const viewOrders = driver.findElement(By.xpath(" //a[contains(text(),'View Orders')]"))
    await viewOrders.click();
    //View Orders Assertions
    var url = await driver.getCurrentUrl();
    assert.equal(url, "http://localhost:3000/viewOrders");

    const logout = driver.findElement(By.xpath("//a[contains(text(),'Logout')]"))
    await logout.click();

    //Back to main page Assertion
    var url = await driver.getCurrentUrl();
    assert.equal(url, "http://localhost:3000/");



  } catch(e) {
    console.log("Error:", e.message)
    await driver.executeScript(
      'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "Some elements failed to load."}}'
    );
  }
  await driver.quit();
}
viewOrder(); 