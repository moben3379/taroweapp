import { Component } from 'react'
import { View} from '@tarojs/components'
import TabBar from "../common/tabBar";
import OrdersList from "./ordersList";



class Orders extends Component {
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View>
          <OrdersList></OrdersList>
        <TabBar tabBarCurrent={1} />
      </View>
    )
  }
}

export default Orders

