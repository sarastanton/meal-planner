import React, { Component } from 'react'

export default class Mealdays extends Component {
  // console.log(this.props.mealdays)

  handleOnClick(event) {
    console.log(event.target.dataset.id)
  }

  render() {
  // debugger
    if (this.props.mealday === undefined) {
      console.log("not loaded yet")
    } else {
      console.log([
        "Monday",
        this.props.mealday[0],
        this.props.mealday[1],
        this.props.mealday[2]
      ])
    }

    if(this.props.mealday === undefined) {
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
                <tr className={this.props.mealday[0].toLowerCase().slice(0,3)}>
                  <td className="day-header"> <strong> {this.props.mealday[0]} </strong> </td>
                  <td data-id={this.props.mealday[1].recipe.id}> {this.props.mealday[1].recipe.name} </td>
                  <td data-id={this.props.mealday[2].recipe.id}> {this.props.mealday[2].recipe.name} </td>
                  <td data-id={this.props.mealday[3].recipe.id}> {this.props.mealday[3].recipe.name} </td>
                </tr>
              </tbody>
            </table>

          </div>
        )
      }
    }

  }
