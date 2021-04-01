
// import Taro from '@tarojs/taro';
import * as expApi from './service';

export default {
  namespace: 'exp',
  state: {
    cards: [
      {},
      {},
      {},
      {}
    ],
    data: null,
  },
  effects: {
    *foo(action, { put, call, select }) { }

  },
  //修改state中的值
  reducers: {


  },

}
