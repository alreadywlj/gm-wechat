
import React, { Component } from 'react';
import { View } from '@tarojs/components';
import { connect } from 'react-redux';
import styles from './index.scss';
import Head from './head/head';
import Card from './card/card';
import { AtDivider } from 'taro-ui'
import Footer from '../../components/footer/footer';

@connect(({ exp }) => ({
  ...exp,
}))

class Exp extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {

  }
  ///* <Card cards={this.props.cards}></Card> */
  render() {
    return (
      <View className={styles.index}>
        <Head />
        <Card />
        <Footer/>
      </View>
    )
  }
}

export default Exp
