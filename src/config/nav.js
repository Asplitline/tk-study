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
    text: 'Test',
    link: '/test/'
  },
  {
    text: '文档学习',
    items: [{ text: 'Vue2', link: '/docs/vue2' }]
  }
  // {
  //   text: 'VuePress',
  //   link: 'https://v1.vuepress.vuejs.org'
  // }
]

const endNav = nav.map((i) => {
  const items = i.items?.map((i) => {
    return {
      ...i,
      link: pages_dir + i.link
    }
  })
  const newLink = i.link?.indexOf('http') === -1 ? pages_dir + i.link : i.link
  return {
    ...i,
    link: newLink,
    items
  }
})
// console.log(JSON.stringify(endNav))
module.exports = endNav
