const API_URL = process.env.REACT_APP_API_URL;

const setRecipes = recipes => {
  return {
    type: "LOADED_USER_RECIPES",
    recipes
  }
}

const addRecipe = recipe => {
  return {
    type: "CREATE_DB_RECIPE",
    recipe
  }
}

export const getMyRecipes = () => {
  // debugger
  return dispatch => {
    return fetch(`${API_URL}/recipes`)
    .then(response => response.json())
    .then(recipes => dispatch(
      setRecipes(recipes)))
    .catch(error => console.log(error))
  }
}

export const receiveRecipeFormData = recipeFormData => {
  return {
    type: "RECEIVE_FORM_DATA",
    recipeFormData
  }
}

export const createNewDBRecipe = recipe => {
  return dispatch => {
    debugger
    return fetch(`${API_URL}/recipes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ recipe: recipe })
    })
      .then(response => response.json())
      .then(recipe => {
        dispatch(addRecipe(recipe))
      })
      .catch(error => console.log(error))

  }
}
