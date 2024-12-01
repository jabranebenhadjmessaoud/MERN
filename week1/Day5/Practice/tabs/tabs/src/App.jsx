import { useState } from 'react'
import './App.css'
import Tabfilter from './components/Tabfilter'
import ViewTab from './components/ViewTab'

function App() {
  const [selectedtab,setSelectedtab]=useState("tab1")
  const [tab, setTab] = useState([
    {'tabnumber':'tab1', 'tabtext':"this is the content of tab 1" },
    {'tabnumber':'tab2', 'tabtext':"this is the content of tab 2" },
    {'tabnumber':'tab3', 'tabtext':"this is the content of tab 3" }
  ])


  const filteredtab=tab.filter( p => {
    return p.tabnumber.includes(selectedtab) 
  })

  return (
    <>
      <div className="container">
        <Tabfilter setSelectedtab={setSelectedtab}/>
      </div>
      <div>
        {filteredtab.map((p,index)=> < ViewTab key={index} p={p}/>)}
      </div>

    </>
  )
}

export default App
