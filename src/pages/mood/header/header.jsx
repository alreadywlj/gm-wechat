import React, { Component } from 'react'

import { View, Text, Image, } from '@tarojs/components';

import Taro, { requirePlugin } from '@tarojs/taro';

import { AtIcon } from "taro-ui"

import _moment from "moment";


import './header.less';


export default class Header extends Component {

    state = {
        isLike: true,
        time: _moment(),
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

    changeHeart = (e) => {
        this.setState({
            isLike: !this.state.isLike
        })
    }

    render() {

        return (

            <View className="header">

                {/* 时间日期 */}
                <View className="time"> 
                  <Text className="oneProperties">NO.</Text>  
                  <Text className="twoProperties">丨</Text>  
                  <Text className="threeProperties">八月三十</Text>  
                
                </View>

                {/* 收藏非收藏 */}
                <AtIcon value={this.state.isLike ? 'heart-2' : 'heart'} className="icon" onClick={this.changeHeart.bind(this)}></AtIcon>

                <AtIcon value="share-2" className="share" onClick={this.changeHeart.bind(this)}></AtIcon>
        
            </View>
        )
    }
}
