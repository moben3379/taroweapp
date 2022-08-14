import React, { Component } from 'react'
import {Image, Text, View} from "@tarojs/components";
import './merchant.scss'
import {AtCard, AtList, AtListItem} from "taro-ui";

class Merchant extends Component {

  render () {
    return (
          <AtList className='sh'>
            <AtListItem
              title='桂林电子科技大学花江校区'
              iconInfo={{ size: 15, color: '#78A4FA', value:'at-icon at-icon-map-pin', }}
            />

            <AtListItem
              title='18888888888'
              iconInfo={{ size: 15, color: '#78A4FA', value:'at-icon at-icon-phone', }}
            />


            <AtListItem
              title='查看食品安全档案'
              arrow='right'
              iconInfo={{ size: 15, color: '#78A4FA', value:'at-icon at-icon-eye', }}
            />

            <AtListItem
              title='配送服务:由商家提供配送服务'
              iconInfo={{ size: 15, color: '#78A4FA', value:'at-icon at-icon-iphone', }}
            />

            <AtListItem
              title='配送时间:09:00-21:00'
              iconInfo={{ size: 15, color: '#78A4FA', value:'at-icon at-icon-clock', }}
            />

            <AtListItem
              title='小店专注做好每一道菜'
              arrow='right'
              iconInfo={{ size: 15, color: '#78A4FA', value:'at-icon at-icon-bell', }}
            />

            <AtListItem
              title='商家服务'
              iconInfo={{ size: 15, color: '#78A4FA', value:'at-icon at-icon-check-circle', }}
            />
          </AtList>
    )
  }
}

export default Merchant

