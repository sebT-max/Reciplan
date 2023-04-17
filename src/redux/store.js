import { createStore, combineReducers, applyMiddleware } from 'redux'
import reducerAddRecipes from './reducers/reducerAddRecipes'
import reducerFetchedRecipes from './reducers/reducerFetchRecipes'
import thunk from 'redux-thunk'

const rootreducer = combineReducers({
    library: reducerAddRecipes,
    search: reducerFetchedRecipes
})

const store = createStore(rootreducer, applyMiddleware(thunk))

export default store