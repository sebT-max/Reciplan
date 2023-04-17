import { ADD_RECIPES, DELETE_RECIPE, DELETE_ALL_RECIPES } from '../constants'
import { v4 as uuiv4 } from 'uuid'

const initialState = {
    weekRecipes: []
}

const helperAdddata = action => {
    return {
        id: uuiv4(),
        recipeSaved: action.payload.recipe
    }
}

const removeDataById = (state, id) => {
    const weekSavedRecipes = state.filter( recipe => 
        recipe.id !== id       
        ) 
    return weekSavedRecipes
    
}

// reducer
const reducerAddRecipes = ( state = initialState.weekRecipes, action ) => {

    if (localStorage.getItem('weekRecipesData')) {
        state = JSON.parse(localStorage.getItem('weekRecipesData'))
    }

    switch (action.type) {
        case ADD_RECIPES:
            state = [...state, helperAdddata(action)]
            localStorage.setItem('weekRecipesData', JSON.stringify(state))
            return state;

        case DELETE_RECIPE:
            state = removeDataById(state, action.payload);
            localStorage.setItem('weekRecipesData', JSON.stringify(state))
            return state;
            
            

        case DELETE_ALL_RECIPES:    
            state = [];
            localStorage.setItem('weekRecipesData', JSON.stringify(state))
            return state;
    
        default: return state
    }

}

export default reducerAddRecipes