import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const EditBook = () => {
    const [title,setTitle]=useState("")
    const [author,setAuthor]=useState("")
    const [pages,setPages]=useState(0)
    const [isAvailable,setAvailable]=useState(false)
    const [ErrorHandler, setErrorHandler] = useState({})


    const _id=useParams()
    const nav = useNavigate()
    useEffect(()=>{
        console.log(_id.id);
    
        axios.get(`http://localhost:9999/api/book/${_id.id}`)
            .then((res)=>{
                console.log("Getting one book data");
                setTitle(res.data.title)
                setAuthor(res.data.author)
                setPages(res.data.pages)
                setAvailable(res.data.isAvailable)
            })
            .catch((err)=>{
                console.log("something wrong with gett one book ");
                console.log(err);
                })
        },[])
        
    const submitHandler=(e)=>{
    
        e.preventDefault()
        console.log(isAvailable);
        axios.put(`http://localhost:9999/api/book/${_id.id}`,{
                title,
                author,
                pages,
                isAvailable,
            })
            .then(res => {
                console.log("✅✅✅", res.data)
                nav("/")
            })
            .catch(err => {
                console.log("❌❌❌", err.response.data.errors)
                setErrorHandler(err.response.data.errors)
            })


    }




return (


    <>
    
        <div className='container'>
            <div className='navbar navbar-expand-xl d-flex justify-content-around bg-light'>
                <Navbar/>
                <h1>Update {title}</h1>
            </div>
            <form className='form-group d-flex flex-column gap-3 align-items-center ' onSubmit={submitHandler}>
                <div className='form-goup w-25' >
                    <label className='form-label'>Title</label>
                    <input type="text" className='form-control' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                    {ErrorHandler.title && <p>{ErrorHandler.title.message}</p>}
                </div>
                <div className='form-goup w-25'>
                    <label className='form-label'>Author Name</label>
                    <input type="text" className='form-control' value={author} onChange={(e)=>setAuthor(e.target.value)}/>
                    {ErrorHandler.author && <p>{ErrorHandler.author.message}</p>}
                </div>
                <div className='form-goup w-25'>
                    <label className='form-label'>Page Count</label>
                    <input type="number"  className='form-control' value={pages} onChange={(e)=>setPages(e.target.value)}/>
                </div>
                <div className='form-goup w-25'>
                    <label className='form-check-label'>Is it Available? </label>
                    <input type="checkbox" className='form-check-input' checked={isAvailable}  onChange={(e)=>setAvailable(e.target.checked)} />
                </div>
                <button className='btn btn-primary'>Update</button>
            </form>

        </div>

    </>
)
}

export default EditBook