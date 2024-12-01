import React from 'react'

const Listeoftodos = (props) => {
    let {todoname,todostatus}=props.to
    
    const deletetodo=()=>{

    }
    const checking=()=>{
        todostatus=!todostatus;
        console.log(todostatus);
    }
    



    return (
    <div className='d-flex justify-content-around'>

        <h4 className={todostatus ?'text-decoration-none':'text-decoration-line-through' }>Todo Name: {todoname} <input type="checkbox"  onChange={checking} /> </h4>
        
        <form onSubmit={deletetodo}>
            <button className='btn btn-danger'>Delete</button>
        </form>
    </div>
)
}

export default Listeoftodos