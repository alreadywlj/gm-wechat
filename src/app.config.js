export default {
  pages: [
    'pages/index/index',
    'pages/login/index',
    'pages/mine/index',
  ],
  "subpackages": [
    {
      "root": "pagesMine",
      "pages": [
        "mine/mine"
      ]
    }],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'Hi 欢迎来到 JerryWei 的个人空间',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '个人简介',
        iconPath: './public/images/tab/home.png',
        selectedIconPath: './public/images/tab/home-active.png',
      },
      {
        pagePath: 'pages/login/index',
        text: '项目经验',
        iconPath: './public/images/tab/cart.png',
        selectedIconPath: './public/images/tab/cart-active.png',
      },
      {
        pagePath: 'pages/mine/index',
        text: '教育背景',
        iconPath: './public/images/tab/user.png',
        selectedIconPath: './public/images/tab/user-active.png',
      },
    ],
    color: '#002766',
    selectedColor: '#1890ff',
    backgroundColor: 'white',
    borderStyle: 'white',
  },

}


