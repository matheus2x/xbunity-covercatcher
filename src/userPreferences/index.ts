import puppeteer from "puppeteer-extra";
import { resolve } from "path";
import userPreferences from "puppeteer-extra-plugin-user-preferences";

const dir = resolve(__dirname, "..", "covers");

puppeteer.use(
  userPreferences({
    userPrefs: {
      download: {
        prompt_for_download: false,
        open_pdf_in_system_reader: true,
        default_directory: dir,
      },
      plugins: {
        always_open_pdf_externally: true,
      },
    },
  })
);
