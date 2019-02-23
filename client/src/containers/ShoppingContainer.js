import React, { Component } from 'react';
import RecipeSpotlightCheckboxList from '../components/recipeSpotlightCheckboxList';
import ShoppingListContainer from './ShoppingListContainer';

class ShoppingListContainer extends Component {

  render() {

    return()
      <RecipeSpotlightCheckboxList />
      <ShoppingListContainer />

  }

}
