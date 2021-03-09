import puppeteer from "puppeteer-extra";
import userPreferences from "puppeteer-extra-plugin-user-preferences";
import { resolve } from "path";

const dir = resolve(__dirname, "..", "covers");

// set user preferences
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
