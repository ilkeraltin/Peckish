import React, {Component} from 'react';
import ReactNative from 'react-native';

const {
  View,
  ScrollView,
  TextInput,
  Image,
  StyleSheet,
  TouchableHighlight,
  Text
} = ReactNative


export default class About extends Component {
  render(){

    return <View style={styles.scene}>
<Text>About</Text>

    </View>
  }
}

const styles=StyleSheet.create({
  scene:{
    flex:1,
    marginTop:30
  }

});
