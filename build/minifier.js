const fs = require('fs')
const _ = require('lodash')
const minify = require('html-minifier').minify

const content = fs.readFileSync('./src/template/index.html', 'utf-8')

let {
  groups: { html }
} = /<body>(?<html>[\s\S]+)<\/body>/g.exec(content)

const text = {
  first: '新',
  second: '年'
}

Object.keys(text).forEach((key) => {
  html = html.replace(`{text${_.upperFirst(key)}}`, text[key])
})

const result = minify(html, {
  collapseWhitespace: true
})

const writeContent = `
  export default '${result}'
`

fs.writeFileSync('./src/template/element.min.js', writeContent)
