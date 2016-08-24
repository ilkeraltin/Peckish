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

  constructor(props){
    super(props);
    this.state={searching:false,ingredientsInput:''}

  }
  searchPressed(){
    this.setState({searching:true});
    this.props.fetchRecipes(this.state.ingredientsInput).then(()=>{
      this.setState({
        searching:false
      });
    });
  }
recipes(){
  return Object.keys(this.props.searchedRecipes).map(
    key=>this.props.searchedRecipes[key]

  );
}
  render(){

    return <View style={styles.scene}>
      <View style={styles.searchSection}>
        <TextInput style={styles.searchInput}
          returnKeyType='search'
          placeholder='search ingredients'
          onChangeText={ (ingredientsInput)=>this.setState({ingredientsInput}) }
          value={this.state.ingredientsInput}

          />
        <TouchableHighlight onPress={()=>this.searchPressed()} style={styles.searchButton}>
          <Text>Search</Text>
        </TouchableHighlight>
      </View>
      <ScrollView style={styles.scrollSection}>
          {!this.state.searching &&
          this.recipes().map((recipe,i)=>{
            console.log(recipe);
            return <View key={i}>
              <Image source={{uri:recipe.thumbnail}} style={styles.resultImage} />
              <Text style={styles.resultText}>{recipe.title}</Text>
            </View>
          })
          }
          {this.state.searching ? <Text>Searching . . .</Text> : null}
      </ScrollView>
    </View>
  }
}

const styles=StyleSheet.create({
  scene:{
    flex:1,
    marginTop:30
  },
  searchSection:{
    height:30,
    borderBottomColor:'#000',
    borderBottomWidth:1,
    flexDirection:'row'
  },
  searchInput:{
    flex:0.8
  },
  searchButton:{
    flex:0.2
  },
  scrollSection:{
    flex:0.8,
    padding:10
  },
  resultImage:{
    height:150
  },
  resultText:{
    backgroundColor:'#000',
    color:'#fff',
    height:20

  }

});

function mapStateToProps(state){
  return {
    searchedRecipes:state.searchedRecipes
  }
}

export default connect(mapStateToProps)(Home);
