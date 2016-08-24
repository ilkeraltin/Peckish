import React, {Component} from 'react'
import { View, TabBarIOS , TabBarItemIOS } from 'react-native'
import {connect} from 'react-redux'
import Home from '../Home'
import About from '../About'

class ApplicationTabs extends Component{
renderScene(component){
  return <View style={{flex:1}}>
    {React.createElement(component,this.props)}
  </View>
}
onPress(tabIndex){
console.log(tabIndex);
  this.props.setTab(tabIndex);

}

render(){
  console.log(this.props);
  return <TabBarIOS style={{flex:1}}>
    <TabBarIOS.Item
      systemIcon="favorites"
      iconSize={25}
      selected={this.props.tabs.index===0}
      onPress={ ()=> {return this.onPress(0)}}
      >
      {this.renderScene(Home)}
    </TabBarIOS.Item>

    <TabBarIOS.Item
      systemIcon="more"
      iconSize={25}
      selected={this.props.tabs.index===1}
        onPress={ ()=> {return this.onPress(1)}}
      >
      {this.renderScene(About)}
    </TabBarIOS.Item>

  </TabBarIOS>
}

}

function mapStateToProps(state){

  return {
tabs:state.tabs
  }
}

export default connect(mapStateToProps)(ApplicationTabs);
