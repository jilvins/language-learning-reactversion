import React, {useState, useContext} from 'react'
import {Context} from '../contextProvider'
import '../styles/learningcontainer.css'

function LearningContainer ({word}) {
    
    return (
        
        <div>
        <div>
            <img src={word.image} alt='wordImg' className='wordImg' />
        </div>
        <div>
            <button>{word.options[0]}</button>
            <button>{word.options[1]}</button>
            <button>{word.options[2]}</button>
            <button>{word.options[3]}</button>
           
        </div>
        </div>
    )
}

export default LearningContainer