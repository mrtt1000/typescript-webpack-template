# Webpack written in Typescript to Typescript Application bundled by Webpack

When you want everything to be written in Typescript.

### Package versions

typescript@3.2.2

webpack@4.28.1

webpack-cli@3.1.2

## Getting Started

This project focuses on using the newest version of Typescript and Webpack. 

Webpack is built using the Typescript compiler: tsc, then it uses the compiled `webpack.config.js` to bundle the Typescript application.

For an IDE or editor to be able to do static checking, then it makes most sense to have only one tsonfig.json. This can however create some side effects, since both the webpack builder and the application use the same tsconfig.json 

## Building
To set up the project, you need to run 3 commands and you should be good to go

```
// installs all the dependencies in package.json
npm install 

// compiles Typescript src/webpack/webpack.config.ts to webpack.config.js in the root folder
npm run build-webpack

// bundles the src/app/index.ts to /dist/bundle.js and creates an /dist/index.html which uses bundle.js
npm run build 
```
### Verifying if it works
Now you can navigate your way to `/dist/index.html` to verify if `"Success, its working"` is rendered in the browser.
