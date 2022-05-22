const { pages_dir } = require('../lib/static')
const { getPages, getPage, handlePages } = require('../lib/pages')

const pages = getPages()
const sidebar = handlePages(pages)

console.log(JSON.stringify(sidebar))
module.exports = sidebar
