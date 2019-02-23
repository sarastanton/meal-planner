import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendMealdaySelection } from '../actions/myMealdays'

class Mealdays extends Component {
  // console.log(this.props.mealdays)

  handleOnClick = (event) => {
    const targetId = parseInt(event.target.dataset.id)
    const mealSelection = this.props.allMealdays.filter(meal => meal.id === targetId)[0]
    this.props.sendMealdaySelection(mealSelection)
  }

  render() {
  // debugger
    if(this.props.mealdays === undefined) {
      return null
    } else {
      // debugger
        return (
          <div className="frame">
            <table className="meals" onClick={this.handleOnClick}>
              <thead>
                <tr>
                  <th> </th>
                  <th> Breakfast </th>
                  <th> Lunch </th>
                  <th> Dinner </th>
                </tr>
              </thead>

              <tbody>
              {this.props.mealdays.map(meal =>
                <tr className={meal[0].toLowerCase().slice(0,3)}>
                  <td className="day-header"> <strong> {meal[0]} </strong> </td>
                  <td data-id={meal[1].id}> {meal[1].recipe.name} </td>
                  <td data-id={meal[2].id}> {meal[2].recipe.name} </td>
                  <td data-id={meal[3].id}> {meal[3].recipe.name} </td>
                </tr>
                )}
              </tbody>
            </table>

          </div>
        )
      }
    }

  }


  //   <select>
  //     {arr.map(a =>
  //       <option> {a} </option>
  //     )}
  //   </select>

  export default connect(null, { sendMealdaySelection })(Mealdays)
