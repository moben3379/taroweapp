import React,{Component} from 'react'
import {Image, Text, View} from "@tarojs/components";
import "taro-ui/dist/style/components/tabs.scss";
import './menus.scss'

import Taro from "@tarojs/taro";
import {AtButton, AtInputNumber, AtTabs, AtTabsPane, AtTag} from "taro-ui";



class Menus extends Component {
  constructor(props) {
    super(props,);
    this.state = {
      menuList:[],
      current:0,
    }
  }

  componentDidMount() {
    this.Menu()
  }

  Menu() {
    Taro.request({
      url: 'https://g2.glypro19.com/menuList.json',
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'GET',
      dataType: 'json',
      credentials: 'include',
      success: (res) => {
        this.setState({
          menuList: res.data.data
        })

      },
    });

  }
  handleClick (value) {
    this.setState({
      current: value
    });
  }
  addClick(){
    console.log('怎么把数穿传上去呢')
  }


  render() {

    console.log("菜单列表：",this.state.menuList)

    const tabList = [{ title: '营养套餐' }, { title: '好吃家常' }, { title: '请客大宴' }, { title: '美味小吃' }]
    return (
      <AtTabs current={this.state.current}
        tabDirection='vertical'
        height='350px'
        scroll tabList={tabList}
        onClick={this.handleClick.bind(this)}
      >
        {
          tabList.map((tab, i) => {
            const list =this.state.menuList
            return (
              <AtTabsPane className='food_list'
                current={this.state.current}
                tabDirection='vertical'
                index={i} key={tab.title}
              >
                <View><Text style='font-size:18px;text-align:center;left:50px'>========{tab.title}========</Text></View>
                {
                  list.map((item) => {
                    if (item.Menu_Form===tab.title){
                      return (
                        <View style='font-size:15px;'
                          key={item.Menu_Name}
                        >
                        <View style='text-align:center;'>
                          <Image src={require('/src/images/png1.jpg')}
                            style='width:80%;height:100px;'
                          >

                          </Image>
                        </View>

                          <View>
                          <Text>{item.Menu_Name}</Text>
                          <Text>￥{item.Menu_Price}</Text>

                            <Text className='add' onClick={this.addClick.bind(this)}>+</Text>



                           <AtTag type='primary' size='small'
                             circle style='background:gold;'
                           >
                           </AtTag>
                          </View>

                      </View>
                      )
                    }
                  })
                }
              </AtTabsPane>
            )
          })
        }
      </AtTabs>
    )
  }
}

export default Menus

