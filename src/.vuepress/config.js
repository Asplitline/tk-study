// const { description } = require('../../package')
// console.log(description)
// import { navList } from './config'
const { nav, sidebar } = require('../config')

module.exports = {
  title: 'Tk Docs',
  description: 'my notes',
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  base: '',
  sidebarDepth: 2,
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: nav,
    // sidebar: sidebar,
    // sidebar: {
    //   '/pages/guide/': [
    //     {
    //       title: 'Guide',
    //       collapsable: false,
    //       children: ['a', 'b']
    //     }
    //   ],
    //   '/pages/config/': [
    //     {
    //       title: 'Config',
    //       collapsable: false,
    //       children: ['a', 'b']
    //     }
    //   ],
    //   '/pages/test/': [
    //     {
    //       title: 'Config',
    //       collapsable: false,
    //       children: ['a', 'b']
    //     }
    //   ]
    // }
    sidebar: {
      '/pages/config/': [
        {
          title: 'config',
          children: [
            {
              path: 'a',
              title: '快捷键',
              id: 'config_1'
            },
            {
              path: 'b',
              title: '新的标题a',
              id: 'config_2'
            },
            {
              path: '',
              title: 'no title',
              id: 'config_3'
            }
          ]
        }
      ],
      '/pages/guide/': [
        {
          title: 'guide',
          children: [
            {
              path: 'a',
              title: '你好呀',
              id: 'guide_1'
            },
            {
              path: 'b',
              title: '你好呀b',
              id: 'guide_2'
            },
            {
              path: '',
              title: 'no title',
              id: 'guide_3'
            },
            {
              path: 'using-vue',
              title: 'using-vue',
              id: 'guide_4'
            }
          ]
        }
      ],
      '/pages/test/': [
        {
          title: 'test',
          children: [
            {
              path: 'a',
              title: '快捷键',
              id: 'test_1'
            },
            {
              path: 'b',
              title: '新的标题a',
              id: 'test_2'
            },
            {
              path: '',
              title: 'no title',
              id: 'test_3'
            }
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom']
}
