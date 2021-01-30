import React, {useState, useEffect} from 'react'

const Context = React.createContext()

function ContextProvider({children}) {
    const [learningMaterial, setLearningMaterial] = useState([])

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
    console.log(learningMaterial)

    return (
        <Context.Provider value={{learningMaterial, setLearningMaterial}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}