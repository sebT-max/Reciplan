import React, { Fragment } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = ({calories}) => {
    const progressPercent = (calories * 100 / 10000).toFixed(1)
    
    return (
        <Fragment>
            <div className="container p-3 bg-white"> 
                <h4 style={{color:""}}>Calories for the day:</h4>    
                <div className="progressBar">
                    <CircularProgressbar value={progressPercent} text={`${progressPercent}%`} />
                </div>
            </div>    
        </Fragment>
    )
}

export default ProgressBar