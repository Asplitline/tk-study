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
    items: [
      { text: 'Flutter 小记', link: '/flutter-guide/' },
      { text: '前端工程化', link: '/frontend-engineering/' },
      { text: 'Node 实践', link: '/node/' },
      { text: 'Web 性能优化', link: '/web-performance/' },
      { text: '有可能你并不需要服务器', link: '/no-vps/' },
      { text: 'Docker 个人服务器运维', link: '/op/' },
      { text: 'Kubernetes 服务器集群运维', link: '/k8s/' }
    ]
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
