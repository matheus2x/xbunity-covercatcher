import puppeteer from "puppeteer-extra";

import "../userPreferences";

(async () => {
  // open browser
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: {
      height: 900,
      width: 1600,
    },
  });
  const page = await browser.newPage();
  await page.goto("http://www.xboxunity.net/", { waitUntil: "load" });

  // type the game in input
  await page.type("#searchtext", "cod");
  await page.type("#searchtext", String.fromCharCode(13));
  await page.waitForTimeout(3000);

  // click in cover button to see all covers
  await page.click("#TC415608C3.tab.tabcovers");
  await page.waitForTimeout(3000);

  // download cover
  await page.click(".CoverDownload");
  await page.waitForTimeout(3000);

  await browser.close();
})();
