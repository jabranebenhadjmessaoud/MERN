import React, {useState} from 'react'

const Displaylist = ({addtodo}) => {
    
    const[todoname,setTodoname]=useState("")
    const[todostatus,setTodostatus]=useState(false)
    const SubmitHandler = (e) => {
        e.preventDefault() 
        const newtodo={
            todoname,
            todostatus
        }

        addtodo(newtodo)

        setTodoname("")
        setTodostatus("false")

    }




return (

    <div className='bg-black text-white col-10' >
        
        <fieldset>
            <form onSubmit={SubmitHandler}>
                <div>
                    <label >Add a new Todo :</label>
                    <input type="text" value={todoname} onChange={(e)=>setTodoname(e.target.value)} />
                </div>
                <button>Add</button> 
            </form>

        </fieldset>
        


    </div>

)
}


export default Displaylist