import './App.css'
import PersonCard from './components/PersonCard'

function App() {
const  persons=[
    {firstname:"bob",lastname:"marly",age:25,haircolor:"black"},
    {firstname:"alex",lastname:"john",age:22,haircolor:"brown"},
    {firstname:"aaa",lastname:"bbbb",age:20,haircolor:"yellow"},
    {firstname:"zzz",lastname:"ttt",age:18,haircolor:"red"}
        ]
  

  return (
    <>
    <div>
      {
        persons.map((elm,index)=>{
          return <PersonCard  firstname={elm.firstname}
                              lastname={elm.lastname}
                              age={elm.age}
                              haircolor={elm.haircolor}
                              key={index}/>

        })
        
      }
      

    </div>
    </>
  )
}

export default App
