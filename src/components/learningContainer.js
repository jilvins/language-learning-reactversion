import React, {useState, useContext} from 'react'
import {Context} from '../contextProvider'


function LearningContainer (word) {
    const [learningMaterial] = useContext(Context)

    return (
        <div>
        <div>
            <img src={word.image} alt='wordImg' />
        </div>
        <div>
            <button>{word.answer}</button>
           
        </div>
        </div>
    )
}

export default LearningContainer