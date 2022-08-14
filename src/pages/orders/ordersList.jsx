import React, {Component} from 'react'
import {Text, View} from '@tarojs/components'
import {AtButton, AtFloatButton, AtTabs, AtTabsPane} from "taro-ui";
import "taro-ui/dist/style/components/tabs.scss";
import Taro from "@tarojs/taro";
import "./ordersList.scss"
import * as global from "../global_val/global_val"

class OrdersList extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      orderList: [],
      current: 0,


    }
  }

  handleClick(value) {
    this.setState({
      current: value
    })
  }

  componentDidMount() {
    this.Order()
  }

  Order() {
    Taro.request({
      url: 'https://g2.glypro19.com/api/getOrderList',
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'GET',
      dataType: 'json',
      credentials: 'include',
      success: (res) => {
        this.setState({
          orderList: res.data.data
        })
      },
    });

  }


  render() {
    const list = this.state.orderList
    console.log("============", list)
    return (
      <View className="order">
        <View>我的订单</View>
        {
          //按照order_id降序遍历
          list.sort((a, b) => b.order_id - a.order_id)
            .map((item)=>{
              if(item.buyer_openid== global.getOpenId()){
                return(
                 <View className="orderList">
                   <View className="order_num">
                     <Text>订单编号：{item.order_id}</Text>
                     <Text>订单状态：{item.order_status}</Text>
                   </View>
                   <View className="order_name">
                      <View>{item.buyer_name}</View>
                   </View>
                   <View className="order_bottom">
                     <Text>{item.create_time}</Text>
                     <Text>
                       合计：￥{item.menu_price}
                     </Text>
                   </View>
                     <AtButton className="at-button" size='small'>再来一单</AtButton>
                     <AtButton className="at-button" size='small'>评价</AtButton>
                 </View>
                )
              }
            })
        }
      </View>
    )
  }
}

export default OrdersList

