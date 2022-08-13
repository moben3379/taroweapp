import React,{Component} from 'react'
import {Image, Text, View} from "@tarojs/components";
import "taro-ui/dist/style/components/tabs.scss";
import './menus.scss'
import Taro from "@tarojs/taro";
import { AtTabs, AtTabsPane} from "taro-ui";

import Classify from "./classify";

import MenuList from "./menuList";

class Menus extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      menuList:[],
      current:0,
      list:[],
      currentList:[],
      selectClassify:null
    }
  }

  componentDidMount() {
  this.getData();
  }

  handleClick (value) {
    this.setState({current: value});
  }

  changeClassify(selectClassify){
    this.setState({selectClassify:selectClassify})
    if(this.state.menuList.some(item=>item.menu_Form===selectClassify.id&&item.menu_Form!==0)){
    this.setState({currentList:this.state.menuList.filter(item=>item.menu_Form===selectClassify.id&&item.menu_Form!==0)
    })
    }else{
   this.setState({menuList: this.state.menuList.concat(this.getData(selectClassify))},()=>{
     this.setState({currentList:this.state.menuList.filter(item=>item.menu_Form===selectClassify.id&&item.menu_Form!==0)})
      });
  }
  }


getData(){
  Taro.request({
    // url:'https://g2.glypro19.com/menuList.json',
    url: 'https://g2.glypro19.com/api/findMenuInformation',
    data: {
    },
    header: {
      'content-type': 'application/json' // 默认值
    },
    method: 'GET',
    dataType: 'json',
    credentials: 'include',
    success: (res) => {
      console.log(res)
      this.setState({
        menuList: res.data.data
      })
    },
  });

}
  render() {
    const  {current,selectClassify,currentList}=this.state
    const tabList = [{ title: '点餐' }, { title: '商家' },{title:'其他服务'}]
    return (<View>
      <AtTabs current={current}    tabList={tabList} onClick={this.handleClick.bind(this)}>
        <AtTabsPane >
          <View className="menu_body">
          <Classify onChangeClassify={this.changeClassify.bind(this)} ></Classify>
          <MenuList selectClassify={selectClassify}  currentList={currentList}></MenuList>
          </View>
        </AtTabsPane>
        <AtTabsPane >商家</AtTabsPane>
        <AtTabsPane >其他服务</AtTabsPane>
          })
        }
      </AtTabs>
      </View>
    )
  }
}

export default Menus

