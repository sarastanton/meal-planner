export const recipesReducer = (state = [], action) => {
  switch(action.type) {

    case "LOADED_USER_RECIPES":
      return action.recipes;

    case "RECEIVE_FORM_DATA":
      return action.recipeFormData;

    case "CREATE_DB_RECIPE":
      return state.concat(action.recipe)

    default:
      return state;

  }
}
