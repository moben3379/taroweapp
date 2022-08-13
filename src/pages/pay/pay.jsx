import React,{Component} from 'react'
import {Button, Image, Text, View} from '@tarojs/components'
import * as global from "../global_val/global_val"
import { AtTabs, AtTabsPane } from 'taro-ui'
import './pay.scss'
import { AtList, AtListItem } from "taro-ui"
import Taro from "@tarojs/taro";

class Pay extends Component {
  constructor () {
    super(...arguments);
    this.state = {
      data:[],
      foods:[],
      address:global.getAddress(),
      phone:global.getPhone()
    }
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


  render () {
    let {foods}=this.state;
      const tabList = [{ title: '外卖配送' }]
      return (<View>
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
                     <Text></Text>
                   </View>
               )})
               }
              </View>
            <Button className='Pay'>支付</Button>
          </AtTabsPane>
      </AtTabs>
        </View>
    )
  }


}

export default Pay

