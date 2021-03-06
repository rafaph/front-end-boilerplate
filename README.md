## My personal front end boilerplate

[![devDependency Status](https://img.shields.io/david/dev/rafaph/front-end-boilerplate.svg)](https://david-dm.org/rafaph/front-end-boilerplate#info=devDependencies)

#### Usage

* Clone this repository:

```shell
git clone https://github.com/rafaph/front-end-boilerplate.git
```

* Install dependencies:

```shell
cd front-end-boilerplate
npm install
```

* Avaliable configurations:

```js
// found at ./config.js

const OUTPUT = './static';           //output directory
const INPUT = './assets';            //input directory

export default {
  debug: true,                       // if false, the output will be minified
  watch: false,                      //watch files for changes to rebuild
  js: {
    entry: `${INPUT}/js/index.js`,   //javascript entry point for webpack
    output: {                        //javascript output for webpack
      path: `${OUTPUT}/js`,          //javascript output path
      filename: 'app.js'             //javascript filename
    },
    eslint: [                        //eslint globs
      `${INPUT}/js/**/*.js`,
      '!node_modules/**'
    ]
  },
  sass: {
    output: `${OUTPUT}/css`,         //sass directory output
    files: `${INPUT}/sass/**/*.scss` //sass entries
  },
  fonts: {
    output: `${OUTPUT}/fonts`,       //fonts directory output
    files: [
      `${INPUT}/fonts/**/*`         //fonts
    ]
  }
};
```

* Tasks:

  * `npm run gulp` or `gulp`: build the project.
  * `npm run eslint` or `gulp eslint`: lint the js code.
