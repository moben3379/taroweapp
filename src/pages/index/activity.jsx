import React,{Component} from 'react'
import {Text, View} from '@tarojs/components'
import './activity.scss'

class Activity extends Component {
  constructor (props) {
    super(props);
    this.state={
      activity:[{type:"dec",
        array:[{total:50,dec:10},
          {total:99,dec:20},
          {total:199,dec:50}]
      }]
    }
  }
getTextByType(type){
    switch (type) {
      case "dec":
        return "满减优惠"
      break;
      default:
        return "满减优惠"
      break;
    }
}
getLine(arr){
  return   arr.map((item)=>`满'${item.total}减${item.dec},优惠多多哦`).join(';')
}
  render() {
    let {activity:[first]}=this.state;
    return (
      <View  className='activity'>
        <Text className='type'>{this.getTextByType(first.type)}</Text>
        <Text className='length'>{this.getLine(first.array)}</Text>
        <Text className=''>{this.state.activity.length}个活动</Text>
      </View>
    )
  }
}

export default Activity

