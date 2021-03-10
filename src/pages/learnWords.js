import React, {useContext} from 'react'
import LearningContainer from '../components/learningContainer'
import {Context} from '../contextProvider'
import '../styles/learningcontainer.css'



function LearnWords () {
    let {learningMaterial} = useContext(Context)
    const {currentQuestion} = useContext(Context)
    

    let randomNumber = currentQuestion
   
    const newWords = learningMaterial.filter(word=> word.id == randomNumber).map((word) => (
        <LearningContainer key={word.id} word={word} />))

  

   return ( 
       
   <div className="app-body">
       
     
   {newWords}
   
    </div>
    )
}

export default LearnWords

