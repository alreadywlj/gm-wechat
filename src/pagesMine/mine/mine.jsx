import React, { Component } from 'react'

import { View, Text } from '@tarojs/components';

import './mine.less';

export default class Mine extends Component {

  componentWillMount() { 
   /**
    * 获取到传递而来的参数
    */

  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='mine'>
        <Text>Hello mine!</Text>
      </View>
    )
  }
}
