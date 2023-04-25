// Firebase 9
import React, { useState, Fragment, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, user } from './Firebase/firebaseConfig';
import { getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import Logout from './Firebase//Logout'
import Loader from './Firebase//Loader'
import SearchRecipes from '../containers/SearchRecipes';
import AddRecipes from '../containers/AddRecipes';
import recipes from '../images/recipesboard.jpg';



const Welcome = props => {
    const navigate = useNavigate();

    const [userSession, setUserSession] = useState(null);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const listener = onAuthStateChanged(auth, user => {
            user ? setUserSession(user) : navigate('/');
        })

        if (!!userSession) {

            const colRef = user(userSession.uid);

            getDoc(colRef)
            .then( snapshot => {
                if (snapshot.exists()) {
                    const docData = snapshot.data(); // objet
                    console.log(docData);
                    console.log(snapshot.id);
                    setUserData(docData);
                }
            })
            .catch( error => {
                console.log(error);
            })
        }

        return listener();
    }, [userSession])

    
    
         const oneOrTwoPages = window.innerWidth < 900 ?
           (
            <SearchRecipes userData={userData}/>
            )
             : 
             (
                <Fragment>
                    <SearchRecipes userData={userData}/>
                    <AddRecipes />
                </Fragment>
                
             )
             ;
    
        const bgImage = {
            backgroundImage:`url(${recipes})`,
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover"
          }
        

    return userSession === null ? (
        <Fragment>
            <Loader styling={{textAlign:'center', color:'#FFF'}} loadingMsg={"Authentification"}/>
        </Fragment>
    ) : (
        <Fragment>  
        
        
        <div className="quiz-bg">
            <div className="container">
                <Logout />
                <div className="d-flex Web">
                    {oneOrTwoPages}
                </div>
            </div>
        </div>
        </Fragment>
    )
}

export default Welcome