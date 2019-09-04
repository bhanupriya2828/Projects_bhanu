const puppeteer = require('puppeteer');

async function primary_dev_lang(){
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://signup.heroku.com');
  await page.waitFor(3000);
  await page.setViewport({width: 1366, height: 788});
  await page.screenshot({path: 'launch.png'});

//@@@@@@@ primary development language selection validation
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
  await page.type("#main_programming_language","Ruby");
  await page.screenshot({path: 'prg_lang_selection_Ruby.png'});
  console.log("###### validate using the screenshot  for selection of prgm lang Ruby ");
  await page.waitFor(3000);
  await page.type("#main_programming_language","Java");
  await page.screenshot({path: 'prg_lang__selection_Java.png'});
  console.log("###### validate using the screenshot  for selection of prgm lang Java ");
  await page.waitFor(3000);
  await page.type("#main_programming_language","I'm not a developer");
  await page.screenshot({path: 'prg_lang_selection_not_a_developer.png'});
  console.log("###### validate using the screenshot for selection of prgm lang I'm not a developer");
  
  
  await page.waitFor(3000);
 
  // TC End******************************************************* */
  await browser.close();
  

}



//Test execution starts here
primary_dev_lang();
