const puppeteer = require('puppeteer');

async function validate_firstname_lastname(){

  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://signup.heroku.com');
  await page.waitFor(3000);
  await page.setViewport({width: 1366, height: 788});
  await page.screenshot({path: 'launch.png'});

// @@@@@ Test for First_name and Last_name @@@@@
  
  // TC start *******************************************************
  //page reload 
  await page.reload();
  await page.screenshot({path: 'reaload1.png'});
   //invalid input for first name with number
  await page.waitForSelector('body > div.wrapper > div > div.header-main > h2');
  await page.waitForSelector('body > div.wrapper > div > div.header-main > h2');
  await page.type("#first_name","bhanu1");
  await page.type("#last_name","priya1");
  await page.type("#email","bhanupriya@gmail.com");
  await page.type("#company","company");
  await page.type("#role","Hobbyist");
  await page.type("#self_declared_country","india");
  await page.type("#main_programming_language","Node.js");
  await page.click('body > div.wrapper > div > div.signup-content > div.signup.page-sidebar > form > div:nth-child(14) > input');
  await page.screenshot({path: 'input_num.png'});
  
  //Read the error message
  const result1 = await page.evaluate(() => {
  let error_str1 = document.querySelector('body > div.wrapper > div > div.signup-content > div.signup.page-sidebar > p:nth-child(1)').innerText;
  return {
        error_str1
        }
  });
  
  console.log("###### first name and last_name with number");
  console.log(result1);
  
  await page.waitFor(3000);
  // TC End*******************************************************
  
 // TC start *******************************************************
  //page reload 
  await page.goto('https://signup.heroku.com');
  await page.screenshot({path: 'reload2.png'});
  await page.waitFor(3000);
   //invalid input for first name with special character
  await page.waitForSelector('body > div.wrapper > div > div.header-main > h2');
  await page.type("#first_name","bhanu$");
  await page.type("#last_name","priya$");
  await page.type("#email","bhanupriya@gmail.com");
  await page.type("#company","company");
  await page.type("#role","Hobbyist");
  await page.type("#self_declared_country","india");
  await page.type("#main_programming_language","Node.js");
  await page.click('body > div.wrapper > div > div.signup-content > div.signup.page-sidebar > form > div:nth-child(14) > input');
  await page.screenshot({path: 'input_spe.png'});
  
  //Read the error message
 const result2 = await page.evaluate(() => {
  let error_str2 = document.querySelector('body > div.wrapper > div > div.signup-content > div.signup.page-sidebar > p:nth-child(1)').innerText;
  return {
        error_str2
        }
  });
  
  console.log("###### first name and Last_name with special  character");
  console.log(result2);
  
  await page.waitFor(3000);
  // TC End*******************************************************
await browser.close();
}


//Test starts here
validate_firstname_lastname();