import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import axios from 'axios'

const Showone = () => {

    const [oneBook,setOnebook]=useState({})
        const _id=useParams()
        const navigate = useNavigate();
        useEffect(()=>{
            console.log(_id.id);

            
            axios.get(`http://localhost:9999/api/book/${_id.id}`)
            .then((res)=>{
                console.log("Getting one book data");
                setOnebook(res.data);
            })
            .catch((err)=>{
                console.log("something wrong with gett one book ");
                console.log(err);
            })

        },[])
        const deletebook=(()=>{

            axios.delete(`http://localhost:9999/api/book/${_id.id}`)
            .then((res)=>{
                console.log("deleting one book ");
                navigate("/");
            })
            .catch((err)=>{
                console.log("something wrong with gett one book ");
                console.log(err);
            })
        })


return (

    <>
        <div className='navbar navbar-expand-xl d-flex justify-content-around bg-light'>
            <Navbar/>
            <h1>{oneBook.title}</h1>
        </div>
        <fieldset>
            <h2>{oneBook.title}</h2>
            <h5>By {oneBook.author}</h5>
            <p>Page Count : {oneBook.pages}</p>
            {oneBook.isAvailable?( <><p className='text-success'>Available for borrowing</p> <button className='btn btn-danger' onClick={deletebook} >Borrow</button> </> ):(<br/>)}
        </fieldset>
    </>
)
}

export default Showone