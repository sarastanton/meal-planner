const initialRecipeState = {
  recipes: [],
  newRecipe: {},
  recipeFormData: {
    name: '',
    directions: '',
    ingredients_attributes: []
  },
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

    case "UPDATE_DB_RECIPE":
    return {
      ...state,
      recipes: [...state.recipes, action.recipe]
    };

    case "DELETE_DB_RECIPE":
    console.log(action)
    console.log(action.id)
      return {
        ...state,
        recipes: [...state.recipes.filter(recipe => recipe.id !== action.recipe.id)]
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
