# Updocs
Template docs for everyone

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/creatif-studio/creatif-docs)](https://github.com/creatif-studio/creatif-docs/issues)
[![GitHub stars](https://img.shields.io/github/stars/creatif-studio/creatif-docs)](https://github.com/creatif-studio/creatif-docs/stargazers)

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Change Title & favicon Web
open file `docusaurus.config.js` see on lines 9 - 11, and change the title or favicon

```
title: "Creatif Studio Blog",
tagline: "Dinosaurs are cool",
favicon: "img/favicon.ico",
```

### Change Navbar Logo & Title
open file `docusaurus.config.js` see on line 67, and change the title & logo navbar on key `navbar` like this:

```
 navbar: {
    title: "Creatif Studio",
    logo: {
      src: "img/logo-light.png",
      srcDark: "img/logo-dark.png",
    },
 }
```

`src` for light logo
`srcDark` for dark logo

### Setup
This command starts a development server and opens up a browser window.

```
$ yarn
$ yarn build
$ yarn start
```
