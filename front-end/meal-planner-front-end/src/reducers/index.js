import { combineReducers } from "redux";
import recipesReducer from './recipes_reducer'
import mealdaysReducer from './mealdays_reducer'
import ingredientsReducer from './ingredients_reducer'

const rootReducer = combineReducers({
  recipes: recipesReducer,
  mealdays: mealdaysReducer,
  ingredients: ingredientsReducer
})

export default rootReducer;
