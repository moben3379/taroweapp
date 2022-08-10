import React,{Component} from 'react'
import {View} from '@tarojs/components'
import TabBar from "../common/tabBar";
import Swiper from "./indexSwiper";
import Menus from "./menus";


class Index extends Component {
  constructor (props) {
    super(props);
  }
  // componentWillReceiveProps(nextProps) {
  // }
  // componentDidMount(){
  //   }
  // componentWillUnmount() {
  // }
  //
  // componentDidShow() {
  // }
  //
  // componentDidHide() {
  // }

  render() {
    return (
      <View>
        <Swiper></Swiper>
        <Menus></Menus>
        <TabBar tabBarCurrent={0} />
      </View>
    )
  }
}

export default Index

