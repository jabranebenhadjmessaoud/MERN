import React, { useState } from 'react'

const Form = () => {

    const [data,setData]=useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        password_confirmation:""
    })
    const changeHandler = (e) =>{
        setData((data)=>({
        ...data,
        [e.target.name]: e.target.value
        }))
    }



return (

    <div>
        
        <form >
            <div>
                <label>First Name</label>
                <input type="text" name='firstname' value={data.firstname} onChange={(e)=>changeHandler(e)} />
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" name='lastname' value={data.lastname} onChange={(e)=>changeHandler(e)} />
            </div>
            <div>
                <label>Email</label>
                <input type="text" name='email' value={data.email} onChange={(e)=>changeHandler(e)} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" name='password' value={data.password} onChange={(e)=>changeHandler(e)} />
            </div>
            <div>
                <label>Confim Password</label>
                <input type="password" name='password_confirmation' value={data.password_confirmation} onChange={(e)=>changeHandler(e)} />
            </div>
        </form>
        <div>
            {JSON.stringify(data)}
        </div>

    </div>
)
}

export default Form