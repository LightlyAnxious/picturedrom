# picturedrome

Online cinema prototype

## Installation

To get started, you must have
installed Node.js

## Npm scripts

```Node.js
"start": # start dev server,
"build": # start build,
"test": # run jest tests,
"eject": # react-scripts eject,
"fix:js": # run eslint fix,
"lint:js": # run eslint,
"lint:style": # run stylelint,
"fix:style": # run stylelint fix
```

## Project structure

```javascript
├── .env # dotenv config file
├── .eslintrc # eslint configutation
├── .lintstagedrc # lintstaged configutation
├── .nvmrc # required Node version
├── .prettierrc # prettier configutation
├── .stylelintrc # stylelint configutation
├── README.md # this file
├── README_CRA.md # original Readme from CRA
├── .gitignore
├── .vscode #vscode settings folder
├── huskyrc-template # template for husky configuration
├── jsconfig.json # absolute path configuration
├── public # public assets
└── src
    ├── components # React components folder
    ├── fonts # fonts folder
    ├── styles # styles folder
    ├── config.js # shared config file
    ├── features # features logic folder
    ├── index.css
    ├── index.js # entry point file
    ├── serviceWorker.js # service worker boilerplate
    ├── setupTests.js # configuration ti run jest tests
    ├── withProvider.js # utility to generate Provider components
    └── withReduxFeatures.js # Redux store HOC
```
