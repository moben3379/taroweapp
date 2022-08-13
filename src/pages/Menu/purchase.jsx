import React,{Component} from 'react'
import { Image, Text, View} from "@tarojs/components";
import './purchase.scss'
import {getFoodCount, setFoodCount,getEvent} from "../common/utils/utils";
import {AtIcon} from "taro-ui";

const myEvent=getEvent();

class Purchase extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      Num:0
    }
  }
  componentDidMount() {
   this.setState( {Num:getFoodCount(this.props.menu)
   })
    myEvent.on("changeClassify",()=>{
      this.setState( {Num:getFoodCount(this.props.menu)})
    })
  }
  Dec(){
    if(this.props.menu){
      if (this.state.Num>0){
        setFoodCount(this.props.menu,this.state.Num,"dec",()=>{
          this.setState( {Num:getFoodCount(this.props.menu)})
          myEvent.emit("purchase")
        })
      }else {
        console.log("加减出错")
      }

    }
  }
  Add(){
    if(this.props.menu){
        setFoodCount(this.props.menu,this.state.Num,"add",()=>{
          this.setState( {Num:getFoodCount(this.props.menu)})
          myEvent.emit("purchase")
        })

    }
  }


  render() {
    let {Num}=this.state;
    let hideClass=Num>0?"":"hide";
    return (
      <View className='add'>
        {/*<AtIcon onClick={this.Dec.bind(this)} className={"dec_img "+hideClass} value='subtract' size='20' color='black'>-</AtIcon>*/}
        <Image onClick={this.Dec.bind(this)} className={"dec_img "+hideClass}  src={require('../../images/dec.png')}>-</Image>
        <Text className={"menu_num "+hideClass}>{Num}</Text>
        {/*<AtIcon onClick={this.Add.bind(this)} className="add_img"  value='add' size='20' color='black'>+</AtIcon>*/}
        <Image onClick={this.Add.bind(this)} className="add_img"  src={require('../../images/add.jpg')}>+</Image>
      </View>
    )
  }
}

export default Purchase

