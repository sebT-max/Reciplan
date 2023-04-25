import React,{useRef, useEffect, Fragment,useState} from 'react'
import {Link} from 'react-router-dom';


const Landing = () => {

  const [btn, setBtn] = useState(false)
  const refReciplan = useRef(null);

  useEffect(()=> {
    refReciplan.current.classList.add("startingImg");
    setTimeout(()=> {
       refReciplan.current.classList.remove("startingImg");
       setBtn(true)
    },1000)
  },[])

  const setLeftImg = () =>{
    refReciplan.current.classList.add("leftImg");
    refReciplan.current.classList.remove("rightImg");
  }

  const setRightImg = () =>{
    refReciplan.current.classList.add("rightImg");
    refReciplan.current.classList.remove("leftImg");
  }

  const logoPosition={
    height:100,
    margin: "0 auto"
  }

 const btnDisplay = btn && (
     <>
      <div className="leftBox" onMouseOver = {setLeftImg}>
        <Link to="/signup" className="btn btn-danger">Sign up</Link>
      </div>
      <div className="rightBox" onMouseOver = {setRightImg}>
        <Link to="/login" className="btn btn-dark">Login</Link>
      </div>
    </>
  )

  return (
    <main ref={refReciplan} className=" welcomePage">
      <div className="landing-message container">
      Welcome to Reciplan !
Sign up and make your list of recipes ! 
      <div className="p-4 d-flex justify-content-center">
        {btnDisplay}
      </div>
      </div>
      

    </main>
  )
}

export default Landing;