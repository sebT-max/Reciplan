// Firebase 9
import React, { useState, Fragment, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, user } from './Firebase/firebaseConfig';
import { getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import Loader from './Firebase//Loader'
import SearchRecipes from '../containers/SearchRecipes';
import AddRecipes from '../containers/AddRecipes';
import Logout from '../components/Firebase/Logout'

const Welcome = props => {
    const navigate = useNavigate();

    const [userSession, setUserSession] = useState(null);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const listener = onAuthStateChanged(auth, user => {
            user ? setUserSession(user) : navigate('/welcome');
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

   
        
    return userSession === null ? (
        <Fragment>
            <Loader styling={{textAlign:'center', color:'#FFF'}} loadingMsg={"Authentification"}/>
        </Fragment>
    ) : (
        <Fragment>  
            <div id="round_switch">
                    <Logout />
            </div>
            <div className="container">
                
                <div className='Web'>
                    <div id="searchRecipe">
                        <SearchRecipes userData={userData}/>
                    </div>

                    <div id="addRecipe">
                        <AddRecipes />
                    </div>
                </div>
            </div>
        
        </Fragment>
    )
}

export default Welcome