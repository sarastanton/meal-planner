const initialMealdaysState = {
  mealSelection: {},
}

export const mealdaysReducer = (state = initialMealdaysState, action) => {
  switch(action.type) {

    case "FETCH_USER_MEALDAYS":
      return {
        ...state,
        allMealdays: action.mealdays.sort((a, b) => a.id - b.id),
        groupedMealdays: [
          [].concat("Monday", [...action.mealdays.filter(day => day.week_day === "Monday")].sort((a, b) => a.id - b.id)),
          [].concat("Tuesday", [...action.mealdays.filter(day => day.week_day === "Tuesday")].sort((a, b) => a.id - b.id)),
          [].concat("Wednesday", [...action.mealdays.filter(day => day.week_day === "Wednesday")].sort((a, b) => a.id - b.id)),
          [].concat("Thursday", [...action.mealdays.filter(day => day.week_day === "Thursday")].sort((a, b) => a.id - b.id)),
          [].concat("Friday", [...action.mealdays.filter(day => day.week_day === "Friday")].sort((a, b) => a.id - b.id)),
          [].concat("Saturday", [...action.mealdays.filter(day => day.week_day === "Saturday")].sort((a, b) => a.id - b.id)),
          [].concat("Sunday", [...action.mealdays.filter(day => day.week_day === "Sunday")].sort((a, b) => a.id - b.id)),
        ],
      }

    case "SEND_MEALDAY_SELECTION":
      return {
        ...state,
        mealSelection: action.selection
      };

    case "UPDATE_SAVED_MEALDAY":
    return {
      ...state,
      allMealdays:
        [...state.allMealdays, action.updatedMealday].sort((a, b) => a.id - b.id),
      groupedMealdays:
        [...state.groupedMealdays]
    }

    default:
      return state;

  }
}
