const fs = require('fs')
const matter = require('gray-matter')
const path = require('path')
const { pages_dir } = require('./static')

const joinPath = (arr = []) => path.resolve(__dirname, '../pages', ...arr)

const getPages = () => {
  return fs.readdirSync(joinPath())
}

const getPage = (...item) => {
  return fs.readdirSync(joinPath(item))
}

const parseRemarkVar = (filePath) => {
  const fileStr = fs.readFileSync(filePath, 'utf8')
  const parseData = matter(fileStr)
  return parseData
}

const handlePages = (pages) => {
  const endPages = {}
  pages.forEach((item) => {
    const children = getPage(item)
    const result = children.map((i, index) => {
      const filePath = joinPath([item, i])
      const { data } = parseRemarkVar(filePath)
      // const path = i.match(/([^\s]*).md$/, '$1')[1]
      const path = i.replace(/\.md$/i, '')
      const isReadme = path.toLowerCase() === 'readme'
      return {
        path: isReadme ? '' : path,
        title: data.title || 'no title',
        id: `${item}_${index + 1}`
      }
    })
    endPages[`${pages_dir}/${item}/`] = [
      {
        title: item,
        children: [...result],
        collapsable: false
      }
    ]
  })
  console.log(JSON.stringify(endPages))
  return endPages
}

module.exports = {
  getPages,
  getPage,
  handlePages
}
