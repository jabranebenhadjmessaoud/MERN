import {Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import AddBook from './views/AddBook'
import Showone from './views/Showone'
import EditBook from './views/EditBook'

function App() {


  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/create' element={<AddBook/>}/>
    <Route path='/book/:id' element={<Showone/>}/>
    <Route path='/book/update/:id' element={<EditBook/>}/>
    </Routes>
    </>
  )
}

export default App
