/**
 * pages页面快速生成脚本 
 * 用法：npm run tep `文件名`
 */

const fs = require('fs');

const dirName = process.argv[2];
if (!dirName) {
    console.log('文件夹名称不能为空！');
    console.log('示例：npm run temp test');
    process.exit(0);
}
const capPirName = dirName.substring(0, 1).toUpperCase() + dirName.substring(1);
//页面模板
const indexTep = `
import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { connect } from 'react-redux'
import styles from './index.scss'

@connect(({ ${dirName} }) => ({
    ...${dirName},
}))

class ${capPirName} extends Component {
  config = {
    navigationBarTitleText: '标题'
  }
  constructor(props) {
    super(props)
    this.state = {}
  }

 
  componentWillMount() {
    // console.log("willMount--->页面加载前", "1");
  }

  /**
   * 更改组件的状态
   * 页面初始化时会调用 
   */
  componentDidMount() {
    // console.log("componentDidMount-->页面加载时", "2");


  }

  /**
   * 销毁
   */
  componentWillUnmount() {
    // console.log("componentWillUnmount-->页面销毁时");
  }

  /**
   * 在react中不存在 页面显示时会触发
   */
  componentDidShow() {
    // console.log("页面显示时会触发--->componentDidShow", "2");
  }

  /**
  * 在react中不存在 页面隐藏时会触发
  */
  componentDidHide() {
    // console.log("componentDidHide--->componentDidHide");
  }

  /**
   * state 中数据将要更新的时候
   */
  componentWillUpdate() {
    // console.log("componentWillUpdate--->数据将要更新的时候");
  }

  /**
   * state 数据更新过后
   */
  componentDidUpdate() {
    // console.log("componentWillUpdate--->数据更新过后");
  }

  /**
   * 组件状态被更改的时候 
   * nexProps:最新的属性
   * nextState:最新的状态
   */
  shouldComponentUpdate(nextProps, nextState) {
     //这个组件默认返回true return true;
     //一般用来多次setState调用时,提升render的性能
   }

  /**
   * 父组件给子组件传递属性时才会被调用
   */
  componentWillReceiveProps() {

  }

  render() {
    return (
      <View className={styles.${dirName}}>
          
      </View>
    )
  }
}

export default ${capPirName}
`

// scss文件模版
const scssTep = `
.${dirName} {
    width: 100%;
    min-height: 100vh;
}
`

// config 接口地址配置模板
const configTep = `
export default {
  navigationBarTitleText: 'xx'
}
`
// 接口请求模板
const serviceTep = `
import taroRequest from '../../utils/request'

export function getFun(data) {
  return taroRequest({
    url: '/',
    method: 'GET',
    data,
  })
}
`

//model模板

const modelTep = `
// import Taro from '@tarojs/taro';
import * as ${dirName}Api from './service';

export default {
  namespace: '${dirName}',
  state: {
  },

  effects: {},

  reducers: {}

}
`

fs.mkdirSync(`./src/pages/${dirName}`); // mkdir $1
process.chdir(`./src/pages/${dirName}`); // cd $1

fs.writeFileSync(`index.jsx`, indexTep); //tsx
fs.writeFileSync(`index.scss`, scssTep); // scss
fs.writeFileSync('index.config.js', configTep); // config
fs.writeFileSync('service.js', serviceTep); // service
fs.writeFileSync('model.js', modelTep); // model
process.exit(0);