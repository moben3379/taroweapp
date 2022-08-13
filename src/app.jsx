import { Component } from 'react'
import { Provider } from 'react-redux'
import configStore from './store'

import './app.scss'
import Taro from "@tarojs/taro";
import {Button} from "@tarojs/components";

const store = configStore()

class App extends Component {

  componentWillMount() {


    console.log("授权登录")
  }


  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
        <Button openType="getUserInfo" bindgetuserinfo="userInfoHandler">授权登录</Button>
      </Provider>
    )
  }
}

export default App
