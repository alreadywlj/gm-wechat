import React, { Component } from 'react'

import Taro, { requirePlugin } from '@tarojs/taro';

import { View, Text, Image, } from '@tarojs/components';

// process.env.TARO_ENV;

import { AtButton, AtFab, AtTabs, AtTabsPane, AtNoticebar } from 'taro-ui'

import './index.less';


export default class Mine extends Component {

  state = {
    current: 0,
    person: {
      gender: 'female',
      uName: 'xGao',
    },
    name: 'hello wlj!',
    age: '18',
    mens: [{ name: 'xiaog' }, { name: 'xiaow' }, { name: 'xiaoj' }]

  }

  testButton = (e) => {
    //taro中state是异步的 如果想要获取最新的状态需要在 回调参数中获取
    this.setState({ age: 'weilijun' },
      //获取变化之后的数据
      () => {
        console.log(this.setState.name);
      });
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

    const tabList = [{ title: '标签页1' }, { title: '标签页2' }, { title: '标签页3' }]

    return (
      <View className='mine'>

        <View className='banner'></View>

        <View className='tip'>

        </View>

        <View className='col'>

          <AtTabs height="200" current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>

            <AtTabsPane current={this.state.current} mine={0} >
              <View className='row' >标签页一的内容</View>
            </AtTabsPane>

            <AtTabsPane current={this.state.current} mine={1}>
              <View className='row' >标签页二的内容</View>
            </AtTabsPane>

            <AtTabsPane current={this.state.current} mine={2}>
              <View className='row' >标签页三的内容</View>
            </AtTabsPane>
          </AtTabs>

        </View>
   
      </View>

    )
  }
}
