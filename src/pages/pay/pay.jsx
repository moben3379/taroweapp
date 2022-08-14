import React,{Component} from 'react'
import {Image, Text, View} from '@tarojs/components'
import * as global from '../global_val/global_val'
import { AtTabs, AtTabsPane } from 'taro-ui'
import './pay.scss'
import { AtList, AtListItem } from "taro-ui"
import Taro from "@tarojs/taro";

class Pay extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data:[],
      isShowQRCode:false,
      foods:[],
      address:global.getAddress(),
      phone:global.getPhone()
    }
    this.pay=this.pay.bind(this)
  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }
  componentDidMount() {
    const food=Taro.getStorageSync('delay')
    console.log(food)
    this.setState({
      foods:food
    })
  }
  pay(){
    let than=this
    Taro.request({
      url: global.geturl()+"pay",
      method:"POST",
      data:{
        "price": global.gettotlePrice(),
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

            wx.showModal({
              title: '温馨提示',
              content: '支付成功',
              success(res){
                if (res.confirm){
                  Taro.navigateTo({
                    url:"/pages/index/index"
                  })
                }else if (res.cancel) {
                  //如果用户点击了取消按钮
                  Taro.navigateTo({
                    url:"/pages/index/index"
                  })
                }
              }
            })

          }
        }
      })
    },20000)
  }
  render() {
    let QRCode
    let {foods}=this.state;
    const tabList = [{ title: '外卖配送' }]
    if (this.state.isShowQRCode){
      QRCode=<image src = 'https://g2.glypro19.com/new.jpg' />
      // QRCode=<image src = '../../images/new.jpg' />
    }
    return (
      <View>
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <AtList className='sh'>
              <AtListItem
                title='配送地址:'
                note={this.state.address}
                arrow='right'
                iconInfo={{ size: 20, color: '#78A4FA', value:'at-icon at-icon-map-pin', }}
              />
              <AtListItem
                title='配送号码:'
                note={this.state.phone}
                arrow='right'
                iconInfo={{ size: 20, color: '#78A4FA', value:'at-icon at-icon-map-pin', }}
              />
            </AtList>
            <View>
              {
                Object.keys(foods).map((keys)=>{
                  return (
                    <View key={foods[keys].menu_Name}>
                      <image style='width:60px;height:60px;' className='menuList_img'  src={foods[keys].menu_detail}> </image>
                      <Text>{foods[keys].menu_Name}-------数量:{foods[keys].Num}-单价:{foods[keys].menu_Price}</Text>
                    </View>
                  )})
              }
            </View>
            <button onClick={this.pay}>支付</button>
            <View></View>
            {QRCode}
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }


}

export default Pay

