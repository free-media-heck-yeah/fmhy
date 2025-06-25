export default {
  title: 'My VitePress Site',
  description: 'A static site powered by VitePress',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide' }
    ],
    sidebar: [
      { text: 'Guide', items: [{ text: 'Getting Started', link: '/guide' }] }
    ]
  }
}
