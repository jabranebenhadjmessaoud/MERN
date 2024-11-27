import React from 'react'


const PersonCard = (props) => {
    const {firstname,lastname,age,haircolor}=props
return (
    <div className='prop'>
        <h1>{firstname}, {lastname}</h1>
        <h4>age : {age}</h4>
        <h4>Hair Color : {haircolor}</h4>
    </div>
)
}

export default PersonCard