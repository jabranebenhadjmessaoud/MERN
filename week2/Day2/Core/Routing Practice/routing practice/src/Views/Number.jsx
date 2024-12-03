import React from 'react'
import { useParams } from 'react-router-dom'
// This component work for both words and numbers 
const Number = () => {
    const {num}=useParams()
    if(! isNaN(num)){
        return (
            <>
                <h1>The Number is :{num}</h1>
            </>
        )}
    else
    {
        return (
            <>
                <h1>The Word is :{num}</h1>
            </>
        )
    }    
}

export default Number