import React, { Component} from 'react';
import {connect} from 'react-redux';
import {ActionCreators} from '../actions'
import { bindActionCreators } from 'redux'
import Home from './Home'
import ApplicationTabs from './ApplicationTabs'

class AppContainer extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <ApplicationTabs {...this.props}/>
      //  <Home {...this.props} />
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators,dispatch)
}

export default connect((state) => {return{}},mapDispatchToProps)(AppContainer);
