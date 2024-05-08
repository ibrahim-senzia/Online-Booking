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
     (GIF) Online-Movie Ticket Booking is website made to reduce the process of physically going to a movie store and booking for a movie there.
    <Header />
    <Footer />
  
    
    </>
  )
}

export default App
