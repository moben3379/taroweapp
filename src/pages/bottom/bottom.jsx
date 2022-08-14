import React,{Component} from 'react'
import {Button, Image, Text, View} from '@tarojs/components'
import   './bottom.scss'
import {AtDivider, AtFloatLayout, AtIcon} from 'taro-ui';
import {getAll,getEvent} from "../common/utils/utils";
import Taro from "@tarojs/taro";
import * as global from '../global_val/global_val'
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
      on:false,
      shoppingCar:[]
    }
  }

  componentDidMount() {
    let {allPrice, allNum}=getAll();
    this.setState({Num:allNum,allPrice:allPrice})
    event.on("purchase",()=>{
      let {allPrice, allNum}=getAll();
      this.setState({Num:allNum,allPrice:allPrice})
      global.settotlePrice(allPrice)
    })

  }
//跳转支付页面
  payInformation(){
    Taro.navigateTo({
      url: '/pages/pay/pay',
    })
  }
  //购物车
  onButtonClick= () =>{
    let foods=Taro.getStorageSync('delay')
    console.log(foods)
    this.setState({
      shoppingCar:foods,
      on:true,
    })
  }

  handleClose=()=>{
    this.setState({
      on:false
    })
    console.log('关闭')
  }



  render() {
    return (
      <View className='bottom'>
        <View className='bottom_body'>
          {this.state.Num>0?<Text className='num'>{this.state.Num}</Text>:null}
        <AtIcon className='shopping'  onClick={this.onButtonClick.bind(this)} value='shopping-cart' size='50' color={this.state.Num?'aqua':'#fffff'}></AtIcon>
        <View className='text_left'>{this.state.allPrice?<Text className='price'>{"￥"+this.state.allPrice}</Text>:<Text>{this.state.sendPrice?"另需配送费￥"+this.state.sendPrice+"|":""}</Text>}
          <Text>{this.state.sendPrice?"支持自取":"不支持自取"}</Text></View>
          <View className='text_right' >{this.state.allPrice>=12&&global.getIsLogin()?<Button className='pay' onClick={this.payInformation.bind(this)}>去结算</Button>:<Text className = 'login'>{this.state.openSend&&global.getIsLogin()?"￥"+this.state.openSend+"起送":"请登陆"}</Text>}</View> </View>

        <View >
          <AtFloatLayout
            isOpened={this.state.on}
            title='购物车'
            onClose={this.handleClose.bind(this)}
          >
            <View className='shopping'>
              {
                Object.keys(this.state.shoppingCar).map((keys)=>{
                    return(
                      <View keys={this.state.shoppingCar[keys].menu_Name} className='cartList'>

                        <image className="cartList_img" src={this.state.shoppingCar[keys].menu_detail}> </image>

                        <View className='cartList_Name'>{this.state.shoppingCar[keys].menu_Name}</View>

                        <Text className='cartList_Price'>￥{this.state.shoppingCar[keys].menu_Price}</Text>

                        <View className='cartList_Num'>数量:{this.state.shoppingCar[keys].Num}</View>
                      </View>
                    )
                  }
                )
              }
              {/*<View>*/}
              {/*  <AtDivider content='没有更多了' fontColor='#ff9900' lineColor='#ff9900' height='260' />*/}
              {/*</View>*/}
            </View>


          </AtFloatLayout>
        </View>
      </View>
    )
  }
}

export default Bottom


