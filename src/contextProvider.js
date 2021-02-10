import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Context = React.createContext()

function ContextProvider({children}) {
    const [learningMaterial, setLearningMaterial] = useState([])
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
            
                
   

    function nextLevel () {
        console.log("to the next level")
        setCurrentLevel(currentLevel+1)
        setCurrentQuestion(1)
        console.log(`current level is: ${currentLevel}`)
        if (currentLevel===1){
            setCurrentWordSet('secondLevel.json') 
        } else if (currentLevel===2){
            setCurrentWordSet('thirdLevel.json')
        }
        console.log(learningMaterial)
        console.log(currentQuestion)
    }


    return (
        <Context.Provider value={{learningMaterial, setLearningMaterial, currentQuestion, setCurrentQuestion, score, setScore, nextLevel}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}