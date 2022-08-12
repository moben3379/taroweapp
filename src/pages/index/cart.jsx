import React, {Component, useState} from 'react'
import {Text, View} from "@tarojs/components";
import "taro-ui/dist/style/components/tabs.scss";
import './cart.scss'
import {AtFab, AtFloatLayout} from "taro-ui";
import Taro from "@tarojs/taro";

class Cart extends Component {
constructor(props) {
  super(props);
  this.state={
    on:false
  }
}
  onButtonClick= () =>{
    console.log('点击')
    this.setState({
      on:true
    })
  }

  handleClose=()=>{
    this.setState({
    on:false
    })
      console.log('关闭')
  }
  toCart=()=>{
  console.log('跳转')
    Taro.navigateTo({
      url: '/pages/cart/cart'
    })
  }

  render() {
    return (
        <View >
        <AtFloatLayout
          isOpened={this.state.on}
          title='购物车'
          onClose={this.handleClose.bind(this)}
        >
          <View className='at-row'>
            <View className='at-col at-col-3'>总价</View>
            <View className='at-col at-col-6'>￥</View>
            <View className='at-col at-col-2' onClick={this.toCart.bind(this)}>结算</View>
          </View>

        </AtFloatLayout>
          <View className='.post-button'>
            <AtFab onClick={this.onButtonClick.bind(this)}>
              <Text className='at-fab__icon at-icon at-icon-shopping-cart' />
            </AtFab>
          </View>

      </View>
    )
  }
}

export default Cart

