import React,{Component} from 'react';
import {View,Button,Input,Text} from '@tarojs/components'
import './edit.scss'
import * as global from "../global_val/global_val";
import Taro from "@tarojs/taro";


class edit extends Component {

  constructor(props) {
    super(props);
    this.state={
      address:global.getAddress(),
      phone:global.getPhone()
    }
    this.commit=this.commit.bind(this)
    this.reset=this.reset.bind(this)
  }

  commit(){
    // console.log("电话："+global.getPhone())
    // console.log("地址："+global.getAddress())
    let updataUserInfomation={
      phone:global.getPhone(),
      address:global.getAddress(),
      open_id:global.getOpenId()
    }
    Taro.request({
      url:'http://localhost:8090/updataUserInfo',
      method:'POST',
      data:updataUserInfomation,
    })
    Taro.navigateTo({
      url:"index"
    })
  }

  getAddress(e){                        //拿到input输入框的value的值,并暂存
    //打印的是输入框中的内容
    global.setAddress(e.target.value)
    this.setState({
      address:global.getAddress()
    })
  }
  getPhone(e){                        //拿到input输入框的value的值,并暂存
    //打印的是输入框中的内容
    global.setPhone(e.target.value)
    this.setState({
      phone:global.getPhone()
    })
  }

  reset(){
    global.setPhone("")
    global.setAddress("")
    this.setState({
      address:global.getAddress(),
      phone:global.getPhone()
    })

    let updataUserInfomation={
      phone:global.getPhone(),
      address:global.getAddress(),
      open_id:global.getOpenId()
    }
    Taro.request({
      url:'http://localhost:8090/updataUserInfo',
      method:'POST',
      data:updataUserInfomation,
    })

  }
  render(){
    return(
      <View>
        <View className='Input'>
          收货地址：<input className="InputBox" type="text" placeholder="收货地址" value={this.state.address} onInput={this.getAddress.bind(this)} />
          电话号码：<Input className="InputBox" type="text" placeholder="电话号码" value={this.state.phone} onInput={this.getPhone.bind(this)} />
        </View>
        <View className="button">
          <Button onClick={this.commit}>保存</Button>
          <Button onClick={this.reset}>重置</Button>
        </View>
      </View>
    )
  }
}
export default edit
