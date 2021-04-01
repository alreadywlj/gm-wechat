import React, { Component } from 'react'

import { View, Text, Image, } from '@tarojs/components';

import Taro, { requirePlugin } from '@tarojs/taro';

import { AtCard } from "taro-ui"

import './audio.less';

const audio =   Taro.getBackgroundAudioManager();

export default class Audio extends Component {

    state = {

    }

    componentWillMount() {
        audio.title = '此时此刻'
        audio.epname = '此时此刻'
        audio.singer = '许巍'
        audio.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
// 设置了 src 之后会自动播放
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
            <View className='components-page'>
            <Audio
              src='https://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46'
              controls={true}
              autoplay={false}
              loop={false}
              muted={true}
              initialTime='30'
              id='video'
            />
          </View>
        )
    }
}
