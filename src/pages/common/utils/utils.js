import Taro from "@tarojs/taro";
import Event from './event';

const  foodKey='delay';
let myEvent=new Event();

export function getFoodCount(menu){
  let foods=Taro.getStorageSync(foodKey);

  if (foods&&foods[menu.menu_Id]){
      return  foods[menu.menu_Id].Num;
    }else {
      return 0;
    }
}
export  function  setFoodCount(menu,Num,type,callBack){
  if(menu){
    let  foods=Taro.getStorageSync(foodKey);
    if(!foods) foods={};
    if(type==="dec"){
      if (Num===1){
        if (foods[menu.menu_Id]){
          delete  foods[menu.menu_Id]
        }
      }else {
        if (foods[menu.menu_Id]){
          foods[menu.menu_Id].Num=Num-1;
        }
      }
      Taro.setStorageSync(foodKey,foods);
      callBack&&callBack();
    }
  if (type==="add") {
    if(foods[menu.menu_Id]){
      foods[menu.menu_Id].Num=Num+1;
    }else {
      foods[menu.menu_Id]={Num:1,...menu};
    }
    Taro.setStorageSync(foodKey,foods);
    callBack&&callBack();
  }
  }
}

export  function  getEvent(){
  return myEvent
}

export  function  getAll(){
  let allPrice=0;
  let  allNum=0;
  let foods=Taro.getStorageSync(foodKey)
  if(foods){
    Object.keys(foods).map((keys)=>{
      if (foods[keys]){
        allPrice+=foods[keys].menu_Price*foods[keys].Num;
        allNum+=foods[keys].Num;
      }
    })
  }
  return {allNum,allPrice}
}
