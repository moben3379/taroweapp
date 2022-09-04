import Taro from "@tarojs/taro";
import {Component} from 'react';
import {Button, Input, Text, View} from "@tarojs/components";
import React from "react";
import * as global from "../global_val/global_val";
import {AtButton} from "taro-ui";
import './detailsView.scss'


class detailsView extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      menuList: [],
    }
  }
  componentDidMount() {
    this.Menu()
  }

    Menu() {
        Taro.request({
          url: 'http://localhost:8090/findMenuInformation',
          data: {},
          header: {
            'content-type': 'application/json' // 默认值
          },
          method: 'GET',
          dataType: 'json',
          credentials: 'include',
          success: (res) => {
        this.setState({
          menuList: res.data.data
        })
    },
  });

}

  render() {
    let detailsId = Taro.getCurrentInstance().router.params.detailsId
    const list = this.state.menuList
    console.log("============", list)
    return (
      <View>
        {
          list.map((item)=>{
            if (item.menu_Id==detailsId) {
              console.log("判断菜品ID", item.menu_Id)
              return (
                <View className='menu_detail'>
                  <image className='menuList_img'  src={item.menu_detail}> </image>
                  <View>
                    <Text className='text_name'>&nbsp;{item.menu_Name}</Text>
                  </View>
                  <View>
                    <Text className='text_icon'>&nbsp;&nbsp;月售:{item.menu_Icon}</Text>
                  </View>
                  <View>
                    <Text className='text_price'>&nbsp;￥{item.menu_Price}</Text>
                  </View>
                  <View>
                    <Text>详情：{item.menu_describe}</Text>
                  </View>
                </View>
              )
            }
          })
        }
      </View>
        )
      }

}

 export default detailsView
