import { useState } from 'react'
import './App.css'
import Displaylist from './components/Displaylist'
import Listeoftodos from './components/Listeoftodos'

function App() {
  const [todos,setTodos]=useState([])

  const addtodo = (objFromForm) => {
    console.log(objFromForm)
    setTodos([...todos, objFromForm])
    
  }

  return (
    < >
    <div className="container">
      <Displaylist addtodo={addtodo}/>
      {JSON.stringify(todos)}
      {todos.map((to,index)=> <Listeoftodos key={index} to={to} />)}

    </div>
      
    </>
  )
}

export default App
