const initialRecipeState = {
  recipes: [],
  newRecipe: {},
  recipeFormData: [{
    name: '',
    description: '',
    ingredients_attributes: []}
  ],
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
      recipes: [...state.recipes, action.recipe]
    };

    case "CLEAR_RECIPE_FORM":
      return {
        ...state,
        recipeFormData: initialRecipeState.recipeFormData
      }

    case "RECEIVE_FORM_DATA":
      return {
        ...state,
        recipeFormData: action.recipeFormData
      }
  
    default:
      return state;

  }
}
