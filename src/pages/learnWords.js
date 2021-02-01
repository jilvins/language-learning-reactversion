import React, {useContext} from 'react'
import LearningContainer from '../components/learningContainer'
import {Context} from '../contextProvider'



function LearnWords () {
    let {learningMaterial} = useContext(Context)

    const unique = [...new Set(learningMaterial)];

    
    let randomNumber = Math.floor(Math.random() * learningMaterial.length) ;
  


   
    const newWords = learningMaterial.filter(word=> word.id == randomNumber).map((word) => (
        <LearningContainer key={word.id} word={word} />))

  

   return ( 
       
   <div>
       
     
   {newWords}
   {console.log(unique)}
    </div>
    )
}

export default LearnWords

