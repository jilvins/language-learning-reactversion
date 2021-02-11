import React, { useState, useContext} from 'react'
import '../styles/learningcontainer.css'
import {Context} from '../contextProvider'

function LearningContainer ({word}) {
    const {learningMaterial, nextLevel, startGame} = useContext(Context)
    const {currentQuestion, setCurrentQuestion} = useContext(Context)
    const {gameStarted, setGameStarted} = useContext(Context)
    const [btnColor, setBtnColor] = useState('')
    const {score, setScore} = useContext(Context)
    const [answerMessage, setAnswerMessage] = useState('')
    const [rightAnswer, setRightAnswer] = useState(false)
    
    
    

    function chooseAnswer(e) {
        e.preventDefault()
        //e.target.value === word.latvian ? setBtnColor('true') : setBtnColor('false')
        if (e.target.value === word.latvian) { setScore(score+1) && setAnswerMessage(prevVal=> prevVal="Right! +1 point! :)")} else {setScore(score-0.5) && setAnswerMessage(prevVal=> prevVal="Wrong! -0.5 point! Try again")}
        
        e.target.value === word.latvian ? setRightAnswer(true) : setRightAnswer(false)
        console.log(score)
        console.log(currentQuestion)
      }

    function nextQuestion () {
        currentQuestion <= (learningMaterial.length - 1) ?
        setCurrentQuestion(currentQuestion + 1) : setGameStarted(false)
        console.log(answerMessage)
        
        
    }

    return (
        
        <div>
          {  gameStarted ?
            <div>
            <div>
                <p>And now: {answerMessage}</p>
            </div>
        <div>
            <img src={word.image} alt='wordImg' className='wordImg' />
        </div>
        <div>
            <button value={word.options[0]} onClick={chooseAnswer} className={`btn-option ${btnColor}`} disabled={rightAnswer}>{word.options[0]}</button>
            <button value={word.options[1]} onClick={chooseAnswer} className={`btn-option ${btnColor}`} disabled={rightAnswer}>{word.options[1]}</button>
            <button value={word.options[2]} onClick={chooseAnswer} className={`btn-option ${btnColor}`} disabled={rightAnswer}>{word.options[2]}</button>
            <button value={word.options[3]} onClick={chooseAnswer} className={`btn-option ${btnColor}`} disabled={rightAnswer} >{word.options[3]}</button>
           
        </div>
        <div>
                <p>{rightAnswer ? "You are right" : null}</p>
                <button onClick={nextQuestion}>{rightAnswer && currentQuestion < 6 ? "Next question" : null}</button>
                <button onClick={nextLevel}>{rightAnswer && currentQuestion === 6 ? "Next level" : null}</button>
        </div>
        </div>
        : <div>
            <p>Start your game? First Level with basic Latvian words will be presended</p>
            <button onClick={startGame}>Start game</button>
        </div>}
        </div>
    )
}

export default LearningContainer