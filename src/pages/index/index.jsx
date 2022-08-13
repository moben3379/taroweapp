import React,{Component} from 'react'
import {View} from '@tarojs/components'
import TabBar from "../common/tabBar";
import Swiper from "./indexSwiper";
import Menus from "../Menu/menus";
import Bottom from "../bottom/bottom";
import Top from "./top";


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
      <View className='index'>
        <Swiper></Swiper>
        <Menus></Menus>
        <Bottom></Bottom>
        <TabBar tabBarCurrent={0} />
      </View>
    )
  }
}

export default Index

