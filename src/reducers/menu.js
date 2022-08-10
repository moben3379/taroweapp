
//全局属性
const  INIT_STATE={
  menuList:[]
}

export  default function menu(previousState=INIT_STATE,action){

  let {type,menuList}=action;
  switch (type){
    case 'selectMenu':
      return {
        ...previousState,
        menuList: menuList.data
      };
    default :
      return previousState;
  }
}
