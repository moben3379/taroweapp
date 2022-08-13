import React,{Component} from 'react'
import {Text, View} from '@tarojs/components'

class Pay extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data:[]
    }
  }

  render() {
    return (
      <View  className='activity'>
       <Text>商品支付页面</Text>
      </View>
    )
  }


}

export default Pay

