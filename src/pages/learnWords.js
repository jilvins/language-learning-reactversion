import React, {useContext} from 'react'
import LearningContainer from '../components/learningContainer'

import {Context} from '../contextProvider'

function LearnWords () {
    const {learningMaterial} = useContext(Context)

   /* const newWords = learningMaterial.map((word) => (
        <LearningContainer key={word.english} word={word} />
    ))*/

   return ( 
       
   <div>
     
   {/* {newWords}*/} <div>nedarbojas</div>
    </div>
    )
}

export default LearnWords