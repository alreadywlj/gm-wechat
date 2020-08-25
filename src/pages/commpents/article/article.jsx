import React, { Component } from 'react'

import { View, Text, Image, } from '@tarojs/components';

import Taro, { requirePlugin } from '@tarojs/taro';

import { AtCard ,Article} from "taro-ui"

import './article.less';


export default class Article extends Component {

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

            <View >
         

                <View className='at-article'>
                    <View className='at-article__h1'>
                        这是一级标题这是一级标题
  </View>
                    <View className='at-article__info'>
                        2017-05-07&nbsp;&nbsp;&nbsp;这是作者
  </View>
                    <View className='at-article__content'>
                        <View className='at-article__section'>
                            <View className='at-article__h2'>这是二级标题</View>
                            <View className='at-article__h3'>这是三级标题</View>
                            <View className='at-article__p'>
                                这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本落。这是文本段落。1234567890123456789012345678901234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </View>
                            <View className='at-article__p'>
                                这是文本段落。这是文本段落。
      </View>
                            <Image
                                className='at-article__img'
                                src='https://jdc.jd.com/img/400x400'
                                mode='widthFix' />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
