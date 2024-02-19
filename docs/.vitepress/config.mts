import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '我的网站',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'about', link: '/re' }
    ],

    sidebar: [
      {
        text: '侧边栏标题',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: '手写bind', link: '/js基础/什么是原型' },
          {
            text: '手写编程',
            link: '/js基础/test',
            items: [{ text: '手写测试啦', link: '/js基础/test' }]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  locales: {
    root: {
      label: '中文',
      lang: 'zh'
    },
    fr: {
      label: 'en',
      lang: 'en', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      link: '/fr/guide' // 默认 /fr/ -- 显示在导航栏翻译菜单上，可以是外部的

      // 其余 locale 特定属性...
    }
  },
  // 重写路由，没成功
  rewrites: {
    '/re.md': '/re2.md'
  }
})
