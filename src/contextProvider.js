import React, {useState, useEffect} from 'react'

const Context = React.createContext()

function ContextProvider({children}) {
    const [learningMaterial, setLearningMaterial] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(1)
    const [score, setScore] = useState(0)

    useEffect(() => {
        fetch('data.json' , {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
            .then(res => res.json())
            .then(data => setLearningMaterial(data))
            .catch((err) => {console.error(err) });
            
                
    }, [])


    return (
        <Context.Provider value={{learningMaterial, setLearningMaterial, currentQuestion, setCurrentQuestion, score, setScore}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}