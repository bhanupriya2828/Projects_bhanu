const puppeteer = require('puppeteer');

async function positive_flow(){
//@@@@@@@ no validation for  company name as it accepts special characters and numbers and any string length 
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://signup.heroku.com');
  await page.waitFor(3000);
  await page.setViewport({width: 1366, height: 788});
  await page.screenshot({path: 'launch.png'});

  await page.goto('https://signup.heroku.com');
  await page.screenshot({path: 'reload2.png'});
  await page.waitFor(3000);
   //invalid input for first name with special character
  await page.waitForSelector('body > div.wrapper > div > div.header-main > h2');
  await page.type("#first_name","bhanu");
  await page.type("#last_name","priya");
  await page.type("#email","bhanupriya@gmail.com");
  await page.type("#company","company1");
  await page.type("#role","Hobbyist");
  await page.type("#self_declared_country","india");
  await page.type("#main_programming_language","Node.js");
  await page.click('body > div.wrapper > div > div.signup-content > div.signup.page-sidebar > form > div:nth-child(14) > input');
  await page.screenshot({path: 'positive_flow.png'});
  
  //Read the error message
 const result2 = await page.evaluate(() => {
  let error_str2 = document.querySelector('body > div.wrapper > div > div.signup-content > div.signup.page-sidebar > p:nth-child(1)').innerText;
  return {
        error_str2
        }
  });
  
  console.log("###### company name must be company1@ in the screenshot and the error text must be verify capche as page has accepted the company name");
  console.log(result2);
  
  await page.waitFor(3000);
  await browser.close();  
}




//Test execution starts here
positive_flow();
