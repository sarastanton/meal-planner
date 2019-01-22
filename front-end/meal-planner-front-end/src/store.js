import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';

import thunk from 'redux-thunk';

import { recipesReducer } from './reducers/recipesReducer'
import { mealdaysReducer } from './reducers/mealdaysReducer'
import { ingredientsReducer } from './reducers/ingredientsReducer'

export const rootReducer = combineReducers({
  recipes: recipesReducer,
  mealdays: mealdaysReducer,
  ingredients: ingredientsReducer
})

export const store =  createStore(rootReducer, applyMiddleware(thunk));

// const state = {
//   shopiingList: [],
//   recipes: [],
//   mealplan: [],
//   recipeFormData: [],
//   ingredientFormData: []
// }
