import React,{useState} from 'react' 


const PersonCard = (props) => {
    const {firstname,lastname,age,haircolor}=props
    const [count, setage] = useState(props.age)
    const IncreaseAge=()=>{
        setage(count+1)
    }

return (
    <div className='prop'>
        <h1>{firstname}, {lastname}</h1>
        <h4>age : {count}</h4>
        <h4>Hair Color : {haircolor}</h4>
        <button onClick={IncreaseAge}>Birthday Button for {firstname} {lastname}</button>
    </div>
)
}

export default PersonCard