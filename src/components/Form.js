import React, { useState } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { fetchRecipes } from '../redux/actions/actionFetchRecipes'


const Form = () => {
    const [title, setTitle] = useState('');

    const state = useSelector(state => state.search)
    const dispatch = useDispatch()


    const handleSubmit = e => {
        e.preventDefault();
        dispatch(fetchRecipes(title))
    }


  return (
    <div>
        <form 
            className="form-inline justify-content-center"
            onSubmit={handleSubmit}
        >
            <div className="form-group">
                <input 
                type="text" 
                className="form-control" 
                placeholder="Search for a recipe here"
                required
                value={title}
                onChange={ e => setTitle(e.target.value)}
                />
            </div>
        
            <div className="form-group">
                <button 
                className="btn btn-outline-secondary ml-3"
                >GO
                </button>
            </div>
    
        </form>
    </div>
  )
}

export default Form