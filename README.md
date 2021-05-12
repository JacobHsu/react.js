<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby minimal starter
</h1>

## npm

[eslint](https://www.npmjs.com/package/eslint) `.eslintrc` `.eslintignore`  
[normalize.css](https://github.com/necolas/normalize.css/) A modern alternative to CSS resets  

## .babelrc

[Babel](https://www.babeljs.cn/docs/) 是一个 JavaScript 编译器
Babel 是一个工具链，主要用于将采用 ECMAScript 2015+ 语法编写的代码转换为向后兼容的 JavaScript 语法

 1 problem (1 error, 0 warnings)
> src\components\LayoutHeader\Header.js:  
Unexpected token, expected "," (17:26)

```js
const Header = ({location}: {location: Location}) =>
// const Header = ({location}) =>
```

`src\.babelrc`

package.json

```js
,
  "devDependencies": {
    "@babel/preset-flow": "^7.0.0"
  }
```

## 設定 gatsby 可不用相對路徑

> Module not found: Error: Can't resolve  'components/Layout' in 

目標 `import Layout from 'components/Layout';`
原本應寫 `import Layout from '../components/Layout';`

> gatsby-node.js  

`exports.onCreateWebpackConfig = require('./gatsby/onCreateWebpackConfig');`

## 🚀 [Quick start](https://www.gatsbyjs.com/docs/quick-start/)

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-minimal)
