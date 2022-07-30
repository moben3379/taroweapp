import React,{Component} from 'react'
import {View} from "@tarojs/components";
import {AtTabs, AtTabsPane} from "taro-ui";
import "taro-ui/dist/style/components/tabs.scss";
import './goodList.scss'
import index from "@tarojs/react";


class GoodsList extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            current: 0,
        }
    }
    handleClick (value) {
        this.setState({
            current: value
        })
    }
  render() {
      return(
          <AtTabs className='tab_list'
              current={this.state.current}
              scroll
              height='300px'
              tabDirection='vertical'
              tabList={[
                  { title: '新品推荐' },
                  { title: '营养套餐' },
                  { title: '美味单品' },
                  { title: '饮料好喝' },
                  { title: '我要加餐' },
                  { title: '带”她”回家' },
              ]}
              onClick={this.handleClick.bind(this)}>
              <View style='font-size:18px;vertical-align: auto;'>-------新品推荐1-------</View>
              <AtTabsPane tabDirection='vertical' current={this.state.current} index={0}>
                  <View className='food_list' style='font-size:18px;text-align:center;height:400px;'>标签页一的内容（没有发请求拿数据，暂时先这样）</View>
              </AtTabsPane>
              <AtTabsPane tabDirection='vertical' current={this.state.current} index={1}>
                  <View className='food_list' style='font-size:18px;text-align:center;height:400px;'>标签页二的内容</View>
              </AtTabsPane>
              <AtTabsPane className='food_list' tabDirection='vertical' current={this.state.current} index={2}>
                  <View style='font-size:18px;text-align:center;height:400px;'>标签页三的内容</View>
              </AtTabsPane>
              <AtTabsPane className='food_list' tabDirection='vertical' current={this.state.current} index={3}>
                  <View style='font-size:18px;text-align:center;height:400px;'>标签页四的内容</View>
              </AtTabsPane>
              <AtTabsPane tabDirection='vertical' current={this.state.current} index={4}>
                  <View className='food_list' style='font-size:18px;text-align:center;height:400px;'>标签页5的内容</View>
              </AtTabsPane>
              <AtTabsPane tabDirection='vertical' current={this.state.current} index={5}>
                  <View className='food_list' style='font-size:18px;text-align:center;height:400px;'>标签页6的内容</View>
              </AtTabsPane>

          </AtTabs>
      )
  }
}

export default GoodsList

