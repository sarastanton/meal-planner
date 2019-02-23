import React from 'react';
import { NavLink } from 'react-router-dom';


const link = {
  width: '100px',
  padding: '12px',
  margin: '0 20px ',
  background: 'darksalmon',
  textDecoration: 'none',
  color: 'linen',
  'font-size': '20px',
  'font-weight': 'bold'
}

const activeStyle = {
  'box-shadow': 'inset 0 -7px 0px 0px peachpuff',
  color: 'peachpuff'
}

const NavBar = () =>
  <div className="navbar">
    <NavLink to="/mealplan" exact style={link} activeStyle={activeStyle} >
      Mealplan
    </NavLink>
    <NavLink to="/recipes" exact style={link} activeStyle={activeStyle} >
      Recipes
    </NavLink>
  </div>;

export default NavBar
