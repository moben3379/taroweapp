
//全局属性
import {SELECTMENU} from "../constants/menu";

const  INIT_STATE={
}

export  default function menu(previousState=INIT_STATE,action){
  switch (action.type,action.menuList){
    case SELECTMENU:
      return {
        ...previousState,
        menuList: previousState.menuList
      };
    default :
      return previousState;
  }
}
