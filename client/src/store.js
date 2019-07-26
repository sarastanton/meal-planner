import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose
} from 'redux';

import thunk from 'redux-thunk';

import { recipesReducer } from './reducers/recipesReducer'
import { mealdaysReducer } from './reducers/mealdaysReducer'
import { ingredientsReducer } from './reducers/ingredientsReducer'

const middleware = [thunk];

const rootReducer = combineReducers({
  recipes: recipesReducer,
  mealdays: mealdaysReducer,
  ingredients: ingredientsReducer
})

export const store = createStore(rootReducer,
  compose(
    applyMiddleware(...middleware)
    // ,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
