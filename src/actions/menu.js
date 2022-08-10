
import Taro from "@tarojs/taro";



export  const  findMenu=() =>{

  return(dispatch)=>{
  Taro.request({
    url: 'https://www.juntaitec.cn/api/gyt/hospitalList',
    data: {},
    header: {
      'content-type': 'application/json' // 默认值
    },
    success: function (res) {
      dispatch({type:'selectMenu',menuList:res.data})
    }
  });
  }
}
