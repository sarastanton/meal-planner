import React, { Component } from 'react';

import { Switch, Redirect, BrowserRouter as Router, Route } from 'react-router-dom';

import MyRecipesContainer from './containers/MyRecipesContainer';
import MySavedMealPlansContainer from './containers/MySavedMealPlansContainer';
import SignInContainer from './containers/SignInContainer';
import SignUpContainer from './containers/SignUpContainer';
import NavBar from './components/navbar'
import PrinterFriendlyShoppingList from './components/printShoppingList'

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Route path="/print" component={PrinterFriendlyShoppingList}/>
            <Route exact path="/" render={() => <Redirect to="/mealplan" />} />
            <Route path="/mealplan" component={NavBar} />
            <Route path="/recipes" component={NavBar} />
            <Route path="/mealplan" component={MySavedMealPlansContainer} />
            <Route path="/recipes" component={MyRecipesContainer} />
          </React.Fragment>
        </Router>
      </div>
    );
  }

}



export default App;
