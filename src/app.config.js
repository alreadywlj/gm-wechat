export default {
  pages: [
    // 'pages/index/index',
    // 'pages/test/index',
   // 'pages/mood/index',
    'pages/exp/index',
    'pages/mine/index',
    'pages/introduce/index',
    'components/article/article',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'Hi 欢迎来到 JerryWei 的个人空间',
    navigationBarTextStyle: 'black'
  },
  requiredBackgroundModes: ["audio"],
  tabBar: {
    list: [
      {
        pagePath: 'pages/introduce/index',
        text: '简介',
        iconPath: './public/images/tab/classic.png',
        selectedIconPath: './public/images/tab/classic@highlight.png',
      },
      {
        pagePath: 'pages/exp/index',
        text: '项目经验',
        iconPath: './public/images/tab/book.png',
        selectedIconPath: './public/images/tab/book@highlight.png',
      },
      {
        pagePath: 'pages/mine/index',
        text: '关于作者',
        iconPath: './public/images/tab/my.png',
        selectedIconPath: './public/images/tab/my@highlight.png',
      },
    ],
    color: '#002766',
    selectedColor: '#1890ff',
    backgroundColor: 'white',
    borderStyle: 'white',
  },

}
