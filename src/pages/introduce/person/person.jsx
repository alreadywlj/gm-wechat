import React, { Component } from 'react';

import { View, Text, Image, } from '@tarojs/components';

import Taro, { requirePlugin, } from '@tarojs/taro';

import { connect } from 'react-redux';

import { AtCard, AtIcon, AtTimeline, AtDivider } from "taro-ui";

import styles from './Person.scss';

@connect(({ introduce }) => ({
    ...introduce,
}))


export default class Person extends Component {

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


                <View className={styles.tag} >

                    <AtIcon value='user' size='20' color='#1890ff' />

                    <View className={styles.font}>工作经历</View>

                </View>

                <View className={styles.content} >

                    <AtTimeline
                        pending
                        items={[
                            {
                                title: '上海辰尚科技',
                                content: [
                                    '担任职位: Java,Node.js开发工程师',
                                    '工作时间: 2018.10-2020.04',
                                    '项目经验:',
                                    '弘安物业后台管理系统',
                                    '辰尚智能语音识别系统',
                                    '默沙东Wechat connect+'
                                ],
                                icon: 'check-circle', color: 'green'
                            },
                            {
                                title: '上海博彦科技',
                                content: [
                                    '担任职位: Java开发工程师',
                                    '工作时间: 2020.04-至今',
                                    '项目经验:',
                                    '上海交通银行信用卡营销业绩查询系统',
                                    '上海浦发银行新一代历史库数据查询系统',
                                    '上海浦发银行新一代历史库监控系统',
                                ],
                                icon: 'check-circle', color: 'red'
                            },
                        ]}
                    />
                </View>


            </View>
        )
    }
}
