import { 
    FETCH_RECIPES_IS_LOADING, 
    FETCH_RECIPES_SUCCESS, 
    FETCH_RECIPES_ERROR
} from '../constants'

const initialState = {
    isLoading: false,
    fetchedRecipes: [],
    error: ''
}

const reducerFetchedRecipes = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RECIPES_IS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        
        case FETCH_RECIPES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                fetchedRecipes: action.payload,
                error: ''
            }    

        case FETCH_RECIPES_ERROR:  
            return {
                ...state,
                isLoading: false,
                fetchedRecipes: [],
                error: action.payload
            }  
    
        default: return state
    }
}

export default reducerFetchedRecipes