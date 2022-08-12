
import React,{Component} from "react";
import {View, Swiper, SwiperItem, Image, Text} from "@tarojs/components";
import './indexSwiper.scss'
import Top from "./top";
import Activity from "./activity";

class IndexSwiper extends Component {
constructor() {
  super(...arguments);
  this.state={
    store:{
      title:"民以食为天",
      notice:"欢迎光临，很高兴为您服务",
      tags:["香喷喷","福利多","菜品齐全"]
    }
  }
}
    render () {
  let store=this.state.store
        return (
            <View className="swiper_body">
              <Top></Top>
              <Image className='swiper_image'  src={require('/src/images/background1.jpg')}></Image>
              <View className='store'>
              <Image className='store_image' src={require('/src/images/png2.jpg')}></Image>
              <View className='store_text'>
              <Text className='title'>{store.title}</Text>
                <Text className='notice'>{store.notice}</Text>
                <View >
                  {store.tags.map((item,index)=>
                    <Text className='tags_text'  key={index}>{item}</Text>
                  )}
                </View>
              </View>
            </View>
              <Activity></Activity>
    </View>)
    }
}
export  default  IndexSwiper
