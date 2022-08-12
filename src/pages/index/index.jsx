// eslint-disable-next-line no-unused-vars
import React,{Component} from 'react'
import {View} from '@tarojs/components'
import TabBar from "../common/tabBar";
import Swiper from "./indexSwiper";
import Menus from "./menus";
import Cart from "./cart";

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

        <Cart></Cart>

        <TabBar tabBarCurrent={0} />
      </View>
    )
  }
}

export default Index

