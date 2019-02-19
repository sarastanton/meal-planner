import React, { Component } from 'react'

export default class Mealdays extends Component {
  // console.log(this.props.mealdays)

  handleOnClick(event) {
    console.log(event.target.dataset.id)
  }

  render() {
  // debugger
    if(this.props.mealdays === undefined) {
      return null
    } else {
      // debugger
        return (
          <div className="card">
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
                  <td data-id={meal[1].recipe.id}> {meal[1].recipe.name} </td>
                  <td data-id={meal[2].recipe.id}> {meal[2].recipe.name} </td>
                  <td data-id={meal[3].recipe.id}> {meal[3].recipe.name} </td>
                </tr>
                )}
              </tbody>
            </table>

          </div>
        )
      }
    }

  }
