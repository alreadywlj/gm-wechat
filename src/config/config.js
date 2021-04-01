// const BASE_URL = 'https://api-plus.lhbgame.com/Promotion/getTabList';

//基本调用的连接地址
const BASE_URL = 'http://localhost:8081';

//请求路径
const REQUEST_URL = {
    ARTICLE: '/articles/',
    CARD:'/cards/',
    BANNER:'/banners/',
    CATEGORY:'/categories/'
};




// 是否在控制台需要展示redux log信息
const IS_SHOW_REDUX_LOGGER = true;

export { BASE_URL, IS_SHOW_REDUX_LOGGER, REQUEST_URL };
