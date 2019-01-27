const initialRecipeState = {
  recipes: [],
  newRecipe: {},
  recipeFormData: [],
  recipeSelection: {}
}

export const recipesReducer = (state = initialRecipeState, action) => {
  switch(action.type) {

    case "FETCH_USER_RECIPES":
      return {
        ...state,
        recipes: action.recipes
      };

    case "SEND_RECIPE_SELECTION":
      return {
        ...state,
        recipeSelection: action.selection
      }

    case "CREATE_DB_RECIPE":
    return {
      ...state,
      newRecipe: action.recipe
    };

    default:
      return state;

  }
}
