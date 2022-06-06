const webdriver = require('selenium-webdriver');
const { By } = require('selenium-webdriver');
const assert = require('assert');

// async function loginlogoutOne(){
//     let driver = await new Builder().forBrowser("firefox").build()
//     driver.get("http://localhost:3000");

//     //EMAIL
//     var loginId = driver.findElement(By.id("email"));
// 	loginId.sendKeys('bibendum@outlook.couk');
//     //PASSWORD
//     var passwd = driver.findElement(By.id("password"));
// 	passwd.sendKeys('alex123');
//     //SUMBIT
//     driver.quit();
// }

async function loginLogout() {
  let driver = new webdriver.Builder().forBrowser("firefox").build();
  try{
    await driver.get("http://localhost:3000/");

    // EMAIL
    const emailInput = driver.findElement(By.id("email"));
	await emailInput.sendKeys('bibendum@outlook.couk');

    const passInput = driver.findElement(By.id("password"));
	await passInput.sendKeys('alex123');

    const submitB = driver.findElement(By.css(".MuiButton-containedPrimary"));
    await submitB.click();
    // Thread.sleep(4000);  
    // driver.getCurrentUrl()
    //   .getText().then(textValue => {
    //     assert.equal('tested string', textValue);
    //   });
    var url = await driver.getCurrentUrl();
    assert.equal(url, "http://localhost:3000/profile");

  } catch(e) {
    //marking the test as Failed if product has not been added to the cart
    console.log("Error:", e.message)
    await driver.executeScript(
      'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "Some elements failed to load."}}'
    );
  }
  await driver.quit();
}
loginLogout(); 
