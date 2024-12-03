import React from 'react'
import { useParams } from 'react-router-dom'

const Any = () => {
    const {word,coll,bg}=useParams()
    
return (
    <>
        <h1 style={{backgroundColor:bg, color:coll}}>The Word is :{word}</h1>
    </>
)
}

export default Any