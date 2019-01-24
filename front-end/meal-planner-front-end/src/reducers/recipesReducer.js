const initialRecipeState = {
  recipes: [],
  recipe: {},
  recipeFormData: [{
    quantity: '',
    unit: '',
    description: '',
    directions: ''
  }]
}

export const recipesReducer = (state = initialRecipeState, action) => {
  switch(action.type) {

    case "FETCH_USER_RECIPES":
      return {
        ...state,
        recipes: action.recipes
      };

    case "RECEIVE_FORM_DATA":
      return {
        ...state,
        recipeFormData: action.recipeFormData
      };

    case "CREATE_DB_RECIPE":
    return {
      ...state,
      recipe: action.recipe
    };

    default:
      return state;

  }
}
