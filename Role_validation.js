const puppeteer = require('puppeteer');

async function role_selection(){
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://signup.heroku.com');
  await page.waitFor(3000);
  await page.setViewport({width: 1366, height: 788});
  await page.screenshot({path: 'launch.png'});
//@@@@@@@ Role selection validation
  // TC start *******************************************************
  //page reload 
  await page.goto('https://signup.heroku.com');
  await page.screenshot({path: 'reload7.png'});
  await page.waitFor(3000);
   //choosing the case first possible option for agency 
  await page.waitForSelector('body > div.wrapper > div > div.header-main > h2');
  await page.type("#first_name","bhanu priya");
  await page.type("#last_name","priya");
  await page.type("#email","Jemail@domain.com");
  await page.type("#company","company");
  await page.type("#role","Agency/Partner Developer");
  await page.screenshot({path: 'Role_selection_Agency.png'});
  console.log("###### validate using the screenshot  for selection of agency/partner developer ");
  await page.waitFor(3000);
  await page.type("#role","Professional Developer");
  await page.screenshot({path: 'Role_selection_Professional Developer.png'});
  console.log("###### validate using the screenshot  for selection of Professional Developer ");
  await page.waitFor(3000);
  await page.type("#role","Other");
  await page.screenshot({path: 'Role_selection_Other.png'});
  console.log("###### validate using the screenshot for selection of Others ");
  
  
  await page.waitFor(3000);
 
  // TC End******************************************************* */
  await browser.close();
  
}
//Test execution starts here
role_selection();
