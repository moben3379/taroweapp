import React,{Component} from 'react'
import {Image, Text, View} from '@tarojs/components'
import * as global from '../global_val/global_val'
import Taro from "@tarojs/taro";

class Pay extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data:[],
      isShowQRCode:false
    }
    this.pay=this.pay.bind(this)
  }

  pay(){
    let than=this
    Taro.request({
      url: global.geturl()+"pay",
      method:"POST",
      data:{
        "price":"0.01",
        "amount":1,
        "body":"测试商品"
      },
      success(res){
        console.log(res)
          setTimeout(function () {
            than.setState({
              isShowQRCode:true
            })
          }, 2000);}
    })
    setTimeout(function(){
      Taro.request({
        url: global.geturl()+"sendback",
        method:"GET",
        success(res){
          console.log(res)
          if (res.data.msg == 'SUCCESS'){
            console.log(res)
            let data=Taro.getStorageSync('delay')
            let menu_id=""
            let menu_name=""

            Object.keys(data).map((keys)=>{
              if (data[keys]){
                menu_id=menu_id+data[keys].menu_Id+",";
                menu_name=menu_name+data[keys].menu_Name+",";

              }
            })
            Taro.request({
              url: global.geturl()+"InsertOrder?menu_id="+menu_id+"&menu_name="+menu_name+"&buyer_name="+global.getnickName()+"&buyer_phone="+global.getPhone()+"&buyer_address="+global.getAddress()+"&buyer_openid="+global.getOpenId()+"&order_amount="+global.gettotlePrice(),
              success(res){
                console.log(res)
              }
            })
          }
        }
      })
    },20000)
  }
  render() {
    let QRCode
    if (this.state.isShowQRCode){
      QRCode=<image src = 'https://g2.glypro19.com/new.jpg' />
      // QRCode=<image src = '../../images/new.jpg' />
    }
    return (
      <View  className='activity'>
       <Text>商品支付页面</Text>
        <button onClick={this.pay}>支付</button>
        {QRCode}
      </View>
    )
  }

}

export default Pay

