module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    smoothScroll: true, //配置滚动效果
    nav: [
      { text: 'Home', link: '/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: '图形推理', // 必要的
        path: '/GraphicalReasonging/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [
          '/GraphicalReasonging/图形推理.html',
          '/GraphicalReasonging/行政职业能力测验.html',
        ],
      },
      {
        title: 'Group 2',
        children: [
          /* ... */
        ],
        initialOpenGroupIndex: -1, // 可选的, 默认值是 0
      },
    ],
  },
};
