const API_URL = process.env.REACT_APP_API_URL;

export const getMyRecipes = () => {
  // debugger
  return dispatch => {
    return fetch(`${API_URL}/recipes`)
    .then(response => response.json())
    .then(recipes => dispatch({
      type: "FETCH_USER_RECIPES",
      recipes: recipes
    }))
    .catch(error => console.log(error))
  }
}

export const sendRecipeSelection = selection => {
  return {
    type: "SEND_RECIPE_SELECTION",
    selection
  }
}

export const createNewDBRecipe = recipeData => {
  return dispatch => {
    return fetch(`${API_URL}/recipes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ recipe: recipeData })
    }).then(response => response.json())
    .then(recipe => {
      dispatch({
        type: "CREATE_DB_RECIPE",
        recipe
      })
      dispatch({
        type: "CLEAR_RECIPE_FORM"
      })
    })
    .catch(error => console.log(error))
  }
}

export const receiveRecipeFormData = recipeFormData => {
  return {
    type: "RECEIVE_FORM_DATA",
    recipeFormData: recipeFormData
  }
}

export const updateDBRecipe = recipeData => {
  return dispatch => {
    return fetch(`${API_URL}/recipes`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ recipe: recipeData })
    }).then(response => response.json())
    .then(recipe => {
      dispatch({
        type: "UPDATE_DB_RECIPE",
        recipe
      })
    })
    .catch(error => console.log(error))
  }
}

export const deleteRecipe = recipeId => {
  return dispatch => {
    return fetch(`${API_URL}/recipes/${recipeId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json())
    .then(recipe => {
      dispatch({
        type: "DELETE_DB_RECIPE",
        recipe
      })
    })
    .catch(error => console.log(error))
  }
}
