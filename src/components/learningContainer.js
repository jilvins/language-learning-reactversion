import React, { useState, useContext} from 'react'
import '../styles/learningcontainer.css'
import {Context} from '../contextProvider'

function LearningContainer ({word}) {
    const {learningMaterial, currentLevel, nextLevel, startGame} = useContext(Context)
    const {currentQuestion, setCurrentQuestion} = useContext(Context)
    const {gameStarted, setGameStarted} = useContext(Context)
    const {score, setScore} = useContext(Context)
    const [rightAnswer, setRightAnswer] = useState(false)
    const [answMessage, setAnswMeassage] = useState('')
    
    
    

    function chooseAnswer(e) {
        e.preventDefault()
        
        e.target.value === word.latvian ?  setScore(score+1) : setScore(score -0.5 ) 
        e.target.value === word.latvian ? setAnswMeassage("Right! +1 point! :)") : setAnswMeassage("Wrong! -0.5 point! Try again")
        e.target.value === word.latvian ? setRightAnswer(true) : setRightAnswer(false)
        
      }

    function nextQuestion () {
        currentQuestion <= (learningMaterial.length - 1) ?
        setCurrentQuestion(currentQuestion + 1) : setGameStarted(false)
        setAnswMeassage("")
        
        
    }

    return (
        
        <div className="game-body">
          {  gameStarted ?
        <div className="game-screen">
           
        <div className="question-img">
            <img src={word.image} alt='wordImg' className='wordImg' />
        </div>
        <div className="answer-options">
            
            <button value={word.options[0]} onClick={chooseAnswer} className="btn-option" disabled={rightAnswer}>{word.options[0]}</button>
            <button value={word.options[1]} onClick={chooseAnswer} className="btn-option" disabled={rightAnswer}>{word.options[1]}</button>
            <button value={word.options[2]} onClick={chooseAnswer} className="btn-option" disabled={rightAnswer}>{word.options[2]}</button>
            <button value={word.options[3]} onClick={chooseAnswer} className="btn-option" disabled={rightAnswer} >{word.options[3]}</button>
           
        </div>
        <div className="question-shifter">
                <p>{answMessage}</p>
                <button onClick={nextQuestion}>{rightAnswer && currentQuestion < 6 ? "Next question" : null}</button>
                <button onClick={nextLevel}>{rightAnswer && currentQuestion === 6 ? "Next level" : null}</button>
        </div>
        </div>
        : <div className="info-screen">
           { currentLevel===1 ? <p>Start your game? First Level with basic Latvian words will be presended</p> : null}
           { currentLevel===2 ? <p>Congratulation you finnished the first level. Next level will be about family</p> : null}
           { currentLevel===3 ? <p>You are getting better. Next level will be about actions uou can take</p> : null}
           { currentLevel===4 ? <h2>You have finnished this game!!!</h2> : null}
            <p>Your current score is: {score}</p>
            <button onClick={startGame}>Start game</button>
        </div>}
        </div>
    )
}

export default LearningContainer