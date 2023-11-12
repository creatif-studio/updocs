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

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push it to the `gh-pages` branch.
