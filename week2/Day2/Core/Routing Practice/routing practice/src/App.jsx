import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import './App.css'
import Home from './Views/home'
import Number from './Views/Number'
import Any from './Views/Any'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        {/* this component works for both numbers and words  */}
        <Route path="/:num" element={<Number/>}/> 
        <Route path="/:word/:coll/:bg" element={<Any/>}/>
      </Routes>
    </>
  )
}

export default App
