import React, {useContext} from 'react'
import LearningContainer from '../components/learningContainer'

import {Context} from '../contextProvider'

function LearnWords () {
    const {learningMaterial} = useContext(Context)
    
   const newWords = learningMaterial.map((word) => (
        <LearningContainer key={word.id} word={word} />
        
    ))

   return ( 
       
   <div>
     
   {newWords}
   {console.log(learningMaterial[1])}
    </div>
    )
}

export default LearnWords

//learningMaterial.filter(options => options.includes('k'))