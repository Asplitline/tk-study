const { pages_dir } = require('../lib/static')
const file = require('fs')

const sidebar = {
  '/guide/': [
    {
      title: 'Guide',
      collapsable: false,
      children: ['', 'using-vue']
    }
  ]
}

export default sidebar
