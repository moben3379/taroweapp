import {Component} from 'react'
import {Text, View} from '@tarojs/components'
import TabBar from "../common/tabBar";


class MyManagement extends Component {

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {
    return (
      <View>
        <Text>我的管理</Text>
        <TabBar tabBarCurrent={2} />
      </View>
    )
  }
}

export default MyManagement

