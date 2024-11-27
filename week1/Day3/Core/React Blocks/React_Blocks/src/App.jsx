import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Navigation from './components/Navigation'

function App() {


  return (
    <>
      <div className='app'>
        <Header />
        <div className='downside'>
          <Navigation/>
          <MainContent/>
        </div>
      </div>
      
    </>
  )
}

export default App
