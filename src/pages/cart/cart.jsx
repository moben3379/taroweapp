import React,{Component} from 'react';
import {View} from '@tarojs/components'
import './cart.scss'


class Cart extends Component {


   render(){

  return (
    <View>
      <View className='at-row'>
        <View className='at-col at-col-3'>全选</View>
        <View className='at-col at-col-6'>总价</View>
        <View className='at-col at-col-2'>结算</View>
      </View>
    </View>
  )
}
}
export default Cart

