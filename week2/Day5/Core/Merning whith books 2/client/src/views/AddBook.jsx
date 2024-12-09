import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";

const AddBook = () => {
const [title,setTitle]=useState("")
const [author,setAuthor]=useState("")
const [pages,setPages]=useState(0)
const [isAvailable,setAvailable]=useState(false)
const navigate = useNavigate();



const submitHandler=(e)=>{
    
    e.preventDefault()
    console.log(isAvailable);
    axios.post('http://localhost:9999/api/createbook',{
        title,
        author,
        pages,
        isAvailable,
    })
    .then(res => {
        console.log(res);
        console.log(res.data);
        setTitle("")
        setAuthor("")
        setPages(0)
        setAvailable(false)
        console.log("before navigating");
        navigate("/");
        
        
    })
    .catch((err) => {
        console.log(err);
    });
    
}

return (

    <div className='container'>
        <div className='navbar navbar-expand-xl d-flex justify-content-around bg-light'>
            <Navbar/>
            <h1>Add a Book</h1>
        </div>
        <form className='form-group d-flex flex-column gap-3 align-items-center ' onSubmit={submitHandler}>
            <div className='form-goup w-25' >
                <label className='form-label'>Title</label>
                <input type="text" className='form-control' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div className='form-goup w-25'>
                <label className='form-label'>Author Name</label>
                <input type="text" className='form-control' value={author} onChange={(e)=>setAuthor(e.target.value)}/>
            </div>
            <div className='form-goup w-25'>
                <label className='form-label'>Page Count</label>
                <input type="number"  className='form-control' value={pages} onChange={(e)=>setPages(e.target.value)}/>
            </div>
            <div className='form-goup w-25'>
                <label className='form-check-label'>Is it Available? </label>
                <input type="checkbox" className='form-check-input' value={isAvailable}  onChange={(e)=>setAvailable(e.target.checked)} />
            </div>
            <button className='btn btn-primary'>Add Book</button>
        </form>

    </div>

)
}



export default AddBook