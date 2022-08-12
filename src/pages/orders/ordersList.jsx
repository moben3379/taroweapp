import React, {Component} from 'react'
import {Image, Text, View} from '@tarojs/components'
import {AtButton, AtTabs, AtTabsPane} from "taro-ui";
import "taro-ui/dist/style/components/tabs.scss";
import Taro from "@tarojs/taro";
import "./ordersList.scss"


class OrdersList extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      orderList: [],
      current: 0,
      status: -1,
    }

  }

  handleClick() {
    console.log("点击评价" );

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
          orderList: res.data.data,
        })

      },
    });
  }

  render() {
    const list = this.state.orderList
    console.log("=========", list)
    return (
      <View className="order">
        <View>我的订单</View>
        {
          // 按照order_id降序遍历
          list.sort((a, b) => b.order_id - a.order_id)
            .map((item, index) => {
              if(item.buyer_openid==64164){  /*判断买家id*/
                return (
                  <View className="orderList" key={index}>
                    <View className="order_num">
                      <Text>订单编号：{item.order_id} </Text>
                      <Text className="">订单状态：{item.order_status}</Text>
                    </View>

                    <View className="order_name">
                      <View>{item.order_id}</View>
                      <View>{item.buyer_name}</View>
                    </View>
                    <View className="order_bottom">
                      <Text>{item.create_time}</Text>
                      <Text>
                        合计：￥{item.menu_price}
                      </Text>
                    </View>
                    <View>
                      <AtButton className="at-button" size='small' circle='true'>再来一单</AtButton>
                      <AtButton className="at-button" size='small' circle='true' onClick={this.handleClick}>评价</AtButton>
                    </View>

                  </View>
                )
              }

            })
        }
      </View>
    )
    /*const tabList=[{ title: '未完成订单' },{ title: '已完成订单' }]
    const list=this.state.orderList
    console.log("=========",list)
    return (
        <AtTabs
             animated={false}
            current={this.state.current}
            scroll
            tabList={tabList}
            onClick={this.handleClick.bind(this)}>
          {
            list.map((item)=>{
              if(item.order_status==0){//订单状态为0，未完成
                return(
                  <AtTabsPane current={this.state.current} index={0} >
                    <View className="orderList">
                      <View className="order_num">订单编号：{item.order_id}</View>
                      <View>
                        <View>{item.order_id}</View>
                        <View>{item.buyer_name}</View>
                      </View>
                    </View>

                  </AtTabsPane>
                )
              }
              else if(item.order_status==1){//订单状态为1，已完成
                return(
                  <AtTabsPane current={this.state.current} index={1}>
                    <View>{item.order_status}</View>
                  </AtTabsPane>
                )
              }
           })
          }
        </AtTabs>
    )*/
  }

}

export default OrdersList

