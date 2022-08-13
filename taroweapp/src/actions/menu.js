
import Taro from "@tarojs/taro";
import {SELECTMENU} from "../constants/menu";




export  const  findMenu=() =>{

  return(dispatch,getState)=>{
  Taro.request({
    url: 'https://g2.glypro19.com/api/findMenuInformation',
    data: {
    },
    header: {
      'content-type': 'application/json' // 默认值
    },
    method:'GET',
    success: function (res) {
      dispatch(setMenu(res.data))
      console.log("输出",res.data.data)
    }

  });
  }
}

export  function  setMenu(res){
  console.log(res)
  return{
    type:SELECTMENU,
    menuList:res
  }

}
