import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import MyRecipesContainer from './containers/MyRecipesContainer';
import MySavedMealPlansContainer from './containers/MySavedMealPlansContainer';
import SignInContainer from './containers/SignInContainer';
import SignUpContainer from './containers/SignUpContainer';
import NavBar from './components/navbar'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <NavBar />
            <Route exact path="/" component={MySavedMealPlansContainer} />
            <Route exact path="/mealplan" component={MySavedMealPlansContainer} />
            <Route exact path="/recipes" component={MyRecipesContainer} />
            <Route exact path="/signup" component={SignUpContainer} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
