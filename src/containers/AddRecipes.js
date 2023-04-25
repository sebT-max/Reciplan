import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { addRecipe,deleteRecipe, deleteAllRecipes } from '../redux/actions/actionAddRecipes'
import FlipMove from 'react-flip-move';
import ProgressBar from './ProgressBar'
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import { ToastContainer, toast } from 'react-toastify';
import Logout from '../components/Firebase/Logout'

const AddRecipes = ({ libraryData, deleteRecipe, deletAll }) => {

    const displaydata = libraryData.length > 0 ?
        <FlipMove>
            <div className='container bg-white br-10 p-3 mb-3  '>
                <h5>Picked recipes</h5></div>
            <Accordion atomic="true">
        {
            libraryData.map((data) => {
                console.log(data)
                return (
                    <Fragment key={data.id}>
                        
                        <AccordionItem className="card mb-2 mt-2" title={`${data.recipeSaved.label}`} >  
                        <h3 className="mt-3">{data.recipeSaved.label}</h3>
                        {
                            data.recipeSaved.images.REGULAR.url &&
                            <img style={{height:250,marginTop:25,width:250}} src={data.recipeSaved.images.REGULAR.url} alt ={data.recipeSaved.images.REGULAR.url} />
                        }
                        <br />
                                <div className="container">
                                    <h4 className='mt-5 mb-5'> Ingrédients</h4>
                                        <ul className="d-flex ingredients-container">
                            {data.recipeSaved.ingredients.map(ingredient => {
                                return (
                                    <li key={ingredient.id} className="ingredient" > {ingredient.text}</li>
                                ) 
                            })}
                            </ul>
                            <h6 className="mt-2 mb-5"><span><strong>{data.recipeSaved.calories.toFixed(0)} Kj </strong> </span></h6>
                            <ProgressBar calories={data.recipeSaved.calories}/>
                            <a 
                                className="btn btn-info" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                href={data.recipeSaved.url}
                                >Recipe link
                                </a>
                            
                            <span 
                            className="btn btn-danger ml-3"
                            onClick={() => deleteRecipe(data.id)}
                            >Clear recipe</span>
                        </div>
                        <br/>
                        </AccordionItem>
                       
                    </Fragment>
                    
                )
            })
        }
         </Accordion>
        </FlipMove>
        :<div className='message2 container bg-white br-10 p-3 mb-5'><h6>Your list is empty</h6></div> 
        // <p style={{backgroundColor:'white'}} className="text-center">Your list is empty</p>

        const deleteAllBooksBtn = libraryData.length > 0 && 
        <div className="d-flex justify-content-center">
            <button 
               className="btn btn-danger mt-4 mb-5"
               onClick={() => deletAll()}
            >Clear all recipes</button>
        </div>

    return (
        <main role="main">
            <div id="add_recipe_logout">
                <Logout />
            </div>
            <div className="container" style={{minHeight: '200px'}}>
                <div id="accordion">
                    <div className='bg-dark container br-10 p-3 mb-3 header-fixed'>
                        <h4 style={{color:'white'}}>YOUR RECIPES</h4>
                    </div>
                    { displaydata }
                    { deleteAllBooksBtn }   
                </div>
            </div>
            <ToastContainer />
                  
        </main>
    )
}

const addStateToProps = state => {
    return {
        libraryData: state.library
    }
}

const addDispatchToProps = (dispatch) => {
    return {
        addRecipe: param => dispatch(addRecipe(param)),
        deleteRecipe: id => dispatch(deleteRecipe(id)),
        deletAll: () => dispatch(deleteAllRecipes())
    }
}

export default connect(addStateToProps, addDispatchToProps)(AddRecipes)