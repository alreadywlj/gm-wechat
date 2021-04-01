
// import Taro from '@tarojs/taro';
import { getArticle } from './service';

export default {
  namespace: 'article',
  state: {
    data: null,
    detailArticle: {
      title: '辰尚智能音频翻译系统',
      date: '2019-07 - 2019-10',
      desc: '辰尚智能音频翻译系统是XXX',
      techSel: 'java , mongodb ,  mysql , springBoot , springCloud , mybatis',
      job: '代码编写',
    },
  },
  effects: {
    *getDetailArticle({ payload: { aId } }, { call, put }) {

      const res = yield call(getArticle, aId);


      yield put({
        type: 'initDetailArticle',
        payload: {
          data: res,
        }
      })


    }
  },
  reducers: {
    initDetailArticle(state, { payload: { data } }) {
      console.log(data);
    },
  },
}
