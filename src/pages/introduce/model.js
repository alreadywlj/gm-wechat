
// import Taro from '@tarojs/taro';
import { getCards } from './service';

export default {
  namespace: 'introduce',
  state: {
    isLike: false,
    cards: [{ title: "填充初始化数据", url: "https://gss0.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/241f95cad1c8a786dc0cdb9b6609c93d70cf5004.jpg", content: "雨下整夜我的爱溢出就像雨水", type: "句子", singer: "周杰伦" }],
    nowCardIndex: 0,
  },
  //异步调用接口常用
  effects: {
    *initState({ payload }, { call, put }) {
      //调用接口传入参数
      const res = yield call(getCards, payload);

      yield put({
        type: 'init',
        payload: {
          data: res ? res : {},
        }
      })
    }


  },

  //修改state状态
  reducers: {
    init(state, { payload }) {
      return {
        ...state,
        cards: payload.data,
      }
    },

    isLike(state, { payload: { isLike } }) {


      return { ...state, isLike };

    },

    setCards(state, { payload: { cards } }) {
      if (cards) {

        return { ...state, cards };

      }
    },
    changeCardIndex(state, { payload: { nowCardIndex } }) {
      return { ...state, nowCardIndex };
    },
  },
  subscriptions: {

  },
}
