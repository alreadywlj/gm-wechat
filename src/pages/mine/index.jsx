
import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { connect } from 'react-redux'
import styles from './index.scss'
import IHeader from './head/IHeader'
import AMine from './amine/amine'


@connect(({ mine }) => ({
  ...mine,
}))

class Mine extends Component {
  config = {
    navigationBarTitleText: '标题'
  }
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {

  }

  render() {
    return (
      <View className={styles.index}>
        <IHeader></IHeader>
        <AMine></AMine>
      </View>
    )
  }
}

export default Mine
