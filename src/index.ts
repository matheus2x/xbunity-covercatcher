import puppeteer from "puppeteer-extra";
import fs from "fs-extra";
import path from "path";

import titlesID from "./data/titlesID.json";

import "./userPreferences";

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: {
      height: 900,
      width: 1600,
    },
  });

  const page = await browser.newPage();
  await page.goto("http://www.xboxunity.net/", { waitUntil: "load" });

  const downloadCovers = async (titleID: string): Promise<void> => {
    const submitCharCode = 13;

    await page.type("#searchtext", titleID);
    await page.type("#searchtext", String.fromCharCode(submitCharCode));
    await page.waitForTimeout(3000);

    const gameUnityName = await page.$eval(
      `div#Title${titleID} > div.Content-Left`,
      (element) => element.innerHTML
    );

    const [, totalCovers] = await page.$eval(
      `#TC${titleID}.tab.tabcovers`,
      (element) => element.innerHTML.split(" ")
    );

    fs.mkdir(path.join(__dirname, "covers", gameUnityName), (err) => {
      if (err) {
        console.error(err.message);
      }
      console.log(`\nGenerated folder for "${gameUnityName}"`);
    });

    await page.waitForTimeout(1500);
    const coversDir = path.resolve(__dirname, "covers", gameUnityName);
    fs.writeFileSync(`${coversDir}/__${titleID}__`, titleID);

    await page.click(`#TC${titleID}.tab.tabcovers`);
    await page.waitForTimeout(5000);

    const downloadOrSkipCover = async (): Promise<void> => {
      const coverExists = (await page.$("p.fancybox-error")) === null;
      await page.waitForTimeout(3000);

      if (!coverExists) {
        await page.click("a.btnnext");
        await page.waitForTimeout(5000);
        return;
      }

      await page.click(".CoverDownload");
      await page.waitForTimeout(6000);

      await page.click("a.btnnext");
      await page.waitForTimeout(3000);
    };

    const coversNumber = parseInt(totalCovers, 10);
    for (let i = 1; i <= coversNumber; i += 1) {
      await downloadOrSkipCover();

      console.log(
        `\nChecking cover #${i} for game: "${gameUnityName}" - ${
          coversNumber - i
        } Covers remaining.`
      );
    }

    await page.click("a.btnclose");

    const tempCoversPath = path.resolve(__dirname, "covers");
    const coversTempDir = await fs.readdir(tempCoversPath);
    const covers = coversTempDir.filter((file) => file.endsWith(").png"));

    const coversPath = `${tempCoversPath}/${gameUnityName}`;

    for (const cover of covers) {
      await fs.move(`${tempCoversPath}/${cover}`, `${coversPath}/${cover}`, {
        overwrite: true,
      });
    }
  };

  for (const titleID of titlesID) {
    await downloadCovers(titleID);
  }
  await browser.close();
})();
