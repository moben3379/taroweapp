import React,{Component} from 'react';
import {Text, View} from '@tarojs/components'
import TabBar from "../common/tabBar";
import {connect} from "react-redux";
import {findMenu} from "../../actions/menu";
import {AtButton} from "taro-ui";
import Taro from "@tarojs/taro";

@connect(({menu}) =>({menu},{findMenu}))

class MyManagement extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     pageNum: 1,
  //     pageSize: 10,
  //     hotSpotList: [],
  //     chooseDataType: ''
  // }
  // }
  // reloadList(dataType, pageNum) {
  //   let oldList = this.state.hotSpotList;
  //   Taro.request({
  //     url: 'https://www.juntaitec.cn/api/gyt/hospitalList',
  //     data: {
  //       hotSpotDataType: dataType,
  //       pageNum: pageNum,
  //       pageSize: this.state.pageSize
  //     },
  //     header: {
  //       'content-type': 'application/json' // 默认值
  //     },
  //     method: 'GET',
  //     dataType: 'json',
  //     success: (res) => {
  //       let list = [...oldList];
  //       console.log("dataType: ", dataType);
  //       console.log("list: ", res.data);
  //       let dataItem = res.data.data.map((item) => {
  //         list.push(item);
  //         return item
  //       });
  //       this.setState({
  //         hotSpotList: list
  //       });
  //     },
  //   });
  //
  // }
  //
  // componentDidMount() {
  //   const {pageNum} = this.state;
  //   this.setState({
  //     pageNum: pageNum + 1
  //   });
  //   this.reloadList(this.state.chooseDataType, this.state.pageNum)
  // }
   render(){
  //   let hotSpotList = this.state.hotSpotList;
  //   console.log("是否有数据？呢",hotSpotList)
  //   const sidebar = (
  //     <View>
  //       {hotSpotList.map((post) =>
  //         <Text key={post.itemid}>
  //           {post.itemid}
  //         </Text>
  //       )}
  //     </View>
  //   )
  return (
    <View>
      <AtButton size='small' >查询菜单</AtButton>
      {/*{sidebar}*/}
      <TabBar tabBarCurrent={2}/>

    </View>
  )
}
}
export default MyManagement

