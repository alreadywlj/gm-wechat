import React, { Component } from 'react'

import Taro, { requirePlugin } from '@tarojs/taro';

import { View, Text, Image } from '@tarojs/components';

import { AtDivider, AtButton, AtFab, AtTabs, AtTabsPane } from 'taro-ui'

import  Card  from './card/card';

import './index.less';


export default class Login extends Component {

  state = {
      cards:
      [
        {name:"辰尚智能音频"},
      {name:"中银法院案款管理"},
      {name:"默沙东 WeChat connect+"},
      {name:"上海交行信用卡查询"},
    ],
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
  // shouldComponentUpdate(nextProps, nextState) {
  //   //这个组件默认返回true return true;
  //   //一般用来多次setState调用时,提升render的性能
  // }

  /**
   * 父组件给子组件传递属性时才会被调用
   */
  componentWillReceiveProps() {

  }

  jump = (e) => {
    console.log(e);
  }

  render() {

    return (
      //最外层
      <View className='index'>

       <AtDivider content='个人经验' fontColor='#ff9900' lineColor='#ff9900' />  

          <Card cards={this.state.cards}></Card>

        {/* <View className='image'>

          <View  className='image oneCol' >
            <AtButton onClick={this.jump.bind(this)}>宠物图鉴</AtButton>  
          </View>

          <View className='image twoCol'>
            <AtButton onClick={this.jump.bind(this)}>宠物图鉴</AtButton>
          </View>

        </View>

        <View className='image'>

          <View className='image oneCol'>
            <AtButton onClick={this.jump.bind(this)}>宠物图鉴</AtButton>
          </View>


          <View className='image twoCol'>
            <AtButton onClick={this.jump.bind(this)}>宠物图鉴</AtButton>
          </View>

        </View> */}

      </View>

    )
  }
}
