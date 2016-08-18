import React, {Component} from 'react';
import ReactNative from 'react-native';
import {connect} from 'react-redux';

const {
  View,
  ScrollView,
  TextInput,
  Image,
  StyleSheet,
  TouchableHighlight,
  Text
} = ReactNative


class Home extends Component {

  searchPressed(){
    this.props.fetchRecipes('bacon,cucumber,banana');
  }

  render(){
    return <View style={{marginTop:50}}>
      <View>
        <TouchableHighlight onPress={()=>this.searchPressed()}>
          <Text>Search</Text>
        </TouchableHighlight>
      </View>
      <ScrollView>

      </ScrollView>
    </View>
  }
}

function mapStateToProps(state){
  return {
    searchedRecipes:state.searchedRecipes
  }
}

export default connect(mapStateToProps)(Home);
