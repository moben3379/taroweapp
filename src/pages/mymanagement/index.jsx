import React,{Component} from 'react';

import {Text, View,Button,Image} from '@tarojs/components'
import TabBar from "../common/tabBar";
import Taro from "@tarojs/taro";
import * as global from '../global_val/global_val'
import './index.scss'

class MyManagement extends Component {

  constructor(props) {
    super(props);
    this.state={
      isLoggedIn:global.getIsLogin(),
      avatarUrl:global.getAtAvatarUrl(),
      nickName:global.getnickName(),
      openid:global.getOpenId()
    }
    this.check=this.check.bind(this)
    this.AuthorizeLogin=this.AuthorizeLogin.bind(this);
  }

  AuthorizeLogin=()=>{
    const than=this//把this的指向固定
    Taro.login({
      success(res){/*--------获取code-----------*/
        if (res.code){
          Taro.request({/*-------向微信后台获取openid----------*/
            url:global.geturl()+'api/wxapp/code2session/login',
            data:{
              code:res.code
            },
            success(res){
              console.log(res.data.openid);
              console.log(res.data.session_key)
              global.setOpenId(res.data.openid)/*------------将获取到的openid赋值给全局变量----------------*/
              than.setState({
                openid:global.getOpenId()
              })

              wx.showModal({/*------通知用户授权遮罩层------*/
                title: '温馨提示',
                content: '授权微信登录后才能正常使用小程序功能',
                success(res) {
                  console.log(res)

                  //如果用户点击了确定按钮
                  if (res.confirm) {
                    wx.getUserProfile({/*获取用户授权信息函数*/
                      desc: '获取你的昵称、头像、地区及性别',
                      success: res => {
                        console.log(res);

                        global.setIsLogin(true)/*------设置登陆状态为已登录-------*/
                        global.setAtAvatarUrl(res.userInfo.avatarUrl)
                        global.setnickName(res.userInfo.nickName)
                        than.setState({
                          isLoggedIn:global.getIsLogin(),/*------修改登陆状态--------*/
                          avatarUrl:global.getAtAvatarUrl(),
                          nickName:global.getnickName()
                        })

                        Taro.request({/*------根据openid，查询后台是否存在此用户------*/
                          url:global.geturl()+'findWxUserByOpenid',
                          method:'GET',
                          data:{
                            open_id:global.getOpenId()
                          },
                          success(res){
                            console.log(res)
                            let insertUserInfomation={
                              phone:global.getPhone(),
                              address:global.getAddress(),
                              open_id:global.getOpenId()
                            }
                            console.log(res.data.data)
                            if (res.data.data==null){
                              Taro.request({/*-------插入openID，新建用户------*/
                                url:global.geturl()+'insertUserInfomation',
                                method:'POST',
                                data:insertUserInfomation
                              })
                            } else {
                              console.log(res)
                              global.setPhone(res.data.data.phone)
                              global.setAddress(res.data.data.address)
                            }

                          },
                          fail(err){
                            console.log(err)
                          }
                        })
                      },
                      fail: res => {
                        console.log(2);
                        console.log(res)
                        //拒绝授权
                        wx.showToast({
                          title: '您拒绝了请求,不能正常使用小程序',
                          icon: 'error',
                          duration: 0
                        });
                      }
                    });
                  } else if (res.cancel) {
                    //如果用户点击了取消按钮
                    console.log(3);
                    wx.showToast({
                      title: '您拒绝了请求,不能正常使用小程序',
                      icon: 'error',
                      duration: 0
                    });
                  }
                }
              });
            }
          })
        }else{
          console.log("登录失败!"+res.errMsg)
        }
      }
    })
  }
  check(){
    global.setIsLogin(false)/*-------将登陆状态设置为false--------*/
    global.setAddress("")/*-------将地址设置为空值-------*/
    global.setPhone("")/*----------将号码设置为空值-----------*/
    this.setState({isLoggedIn: global.getIsLogin()});
    global.setOpenId("")
  }

  handleClick(){/*-------------跳转到编辑地址、号码信息页面--------------*/
    Taro.navigateTo({
      url:"edit"
    })
  }

  render(){
    const isLogingedIn=this.state.isLoggedIn
    let button
    let Info
    let edit
    let nickName
    let pay
    if (isLogingedIn){//已登录
      Info=<Image className="Image" src={this.state.avatarUrl}></Image>
      nickName=<Text className="nickname">{this.state.nickName}</Text>
      edit=<View className="edit" onClick={this.handleClick}>编辑信息>></View>
      button=<Button className="logButton" size='small' onClick={this.check}>退出登录</Button>
    }else {          //未登录
      button=<Button className="logButton" size='small' onClick={this.AuthorizeLogin}>授权登录</Button>
    }
  return (
    <View>
      <View className="ViewAvatar">{Info}</View>
      {nickName}
      {edit}
      {button}
      <TabBar tabBarCurrent={2}/>

    </View>
  )
}
}
export default MyManagement

