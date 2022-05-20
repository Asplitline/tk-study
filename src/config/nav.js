const { pages_dir } = require('../lib/static')
const nav = [
  {
    text: 'Guide',
    link: '/guide/'
  },
  {
    text: 'Config',
    link: '/config/'
  },
  {
    text: 'VuePress',
    link: 'https://v1.vuepress.vuejs.org'
  }
]

module.exports = nav.map((i) => {
  const newLink = i.link.indexOf('http') === -1 ? pages_dir + i.link : i.link
  return {
    ...i,
    link: newLink
  }
})
