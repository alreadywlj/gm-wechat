import React, { Component } from 'react';

import { View, Text, Image, } from '@tarojs/components';

import Taro, { requirePlugin, } from '@tarojs/taro';

import { connect } from 'react-redux';

import { AtCard, AtIcon, AtDivider } from "taro-ui";

import styles from './card.scss';

@connect(({ exp }) => ({
    ...exp,
}))


export default class Card extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentWillMount() {

        this.setState({
            cards: this.props.cards ? this.props.cards : [{ name: "接口调动,失败此为默认" }]
        });

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


    handleNavigate = (e, index, item) => {

        Taro.navigateTo({
            url: `/components/article/article?id=${item.name}`,
            //   events: {
            //     // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
            //     acceptDataFromOpenedPage: function(data) {
            //       console.log(data)
            //     },
            //     someEvent: function(data) {
            //       console.log(data)
            //     }
            //   },
            //   success: function (res) {
            //     // 通过eventChannel向被打开页面传送数据
            //     res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
            //   }
        });
    }

    render() {
        const { cards } = this.state;
        return (
            <View className={styles.card}>
                {
                    // cards.map((item,index) =>
                    //     <View
                    //         onClick={(e)=>this.handleNavigate(e,index,item)}
                    //         className={styles.item}>
                    //         {item.name}                    
                    //     </View>
                    // )

                }

                <View style="margin-top:2vh;"></View>

                <AtCard
                    note='小Tips'
                    extra='额外信息'
                    title='这是个标题'
                    thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
                    className={styles.oCard}
                >
                    这也是内容区 可以随意定义功能
                </AtCard>

                <View style="margin-top:2vh;"></View>

                <AtCard
                    note='小Tips'
                    extra='额外信息'
                    title='这是个标题'
                    thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
                    className={styles.oCard}
                >
                    这也是内容区 可以随意定义功能
                </AtCard>

                <View style="margin-top:2vh;"></View>

                <AtCard
                    note='小Tips'
                    extra='额外信息'
                    title='这是个标题'
                    thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
                    className={styles.oCard}
                >
                    这也是内容区 可以随意定义功能
                </AtCard>

                <View style="margin-top:2vh;"></View>

                <AtCard
                    note='小Tips'
                    extra='额外信息'
                    title='这是个标题'
                    className={styles.oCard}
                    renderIcon={<AtIcon value='star' size='15' color='red' />}
                >
                    这也是内容区 可以随意定义功能
                </AtCard>

            </View >
        )
    }
}
