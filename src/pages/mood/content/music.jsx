import React, { Component } from 'react'

import { View, Text, Image, } from '@tarojs/components';

import Taro, { requirePlugin } from '@tarojs/taro';

import { AtCard, AtIcon } from "taro-ui"

import './music.less';

export default class Music extends Component {

    state = {
      
    }

    componentWillMount() {
        // console.log("willMount--->页面加载前", "1");
    }

    /**
     * 更改组件的状态
     * 页面初始化时会调用 
     */
    componentDidMount() {
        const backgroundAudioManager = Taro.getBackgroundAudioManager();
        backgroundAudioManager.title = '此时此刻';
        backgroundAudioManager.epname = '此时此刻';
        backgroundAudioManager.singer = '许巍';
        backgroundAudioManager.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000';
        // 设置了 src 之后会自动播放
        backgroundAudioManager.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46';
        backgroundAudioManager.play();
        backgroundAudioManager.onPlay(() => {
              console.log("音乐播放开始");
          })
        backgroundAudioManager.onEnded(() => {
              console.log("音乐播放结束");
          })
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

    playMusic = (e) => {

        // backgroundAudioManager.onPlay(()=>{
        //     console.log('音乐播放开始');
        // });

    }

    render() {

        return (
            <View className="music">

                <Image className="m_image" src="https://gss0.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/241f95cad1c8a786dc0cdb9b6609c93d70cf5004.jpg"></Image>

                <AtIcon value='play' className="m_icon" size='30' onClick={this.playMusic.bind(this)}></AtIcon>

            </View>

        )
    }
}
