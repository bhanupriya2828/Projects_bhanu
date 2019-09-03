const puppeteer = require('puppeteer');



let error_str,n;
let error_str1= "Please fill in all required fields.";

async function launch_browser(){
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
  /*if(result == "{ error_str: 'Please fill in all required fields.' }")
  {
  console.log("passed")
  }*/
  /*var n= error_str.equals("Please fill in all required fields.")
  console.log("$$$$");
  console.log(n);
  if (n == 0)
  {
  	console.log("All fields missing please fill, passed");
  }
  else
  {
  console.log("failed");
  }*/
  // TC End *********************************************************
  
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
  
  //@@@@@@@ no validation for  company name as it accepts special characters and numbers and any string length 
  

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
  //await page.screenshot({path: 'close.png'});
}


launch_browser();

