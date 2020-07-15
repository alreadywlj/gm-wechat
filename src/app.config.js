export default {
  pages: [
    'pages/index/index',
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
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  
}


/* tabBar: {
  list: [
    {
      pagePath: 'pages/index/index',
      text: '首页',
     // iconPath: './images/tab/ho/* me.png',
     // selectedIconPath: './images/tab/home-active.png', 
    },
    {
      pagePath: 'pages/index/child',
      text: '登录',
      //iconPath: './images/tab/cart.png',
      //selectedIconPath: './images/tab/cart-active.png',
    }, 
    /* {
      pagePath: 'pages/user/index',
      text: '我的',
      iconPath: './images/tab/user.png',
      selectedIconPath: './images/tab/user-active.png',
    }, */
 // ],
 // color: '#333',
  //selectedColor: '#333',
 // backgroundColor: '#fff',
  //borderStyle: 'white',
//}, */