import {Component} from 'react';
import { AtTabBar }  from 'taro-ui'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'


class TabBar extends Component {

  handleClick (value) {
    console.log("tabBar ====" +value);
    switch (value) {
      case 0:
        Taro.reLaunch({
          url: '/pages/index/index'
        });
        break;
      case 1:
        Taro.reLaunch({
          url: `/pages/orders/index` //'/pages/physicalIdentity/healthKnowledge'
        });
        break;
      case 2:
        Taro.reLaunch({
          url: '/pages/mymanagement/index'
        });
        break;
      default:
        break;
    }
  }

  render() {
    let BASEURL=`https://www.juntaitec.cn/wechatapp/images/`
    return (
      <View>
        <AtTabBar
          fixed
          backgroundColor='#ffffff'
          color='#cccccc'
          selectedColor='#d40000'
          tabList={[
            { title: '首页', image: `${BASEURL}home.png`, selectedImage: `${BASEURL}homeSelected.png` },
            { title: '订单', image: `${BASEURL}knowledge.png`, selectedImage: `${BASEURL}knowledgeSelected.png` },
            { title: '我的', image: `${BASEURL}self.png`, selectedImage: `${BASEURL}selfSelected.png` },
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.props.tabBarCurrent}
        />
      </View>
    );
  }
}

export default TabBar;
