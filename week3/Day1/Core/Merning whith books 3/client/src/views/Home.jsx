import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Home = () => {
    const [Allbooks,setAllbooks]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:9999/api/books")
        .then((res)=>{
            console.log("Getting all books data");
            setAllbooks(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })



    },[])




return (

    <>  
    <div className="container-fluid  d-flex flex-column gap-3 ">
        <div className='navbar navbar-expand-xl d-flex justify-content-around bg-light '>
        <Navbar />
        <h1>Book Catalog</h1>
        </div>
        

        <table className='table table-striped table-bordered table-responsive'>
            <thead>
                <tr>
                    <th>Titile</th>
                    <th>Author</th>
                    <th>Page Count</th>
                    <th>Available</th>
                    <th>Book Page</th>
                </tr>
            </thead>
            <tbody>
                
                {
                    Allbooks.map((bok,i)=>
                        (<tr key={i}>
                            <td>{bok.title}</td>
                            <td>{bok.author}</td>
                            <td>{bok.pages}</td>
                            <td className='d-flex gap-2 justify-content-center'>
                                {bok.isAvailable?(<p >Yes ✅ </p>):(<p>No❌</p>)}|| <Link to={"/book/update/"+bok._id}><button className='btn btn-warning sm'>Edit</button></Link>
                            </td>
                            <td>
                                <Link to={"/book/"+bok._id}><button className='btn btn-success lg'>Book Details</button></Link>
                            </td>
                            
                        </tr>
                        )
                    )
                }
            </tbody>
        </table>
        </div>
    </>
)
}

export default Home