import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const searchedRecipes = createReducer({},{
[types.SET_SEARCHED_RECIPES](state,action){
  let newState={};
  let i =0;
  action.recipes.forEach((recipe)=>{
    newState[i++]=recipe;
  });
  return newState;
}
});

export const recipeCount =createReducer(0,{
[types.SET_SEARCHED_RECIPES](state,action){
  return action.recipes.length;
}
});
