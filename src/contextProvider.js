import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Context = React.createContext()

function ContextProvider({children}) {
    const [learningMaterial, setLearningMaterial] = useState([])
    const [gameStarted, setGameStarted] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(1)
    const [score, setScore] = useState(0)
    const [currentLevel, setCurrentLevel] = useState(1)
    const [currentWordSet, setCurrentWordSet] = useState('data.json')
    
  

            useEffect( () => {
            async function fetchData() {
                const result = await axios(currentWordSet , {
                    headers : { 
                      'Content-Type': 'application/json',
                      'Accept': 'application/json'
                     }
                  })
             
                setLearningMaterial(result.data);
            }
            fetchData()
              }, [currentWordSet]);
            
    function startGame() {
                setGameStarted(true)
                setCurrentQuestion(1)
        if (currentLevel===1){
            setCurrentWordSet('data.json') 
        } else if (currentLevel===2){
            setCurrentWordSet('secondLevel.json')
        } else if (currentLevel===3){
            setCurrentWordSet('thirdLevel.json')
        }
            }           
   

    function nextLevel () {
        
        setGameStarted(false)
        setCurrentLevel(currentLevel+1)
     
    }


    return (
        <Context.Provider value={{learningMaterial, setLearningMaterial, currentQuestion, setCurrentQuestion, score, setScore,
            gameStarted, setGameStarted, currentLevel, nextLevel, startGame}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}