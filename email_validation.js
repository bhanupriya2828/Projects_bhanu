const puppeteer = require('puppeteer');

async function email_validation(){
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://signup.heroku.com');
  await page.waitFor(3000);
  await page.setViewport({width: 1366, height: 788});
  await page.screenshot({path: 'launch.png'});
//@@@@@@@@@ validation of email field @@@@@@@
  // TC start *******************************************************
  //page reload 
  await page.goto('https://signup.heroku.com');
  await page.screenshot({path: 'reload3.png'});
  await page.waitFor(3000);
   //invalid email missing username
  await page.waitForSelector('body > div.wrapper > div > div.header-main > h2');
  await page.type("#first_name","bhanu priya");
  await page.type("#last_name","priya");
  await page.type("#email","@gmail.com");
  await page.type("#company","company");
  await page.type("#role","Hobbyist");
  await page.type("#self_declared_country","india");
  await page.type("#main_programming_language","Node.js");
  await page.click('body > div.wrapper > div > div.signup-content > div.signup.page-sidebar > form > div:nth-child(14) > input');
  await page.screenshot({path: 'input_email_missingusername.png'});
  
 
  console.log("###### email field validation for missing username");
  console.log("Refer to the screenshot for error message ");
  
  await page.waitFor(6000);
  // TC End*******************************************************
  
  // TC start *******************************************************
  //page reload 
  await page.goto('https://signup.heroku.com');
  await page.screenshot({path: 'reload4.png'});
  await page.waitFor(3000);
   //invalid email missing @ and domain
  await page.waitForSelector('body > div.wrapper > div > div.header-main > h2');
  await page.type("#first_name","bhanu priya");
  await page.type("#last_name","priya");
  await page.type("#email","bhanupriya");
  await page.type("#company","company");
  await page.type("#role","Hobbyist");
  await page.type("#self_declared_country","india");
  await page.type("#main_programming_language","Node.js");
  await page.click('body > div.wrapper > div > div.signup-content > div.signup.page-sidebar > form > div:nth-child(14) > input');
  await page.screenshot({path: 'input_email_missing_domain.png'});
  
 
  console.log("###### email field validation for missing @ and domain");
  console.log("Refer to the screenshot for error message ");
  
  await page.waitFor(6000);
  // TC End*******************************************************
 
 // TC start *******************************************************
  //page reload 
  await page.goto('https://signup.heroku.com');
  await page.screenshot({path: 'reload5.png'});
  await page.waitFor(3000);
   //invalid email missing two @ 
  await page.waitForSelector('body > div.wrapper > div > div.header-main > h2');
  await page.type("#first_name","bhanu priya");
  await page.type("#last_name","priya");
  await page.type("#email","bhanupriya@gmail@com");
  await page.type("#company","company");
  await page.type("#role","Hobbyist");
  await page.type("#self_declared_country","india");
  await page.type("#main_programming_language","Node.js");
  await page.click('body > div.wrapper > div > div.signup-content > div.signup.page-sidebar > form > div:nth-child(14) > input');
  await page.screenshot({path: 'input_email_double_@.png'});
  
 
  console.log("###### email field validation for double @ ");
  console.log("Refer to the screenshot for error message ");
  
  await page.waitFor(6000);
  // TC End*******************************************************  
  
  // TC start *******************************************************
  //page reload 
  await page.goto('https://signup.heroku.com');
  await page.screenshot({path: 'reload6.png'});
  await page.waitFor(3000);
   //invalid encoded html with email 
  await page.waitForSelector('body > div.wrapper > div > div.header-main > h2');
  await page.type("#first_name","bhanu priya");
  await page.type("#last_name","priya");
  await page.type("#email","Joe Smith <email@domain.com>");
  await page.type("#company","company");
  await page.type("#role","Hobbyist");
  await page.type("#self_declared_country","india");
  await page.type("#main_programming_language","Node.js");
  await page.click('body > div.wrapper > div > div.signup-content > div.signup.page-sidebar > form > div:nth-child(14) > input');
  await page.screenshot({path: 'input_encodedhtml_email.png'});
  
 
  console.log("###### encoded html with email");
  console.log("Refer to the screenshot for error message ");
  
  await page.waitFor(6000);
  // TC End******************************************************* 
  await browser.close();

}

//Test execution starts here
email_validation();
