import React,{Component} from 'react'
import {Image, Text, View} from '@tarojs/components'
import './menuList.scss'
import Purchase from "./purchase";

class MenuList extends Component {
  constructor () {
    super(...arguments);
    this.state = {
    }
  }
  render() {
    let  {selectClassify,currentList}=this.props;
    return (<View className='menuList'>
        <Text>{selectClassify?selectClassify.title:""}</Text>
        <View className='menuList_list'>
          {
            currentList.map((item)=>{
              if (item.menu_Form!==0&&item.menu_Form===selectClassify.id) {
                return (<View key={item.menu_Id} className='menuList_item'>
                  <image className='menuList_img'  src={item.menu_detail}> </image>
                  <View className='menuList_list_list'>
                    <Text>{item.menu_Name}</Text>
                    <Text>月售:{item.menu_Icon}</Text>
                    <Text className='menuList_Price'>￥{item.menu_Price}</Text>
                    <Purchase menu={item}></Purchase>
                  </View>
                </View>)
              }})
          }
        </View>
      </View>
    )
  }
}
export default MenuList

