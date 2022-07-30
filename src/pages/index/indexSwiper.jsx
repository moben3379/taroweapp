
import React,{Component} from "react";
import {View,Swiper,SwiperItem,Image} from "@tarojs/components";


class IndexSwiper extends Component {

    render () {
        return (
            <View>
                <View className=''>
                    <View className=''>
                    <Swiper
                indicatorColor='#fff'
                indicatorActiveColor='#333'
                indicatorDots='true'
                autoplay='true'>
                <SwiperItem key={1}>
                    <Image className='swiper-image' src={require('/src/images/png1.jpg')}></Image>
                </SwiperItem>
                <SwiperItem key={2}>
                    <Image className='swiper-image' src={require('/src/images/png2.jpg')}></Image>
                </SwiperItem>
                <SwiperItem key={3}>
                    <Image className='swiper-image' src={require('/src/images/png1.jpg')}></Image>
                </SwiperItem>
            </Swiper>
            </View>
            </View>
    </View>
        )
    }
}
export  default  IndexSwiper