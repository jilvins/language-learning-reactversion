import React, {useContext, useState} from 'react'
import '../styles/learningcontainer.css'
import {Context} from '../contextProvider'

function LearningContainer ({word}) {
    const {learningMaterial} = useContext(Context)
    const [chosen, setChosen] = useState(false)
    
    //console.log(learningMaterial[0].latvian)

    function sayHello(e) {
        console.log(`${word.english}'was clicked'`);
      }

    return (
        
        <div>
        <div>
            <img src={word.image} alt='wordImg' className='wordImg' />
        </div>
        <div>
            <button onClick={sayHello}>{word.options[0]}</button>
            <button onClick={sayHello}>{word.options[1]}</button>
            <button onClick={sayHello}>{word.options[2]}</button>
            <button onClick={sayHello}>{word.options[3]}</button>
           
        </div>
        </div>
    )
}

export default LearningContainer