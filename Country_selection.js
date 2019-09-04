const puppeteer = require('puppeteer');

async function country_selection(){
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://signup.heroku.com');
  await page.waitFor(3000);
  await page.setViewport({width: 1366, height: 788});
  await page.screenshot({path: 'launch.png'});
//@@@@@@@ country selection validation
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
  await page.type("#self_declared_country","Afganistan");
  await page.screenshot({path: 'country_selection_Afganistan.png'});
  console.log("###### validate using the screenshot  for selection of afganistan ");
  await page.waitFor(3000);
  await page.type("#self_declared_country","Macao");
  await page.screenshot({path: 'Country_selection_Macao.png'});
  console.log("###### validate using the screenshot  for selection of macao ");
  await page.waitFor(3000);
  await page.type("#self_declared_country","Zambia");
  await page.screenshot({path: 'Country_selection_Zambia.png'});
  console.log("###### validate using the screenshot for selection of Zambia");
  
  
  await page.waitFor(3000);
 
  // TC End******************************************************* */
  await browser.close(); 
  
}


//Test execution starts here
country_selection();
