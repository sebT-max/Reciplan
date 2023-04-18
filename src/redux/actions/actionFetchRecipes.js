import { 
    FETCH_RECIPES_IS_LOADING, 
    FETCH_RECIPES_SUCCESS, 
    FETCH_RECIPES_ERROR
} from '../constants'

import axios from 'axios'



const fetchRecipesLoading = () => {
    return {
        type: FETCH_RECIPES_IS_LOADING
    }
}

const fetchRecipesSuccess = data => {
    return {
        type: FETCH_RECIPES_SUCCESS,
        payload: data
    }
}

const fetchRecipesError = error => {
    return {
        type: FETCH_RECIPES_ERROR,
        payload: error
    }
}

export const fetchRecipes = title => {
    
    return dispatch => {

        dispatch(fetchRecipesLoading())

        axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${title}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_APP_KEY}`)
            
        .then( res => {
            const recipesArray = res.data.hits;
            dispatch(fetchRecipesSuccess(recipesArray))
        })
        .catch( error => {
            dispatch(fetchRecipesError(error.message))
        })

    }
}