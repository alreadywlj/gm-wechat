import React, { Component } from 'react'

import Taro, { requirePlugin } from '@tarojs/taro';

import { View, Text, Image, } from '@tarojs/components';

import { Api } from '../../config/Api';

import Article from '../commpents/articles/article';

import Header from './header/header';

import Banner from './content/banner'

import Content from './content/content';

import Footer from './footer/footer';

import Audio from '../commpents/audio/audio';

// process.env.TARO_ENV;

import { AtButton, AtFab, AtTabs, AtTabsPane, AtNoticebar } from 'taro-ui'

import './index.less';


export default class Index extends Component {

  state = {
    articles: [
      { note: "springBoot", extra: "1", title: "辰尚", thumb: 'http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG', content: "test1" },
      { note: "dva", extra: "2", title: "新用卡", thumb: 'http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG', content: "test12" },
      { note: "react", extra: "3", title: "博彦", thumb: 'http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG', content: "test13" }

    ],
    current: 0,
    person: {
      gender: 'female',
      uName: 'xGao',
    },
    name: 'hello wlj!',
    age: '18',
    mens: [{ name: 'xiaog' }, { name: 'xiaow' }, { name: 'xiaoj' }]

  }

  testButton = async (e) => {
    //taro中state是异步的 如果想要获取最新的状态需要在 回调参数中获取
    this.setState({ age: 'weilijun' },
      //获取变化之后的数据
      () => {
        console.log(this.setState.name);
      });

    const req = await Taro.request({
      url: Api.index
    });

    console.log(req);

  }

  jump = (e) => {
    //传递参数 ?id=XX&type=XX
    Taro.navigateTo({
      url: '/pages/login/login?id=1'
    },
    )

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
    const systemInfo = Taro.getSystemInfoSync();

    console.log('----bg mood index.jsx ed---');
    console.log(systemInfo.windowHeight);
    console.log('----ed mood index.jsx ed---');

    this.setState({ name: 'weilijun' });
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
  // shouldComponentUpdate(nextProps, nextState) {
  //   //这个组件默认返回true return true;
  //   //一般用来多次setState调用时,提升render的性能
  // }

  /**
   * 父组件给子组件传递属性时才会被调用
   */
  componentWillReceiveProps() {

  }

  handleClick(value) {
    this.setState({
      current: value
    })
  }

  //如何让方法指定当前页面this.方法明.bind(this)


  render() {

    const tabList = [{ title: '高总' }, { title: '标签页2' }, { title: '标签页3' }]

    return (
      <View className='index'>
         <Header></Header>
          
         <Banner></Banner>
       
         <Content></Content>
 
         <Footer></Footer>



        {/* <View className='banner'>

          <Image className='banner' src="https://image.duoyi.com/com/143/pic/883fb290963f48918d8ce511814b12f7.png"></Image>

        </View>

        <View className='tip'>
          <AtNoticebar showMore >
            非常感谢您,花费浏览我的个人小程序,希望它能给您带来一些简历之外的惊喜!
          </AtNoticebar>
        </View>

        <View className='col'>
          <Article articles={this.state.articles} />

          <AtTabs height="200" current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
            <AtTabsPane current={this.state.current} index={0} >
              <View className='row' >加班真好!</View>

            </AtTabsPane>

            <AtTabsPane current={this.state.current} index={1}>
              <View className='row' >标签页二的内容</View>

            </AtTabsPane>

            <AtTabsPane current={this.state.current} index={2}>
              <View className='row' >标签页三的内容</View>
            </AtTabsPane>
          </AtTabs>

        </View>

        <View className='final'>

        </View> */}
      </View>

    )
  }
}
