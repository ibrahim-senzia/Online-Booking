import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import Header from './Components/Header'
import Footer from './Components/Footer'
import './index.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Header />
    <Footer />
  
    
    </>
  )
}

export default App
