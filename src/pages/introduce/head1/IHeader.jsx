import React, { Component } from 'react';

import { View, Text, Image, } from '@tarojs/components';

import Taro, { requirePlugin, } from '@tarojs/taro';

import { connect } from 'react-redux';

import { AtCard, AtAvatar, AtTag, } from "taro-ui";

import styles from './IHeader.scss';


@connect(({ introduce }) => ({
    ...introduce,
}))


export default class IHeader extends Component {

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
    // shouldComponentUpdate(nextProps, nextState) {
    //   //这个组件默认返回true return true;
    //   //一般用来多次setState调用时,提升render的性能
    // }

    /**
     * 父组件给子组件传递属性时才会被调用
     */
    componentWillReceiveProps() { }

    render() {
        return (
            <View className={styles.header}>

                <AtAvatar text='魏' circle className={styles.photo} size='large'></AtAvatar>

                <View className={styles.name}>weilj</View>

                <View className={styles.zw}></View>

                <AtTag circle size='normal' style='margin-top:2vh'>HAHAH</AtTag>

                <View className='at-row at-row__justify--around' style='margin-top:1vh'>
                    <AtTag size='small' className='at-col at-col-5'>平均排列</AtTag>
                    <AtTag size='small' className='at-col at-col-5'>Around</AtTag>
                </View>

                <View className='at-row at-row__justify--around' style='margin-top:1vh'>
                    <AtTag size='small' className='at-col at-col-5'>平均排列</AtTag>
                    <AtTag size='small' className='at-col at-col-5'>Around</AtTag>
                </View>

            </View>
        )
    }
}
