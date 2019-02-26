const initialMealdaysState = {
  mealdays: [],
  mealSelection: {},
}

export const mealdaysReducer = (state = initialMealdaysState, action) => {
  switch(action.type) {

    case "FETCH_USER_MEALDAYS":
      return {
        ...state,
        groupedMealdays: [
          [].concat("Monday", [...action.mealdays.filter(day => day.week_day === "Monday")]),
          [].concat("Tuesday", [...action.mealdays.filter(day => day.week_day === "Tuesday")]),
          [].concat("Wednesday", [...action.mealdays.filter(day => day.week_day === "Wednesday")]),
          [].concat("Thursday", [...action.mealdays.filter(day => day.week_day === "Thursday")]),
          [].concat("Friday", [...action.mealdays.filter(day => day.week_day === "Friday")]),
          [].concat("Saturday", [...action.mealdays.filter(day => day.week_day === "Saturday")]),
          [].concat("Sunday", [...action.mealdays.filter(day => day.week_day === "Sunday")]),
        ],
        allMealdays: action.mealdays
      }

    case "SEND_MEALDAY_SELECTION":
      return {
        ...state,
        mealSelection: action.selection
      };

    case "UPDATE_SAVED_MEALDAY":
    return {
      ...state, allMealdays:
        [...state.allMealdays, action.updatedMealday]
    }

    default:
      return state;

  }
}
