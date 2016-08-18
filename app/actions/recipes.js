import * as types from './types';
import Api from '../lib/api';
export function fetchRecipes(ingredients){
return(dispatch,getState)=>{
const params=[
  `i=${encodeURIComponent(ingredients)}`,
  'fillIngredients=false'
].join('&');

console.log(params);
return Api.get(`?${params}`).then(resp=>{
  dispatch(setSearchedRecipes({recipes:resp}))
}).catch((ex)=>{
  console.log(ex);
})
}

}

export function setSearchedRecipes({ recipes }){
  return{
    type:types.SET_SEARCHED_RECIPES,
    recipes
  }  
}

export function addRecipe(){
  return{
    type:types.ADD_RECIPE,
  }
}
