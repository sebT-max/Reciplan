import React, { Fragment } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { addRecipe } from '../redux/actions/actionAddRecipes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Accordion, AccordionItem } from 'react-light-accordion';
import FlipMove from 'react-flip-move';
// import 'react-light-accordion/demo/css/index.css';



const SearchRecipes = () => {
    const state = useSelector(state => state.search)
    const dispatch = useDispatch()
    
    const handleSave = (recipeElements) => {
        dispatch(addRecipe(recipeElements))
        toast('Recipe saved !', {
            position: toast.POSITION.TOP_RIGHT,
            className: 'toast-message'
        });
    }

    const container = window.innerWidth < 400 ? "":"container";


    const listEmptyOrNotMessage = state.fetchedRecipes.length > 0 ? 
    <div className='container bg-white p-3 mb-3'>
        <h5>Recipes for last search</h5>
    </div>
    :
    <div className='container bg-white p-3 mb-3'>
        <h6>Let's find some nice recipes !</h6>
    </div>


    const displayFetchedRecipes = state.isLoading ? (
        <div className="d-flex justify-content-center">
            <div className="spinner-border text-info" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
    : state.error !== '' ? (
        <p>{state.error}</p>
    )
    :
    (
     <FlipMove>
        
        <Accordion atomic="true">
     {
         state.fetchedRecipes.map( (data) => {
            console.log( state.fetchedRecipes)
            return (
                <Fragment key={data.id}>
          
                        <AccordionItem className="card mb-2 mt-2" title={`${data.recipe.label}`}>
                                {
                                    data.recipe.images.REGULAR.url &&
                                    <img style={{height:250,marginTop:25,width:250}} alt ={data.recipe.images.REGULAR.url} src={data.recipe.images.REGULAR.url}/>
                                }
                                <br />
                                <div className="yo container">
                                    <h4 className='mt-5 mb-5'> Ingrédients</h4>
                                        <ul className="d-flex ingredients-container">
                                            {data.recipe.ingredients.map(ingredient => {
                                                return(
                                                        <li className="ingredient">{ingredient.text}</li>    
                                                )
                                            })}
                                        </ul> 
                                        <div className="p-3">
                                            <a 
                                            className="btn btn-info" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            href={data.recipe.url}
                                            >Recipe link
                                            </a>
                                        <button 
                                            className="btn btn-outline-secondary ml-3 "
                                            onClick={() => handleSave(data)}
                                                >
                                        Add to list
                                        </button>
                                        </div>
                                       
                                        
                                </div>                  
                                <br/>
                        </AccordionItem>
                    </Fragment>
            )
        })
    }
     </Accordion>
     </FlipMove>
    )
    
    
    

    return (
        <main role="main">
            <div className={container} style={{minHeight: '200px'}}>
                <div id="accordion">
                    <div className='bg-dark color-white container br-10 p-3 mb-3 header-fixed '>
                        <h4 style={{color:'white'}}>CHOOSE YOUR RECIPES</h4>
                    </div>
                    { listEmptyOrNotMessage}
                    { displayFetchedRecipes }
                    <ToastContainer />
                </div>
            </div>

        </main>    
    )
}

export default SearchRecipes