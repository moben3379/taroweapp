import React,{Component} from 'react'
import {Text, View} from '@tarojs/components'
import './classify.scss'
import {getEvent} from "../common/utils/utils";

let  event=getEvent();
class Classify extends Component {

  constructor (props) {
    super(props);
    this.state={
      selectClassify:null,
      classifyList : [{ title: '美味小吃' ,id:1 },
        { title: '好吃家常' ,id:2},
        { title: '请客大宴' ,id:3 },
        { title: '营养套餐' ,id:4},
        {title: '本店特色' ,id:5},
        {title:'其他美食' ,id:6}]
    }
  }
  clickHandle(item){
    if (this.state.selectClassify&&this.state.selectClassify.id!==item.menu_Id){
      this.setState({selectClassify:item},()=>{
        this.props.onChangeClassify&&this.props.onChangeClassify(this.state.selectClassify);
      })
      event.emit("changeClassify");

    }else if (!this.state.selectClassify){
      this.setState({selectClassify:item},()=>{
        this.props.onChangeClassify&&this.props.onChangeClassify(this.state.selectClassify);

      })
      event.emit("changeClassify");
    }
  }

  render() {
    let {classifyList,selectClassify}=this.state
    return (<View className='classify'>{
      classifyList.map((item,index)=>{
          return (<Text onClick={this.clickHandle.bind(this,item)} className={"classify_title "+((selectClassify&&selectClassify.id==item.id)?"select":"")}  key={item.id} > {item.title}</Text>)
        })}
      </View>
    )
  }
}

export default Classify

