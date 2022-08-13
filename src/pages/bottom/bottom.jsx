import React,{Component} from 'react'
import {Button, Image, Text, View} from '@tarojs/components'
import   './bottom.scss'
import { AtIcon } from 'taro-ui';
import {getAll,getEvent} from "../common/utils/utils";
import Taro from "@tarojs/taro";
let event=getEvent();
class Bottom extends Component {
  constructor () {
    super(...arguments);
    this.state={
      Num:0,
      sendPrice:2,
      openSend:12,
      send:false,
      allPrice:0,
    }
  }

  componentDidMount() {
    let {allPrice, allNum}=getAll();
    this.setState({Num:allNum,allPrice:allPrice})
    event.on("purchase",()=>{
      let {allPrice, allNum}=getAll();
      this.setState({Num:allNum,allPrice:allPrice})
    })
  }
//跳转支付页面
  payInformation(){
    Taro.navigateTo({
      url: '/pages/index/pay',
    })

  }



  render() {
    return (
      <View className='bottom'>
        <View className='bottom_body'>
          {this.state.Num>0?<Text className='num'>{this.state.Num}</Text>:null}
        <AtIcon className='shopping' value='shopping-cart' size='50' color={this.state.Num?'aqua':'#fffff'}></AtIcon>
        <View className='text_left'>{this.state.allPrice?<Text className='price'>{"￥"+this.state.allPrice}</Text>:<Text>{this.state.sendPrice?"另需配送费￥"+this.state.sendPrice+"|":""}</Text>}
          <Text>{this.state.sendPrice?"支持自取":"不支持自取"}</Text></View>
          <View className='text_right' >{this.state.allPrice>=12?<Button className='pay' onClick={this.payInformation.bind(this)}>去结算</Button>:<Text>{this.state.openSend?"￥"+this.state.openSend+"起送":""}</Text>}</View>
        </View>
      </View>
    )
  }
}

export default Bottom

