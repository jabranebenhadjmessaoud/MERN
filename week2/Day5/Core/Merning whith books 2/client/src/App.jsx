import {Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import AddBook from './views/AddBook'
import Showone from './views/Showone'

function App() {


  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/create' element={<AddBook/>}/>
    <Route path='/book/:id' element={<Showone/>}/>
    
    </Routes>
    </>
  )
}

export default App
