const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto('https://www.facebook.com/');
  // Perform actions on the page
  // await page.click("a#login_client_id")
  // await page.type("input#pass")
  // await page.click("button#u_0_5_kl")
    await page.type("input#email","protolabzkhushwinder@gmail.com")
    await page.type("input#pass","Protolabz@123")
    await page.click(`button[name="login"]`)
  // ...
  // const data = page.querySelectorAll(".xw7yly9.xh8yej3")
  // console.log(page.content);
  // const bookData = await page.evaluate (
  //   () => {
  //     const bookPods = Array.from(document.querySellectorAll(".x78zum5.x1iyjqo2.x1n2onr6.x1q0g3np"))
  //     return bookPods
  //   })
  // await page.waitForTimeout(5000);

   // Define the selector you want to wait for
   const selectorToWaitFor = 'span.x1lliihq.x6ikm8r.x10wlt62.x1n2onr6'; // Replace 'your-selector' with the actual CSS selector

   // Wait for the selector to appear on the page
   await page.waitForSelector(selectorToWaitFor);
   await page.waitForNavigation({ waitUntil: 'load' });
   await page.screenshot({path: 'screenshot.png'});
   // Execute your code when the selector is found
   console.log(`The selector "${selectorToWaitFor}" is present on the page.`);

     // Use page.evaluate to scrape the entire DOM
     const entireDOM = await page.evaluate(() => {
      // Select the <html> element to capture the entire DOM
      const htmlElement = document.documentElement;

      // Convert the HTML element to an HTML string
      return htmlElement.outerHTML;
    });

    // Print or process the entire DOM as needed
    console.log(entireDOM);
   

 
    
    // console.log(bookData)


  await page.waitForTimeout(35000);
  await browser.close();
})();
