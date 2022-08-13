import React,{Component} from 'react'
import {Text, View} from '@tarojs/components'
import * as global from  "../global_val/global_val"

class Pay extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data:[]
    }
  }

  text(){
    console.log(global.getallNum())
    console.log(global.getallPrice())
  }
  render() {
    return (
      <View  className='activity'>
       <Text>商品支付页面</Text>
        <button onClick={this.text}>点击</button>
      </View>
    )
  }
}

export default Pay

