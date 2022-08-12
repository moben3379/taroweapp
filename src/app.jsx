import { Component } from 'react'
import { Provider } from 'react-redux'
import configStore from './store'

import './app.scss'
import Taro from "@tarojs/taro";
import {Button} from "@tarojs/components";

const store = configStore()

class App extends Component {

  componentWillMount() {

    //示例代码
    // wx.login({
    //   success (res) {
    //     if (res.code) {
    //       //发起网络请求
    //       wx.request({
    //         url: 'https://g2.juntaitec.cn',
    //         data: {
    //           code: res.code
    //         }
    //       })
    //     } else {
    //       console.log('登录失败！' + res.errMsg)
    //     }
    //   }
    // })

/*    Taro.request({
      url:'https://g2.juntaitec.cn/getOrderList',
      success(res){
        console.log(res);
      }
    })*/

    /*Taro.login({
      success: function (res){
        if (res.code){
          console.log("这里是code："+res.code)
/!*          Taro.getUserInfo({
            success: function (res) {
              console.log("这里是getUserInfo",+res);
            }
          })*!/
          Taro.request({
            url:'https://g2.juntaitec.cn',
            data: {
              code: res.code
            }
          })
        } else {
          console.log('登录失败！' +res.errMsg)
        }
      }
    })*/



/*    wx.getSetting({ //获取手机硬件权限
      success(res){
        if (!res.authSetting['scope.record']){
          wx.authorize({
            scope:'scope.record',
            seccess(){
              wx.stackRecord()
            }
          })
        }
      }
    })*/

/*    Taro.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
        this.setState({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })*/


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
