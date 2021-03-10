<h1 align="center">
    <img alt="Logo" title="#logo" width="200px" src=".github/UnityBanner.png"><br>
</h1>
<hr>

# Summary

- [What is this?](#what-is-this)
- [Techs used](#techs-used)
- [Getting started](#getting-started)
- [BOT Usage](#bot)
- [Useful URLs](#useful-urls)

<a id="what-is-this"></a>

## :thinking: What is this?

This is a robot that downloads all the covers of an Xbox 360 game available at http://xboxunity.net by the titleID of the game.

<a id="techs-used"></a>

## :rocket: Techs used

- **Node.js** - A JavaScript Interpreter
- **TypeScript** - A Superset for JavaScript
- **Puppeteer** - A library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol

<a id="getting-started"></a>

## :fire: Getting started

- ### You may **need** to install:

  - A Distributed **Version-Control-System** -> [Git](https://git-scm.com/ "Git")
  - A JavaScript **Interpreter** -> [Node.js](https://nodejs.org/ "Node.js")
  - Some **Package Manager** Like -> [NPM](https://www.npmjs.com/) **or** [Yarn](https://yarnpkg.com/)

- ### Others requirements:

  - A Chromium based browser Like -> [Chromium](https://www.chromium.org/getting-involved/download-chromium/ "Chromium") **or** [Google Chrome](https://www.google.com/chrome/ "Google Chrome")

1. Clone this repo with:

```sh
  $ git clone https://github.com/matheus2x/xbunity-covercatcher.git
```

2. Move yourself to the appropriate directory: `$ cd xbunity-covercatcher`
3. Run `$ npm run install` or `$ yarn` to install dependencies

<br>

<a id="bot"></a>

## :orange_book: BOT Usage

1. Go to `titlesID.json` located at `./src/data/titlesID.json`:

📂src
 ┣ 📂@types
 ┣ 📂covers
 ┣ 📂data
 ┃ ┗ 📜**titlesID.json**
 ┣ 📂userPreferences
 ┗ 📜index.ts

 2. In `titlesID.json` change the array with the TitlesID of the games you want to download the cover (by default, it will download covers for some LEGO games)
 3. Run `$ npm run start` or `$ yarn start`

<br>
<a id="useful-urls"></a>

## :link: Useful URLs

- [Git](https://git-scm.com/ "Git")
- [Node](https://nodejs.org/ "Node")
- [puppeteer](https://www.npmjs.com/package/puppeteer/ "puppeteer")

---

<h4 align="center">
    Made with :fox_face: by <a href="https://www.linkedin.com/in/matheus2x/" target="_blank">Matheus Henrique</a>
</h4>
