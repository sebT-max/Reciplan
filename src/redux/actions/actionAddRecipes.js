import {ADD_RECIPES,DELETE_RECIPE, DELETE_ALL_RECIPES} from '../constants';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export const addRecipe = data => {
    return {
        type: ADD_RECIPES,
        payload: data
    }
}
export const deleteRecipe = id => {
    toast.error('Recipe deleted!', {
        position: toast.POSITION.TOP_RIGHT,
        className: 'toast-message'
    });
    return {
        type: DELETE_RECIPE,
        payload: id
    } 
}

export const deleteAllRecipes = () => {
    toast.error('All Recipes deleted!', {
        position: toast.POSITION.TOP_RIGHT,
        className: 'toast-message'
    });
    return {
        type: DELETE_ALL_RECIPES
    }
}

export default {addRecipe,deleteRecipe,deleteAllRecipes}

