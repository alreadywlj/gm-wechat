export default {
  pages: [
    'pages/mood/index',
    'pages/exp/index',
    'pages/mine/index',
  ],
  // "subpackages": [
  //   {
  //     "root": "pagesMine",
  //     "pages": [
  //       "mine/mine"
  //     ]
  //   }],
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
        pagePath: 'pages/mood/index',
        text: 'Mood',
        iconPath: './public/images/tab/classic.png',
        selectedIconPath: './public/images/tab/classic@highlight.png',
      },
      {
        pagePath: 'pages/exp/index',
        text: 'Exp',
        iconPath: './public/images/tab/book.png',
        selectedIconPath: './public/images/tab/book@highlight.png',
      },
      {
        pagePath: 'pages/mine/index',
        text: 'Mine',
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


