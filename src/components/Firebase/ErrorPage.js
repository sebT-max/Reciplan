import React from 'react';
import batman from '../../images/batman.png'


const ErrorPage =()=> {
  return (
    <div className="quiz-bg">
      <div className="container text-center">
        Oups, cette page n'existe pas !
        <img src={batman} alt="error page" style={{margin:'0 auto',marginTop:'50px',width:'50%'}}/>


      </div>
    </div>
  );
}

export default ErrorPage;