
import taroRequest from '../../utils/request'

export function getFun(data) {
  return taroRequest({
    url: '/',
    method: 'GET',
    data,
  })
}


export async function getCards(condition){

  return    [
    {title:"七里香",url:"https://gss0.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/241f95cad1c8a786dc0cdb9b6609c93d70cf5004.jpg",content:"雨下整夜我的爱溢出就像雨水",type:"句子",singer:"周杰伦1"},
    {title:"夜曲",url:"https://gss0.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/241f95cad1c8a786dc0cdb9b6609c93d70cf5004.jpg",content:"雨下整夜我的爱溢出就像雨水1",type:"句子",singer:"周杰伦2"},
    {title:"七里香1",url:"https://gss0.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/241f95cad1c8a786dc0cdb9b6609c93d70cf5004.jpg",content:"雨下整夜我的爱溢出就像雨水2",type:"句子",singer:"周杰伦3"},
    {title:"七里香2",url:"https://gss0.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/241f95cad1c8a786dc0cdb9b6609c93d70cf5004.jpg",content:"雨下整夜我的爱溢出就像雨水3",type:"音乐",singer:"周杰伦4"},
    {title:"七里香3",url:"https://gss0.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/241f95cad1c8a786dc0cdb9b6609c93d70cf5004.jpg",content:"雨下整夜我的爱溢出就像雨水4",type:"电影",singer:"周杰伦5"},
  ]; 

}
