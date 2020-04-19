/*
this file serves as a module aggregate to make all the exports of the package available under a single import.
It's standard to name it `index.js` or `main.js` often refering to wether the package uses CJS or ESM.
some packages provide both, as they can be individually specified in the package.json for maximum plugability.
*/
export * from './model'
export * from './view'
export * from './controller'
