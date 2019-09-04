const puppeteer = require('puppeteer');

async function empty_value(){
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://signup.heroku.com');
  await page.waitFor(3000);
  await page.setViewport({width: 1366, height: 788});
  await page.screenshot({path: 'launch.png'});
  
// @@@@@ Test for all fields empty @@@@@
  
// TC start *******************************************************
  // to click on create a new account without any data 
  await page.waitForSelector('body > div.wrapper > div > div.header-main > h2');
  await page.click('body > div.wrapper > div > div.signup-content > div.signup.page-sidebar > form > div:nth-child(14) > input');
  await page.screenshot({path: 'error.png'});
  
  
  const result = await page.evaluate(() => {
  error_str = document.querySelector('#fill-all-fields > strong').innerText;
  return {
        error_str
        }
  });
   
  console.log("######");
  console.log(result);
  await browser.close();
  

}




//Test execution starts here
empty_value();
