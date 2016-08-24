import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

const allTabs=[
  (lastRoute)=> lastRoute || {key:'home',index:0},
  (lastRoute)=> lastRoute || {key:'about',index:1}
]

export const tabs=createReducer({index:0,key:'home',routes:allTabs},{
[types.SET_TAB](state,action){
  return Object.assign({},state,allTabs[action.index]());
}
});
