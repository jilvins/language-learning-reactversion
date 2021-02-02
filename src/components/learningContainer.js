import React, { useState} from 'react'
import '../styles/learningcontainer.css'
//import {Context} from '../contextProvider'

function LearningContainer ({word}) {
    //const {learningMaterial} = useContext(Context)
    const [btnColor, setBtnColor] = useState('')
    const [score, setScore] = useState(0)
    const [rightAnswer, setRightAnswer] = useState(false)
    

    function chooseAnswer(e) {
        
        e.target.value === word.latvian ? setBtnColor('true') : setBtnColor('false')
        e.target.value === word.latvian ? setScore(score+1) : setScore(score+0)
        e.target.value === word.latvian ? setRightAnswer(true) : setRightAnswer(false)
      }

    function nextQuestion (word) {
        [word].shift()
    }

    return (
        
        <div>
            <div>
                <p>Current score: {score}</p>
            </div>
        <div>
            <img src={word.image} alt='wordImg' className='wordImg' />
        </div>
        <div>
            <button value={word.options[0]} onClick={chooseAnswer} className={btnColor}>{word.options[0]}</button>
            <button value={word.options[1]} onClick={chooseAnswer} className={btnColor}>{word.options[1]}</button>
            <button value={word.options[2]} onClick={chooseAnswer} className={btnColor}>{word.options[2]}</button>
            <button value={word.options[3]} onClick={chooseAnswer} className={btnColor}>{word.options[3]}</button>
           
        </div>
        <div>
                <p>{rightAnswer ? "You are right" : null}</p>
                <button onClick={nextQuestion}>{rightAnswer ? "Next question" : null}</button>
        </div>
        </div>
    )
}

export default LearningContainer