import { useState } from 'react'
import React from 'react'
import Form from './components/Form'
import Show from './components/Show';
const App = () => {
  const [boxes, setBoxes] = useState([]);
  const addBox = (newBox)=>{
    setBoxes([...boxes,newBox])
    console.log(boxes)
  }

  return (
    <div className='container mt-5'>
      <h1>Box generator</h1>
      <Form addBox={addBox}/>
      <Show boxes={boxes}/>
    </div>
  )
}


export default App