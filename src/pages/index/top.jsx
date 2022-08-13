import React,{Component} from 'react'
import {Image, View} from '@tarojs/components'
import './top.scss'
class Top extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <View className='top'>
        <View className='left'>
          <Image className='img'  src={require('/src/images/select.png')}></Image>
        </View>
        <View className='right'>
          <Image className='img'  src={require('/src/images/store.jpg')}></Image>
          <Image className='img'  src={require('/src/images/more.jpg')}></Image>
        </View>
        {/*<View className='at-icon at-icon-star' ></View></View>*/}
      </View>
    )
  }
}

export default Top

