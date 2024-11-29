import React, { useState } from 'react'
const users=[]

const Form = () => {
    const [firstname,SetFirstname]=useState("");
    const [firstnameerror,SetFirstnameerror]=useState("");
    const [lastname,SetLastname]=useState("");
    const [lastnameerror,SetLastnameerror]=useState("");
    const [email, SetEmail] = useState("");
    const [emailerror, setEmailerror] = useState("");
    const [password, setPassword] = useState("");
    const [passworderror, setPassworderror] = useState("");
    const [passwordconfirmation, setPasswordconfirmation] = useState("")
    const [passwordconfirmationerror, setPasswordconfirmationerror] = useState("")
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const[users,SetUsers]=useState([]) ;

    const handleFirstname = (e) => {
        SetFirstname(e.target.value);
        if(e.target.value.length < 1) {
            SetFirstnameerror("First Name is required!");
        } else if(e.target.value.length < 2) {
            SetFirstnameerror("First Name must be 2 characters or longer!");
        } else {
            
            SetFirstnameerror("");
        }
    }
    const handleLastname = (e) => {
        SetLastname(e.target.value);
        if(e.target.value.length < 1) {
            SetLastnameerror("Last Name is required!");
        } else if(e.target.value.length < 2) {
            SetLastnameerror("Last Name must be 2 characters or longer!");
        } else {
            
            SetLastnameerror("");
        }
    }

    const handleEmail = (e) => {
        SetEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailerror("Email is required!");
        } else if(e.target.value.length < 8) {
            setEmailerror("Email must be 8 characters or longer!");
        } else {
            
            setEmailerror("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPassworderror("Password is required!");
        } else if(e.target.value.length < 8) {
            setPassworderror("Password must be 8 characters or longer!");
        } else {
            
            setPassworderror("");
        }
    }
    const handlePasswordconfirmation = (e) => {
        setPasswordconfirmation(e.target.value);
        if(e.target.value != password) {
            setPasswordconfirmationerror("Password Do Not Match");
        }
        else {
            
                setPasswordconfirmationerror("");
            } 
        }   
        
    const SubmitHandler=(e)=>{
    e.preventDefault();
    const newobj={
        firstname,
        lastname,
        email,
        password
    }
    SetUsers([...users,newobj])
    SetFirstname("")
    SetLastname("")
    SetEmail("")
    setPasswordconfirmation("")
    setHasBeenSubmitted(true)
    
    

    }



return (
    <div>
        {
        (hasBeenSubmitted) ? <h2>Thank you for submitting the form !</h2> : <h2>Welcome. Please submit the form</h2>
        }
        

<form onSubmit={SubmitHandler} >
    <div>
        <fieldset>
            <label htmlFor="">First Name</label>
            <input value={firstname} className={firstnameerror? "error" : ""} type="text" onChange={handleFirstname}/>
        </fieldset>
        <label >{firstnameerror}</label>
    </div>

    <div> 
        <fieldset>
            <label htmlFor="">Last Name</label>
            <input value={lastname} className={lastnameerror? "error" : ""} type="text" onChange={handleLastname}/>
        </fieldset>
        <label >{lastnameerror}</label>
    </div>

    <div>
        <fieldset>
            <label htmlFor="">Email</label>
            <input value={email} className={emailerror? "error" : ""} type="text" onChange={handleEmail}/>
        </fieldset>
        <label >{emailerror}</label>
    </div>


    <div>
        <fieldset>
        <label htmlFor="">Password</label>
        <input value={password} className={passworderror? "error" : ""} type='password' onChange={handlePassword}/>
        </fieldset>
        <label >{passworderror}</label>
    </div>

    <div>
        <fieldset>
            <label htmlFor="">Confirm Password</label>
            <input value={passwordconfirmation} className={passwordconfirmationerror? "error" : ""} type='password' onChange={handlePasswordconfirmation}/>
        </fieldset>
        <label>{passwordconfirmationerror}</label>
    </div>

    <button>Create User</button>

    
    


</form>
<h3>Users</h3>
<fieldset>

    {users.map((user)=>(
        <fieldset>
        <p>{user.firstname}</p>
        <p>{user.lastname}</p>
        <p>{user.email}</p>
        </fieldset>
    ))} 


    </fieldset>
    </div>
)
}


export default Form