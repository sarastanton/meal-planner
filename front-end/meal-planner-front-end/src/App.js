import React, { Component } from 'react';
import MealdaysContainer from './containers/MealdaysContainer';
import MyRecipesContainer from './containers/MyRecipesContainer';
import MySavedMealPlansContainer from './containers/MySavedMealPlansContainer';
import RecipesContainer from './containers/RecipesContainer';
import ShoppingListContainer from './containers/ShoppingListContainer';
import SignInContainer from './containers/SignInContainer';
import SignUpContainer from './containers/SignUpContainer';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <React.Fragment>
          <MealdaysContainer />
          <MyRecipesContainer />
          <MySavedMealPlansContainer />
          <RecipesContainer />
          <ShoppingListContainer />
          <SignInContainer />
          <SignUpContainer />
        </React.Fragment>
      </div>
    );
  }
}

export default App;
