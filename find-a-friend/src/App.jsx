import './App.css'
import { Details } from './components/Details'
import { Header } from './components/Header'
import { MainContent } from './components/MainContent'

function App() {
  return (
    <div className='main-container'>
      <Header />
      <MainContent />
      <Details />
    </div>
  )
}

export default App
