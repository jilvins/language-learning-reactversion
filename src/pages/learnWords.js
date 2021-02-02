import React, {useContext} from 'react'
import LearningContainer from '../components/learningContainer'
import {Context} from '../contextProvider'



function LearnWords () {
    let {learningMaterial} = useContext(Context)

    
    let randomNumber = Math.floor(Math.random() * learningMaterial.length) ;
  
    console.log(learningMaterial)
   
    const newWords = learningMaterial.filter(word=> word.id == randomNumber).map((word) => (
        <LearningContainer key={word.id} word={word} />))

  

   return ( 
       
   <div>
       
     
   {newWords}
   
    </div>
    )
}

export default LearnWords

