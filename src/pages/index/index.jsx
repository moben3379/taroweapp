import React,{Component} from 'react'
import {View} from '@tarojs/components'
import TabBar from "../common/tabBar";
import Swiper from "./indexSwiper";
import GoodsList from "./goodsList";


class Index extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {
    return (
      <View>
        <Swiper></Swiper>
        <GoodsList></GoodsList>
        <TabBar tabBarCurrent={0} />
      </View>
    )
  }
}

export default Index

