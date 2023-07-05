import { useState } from 'react'
import './App.css'
import Chat from './components/Chat'
import Sidemenu from './components/Sidemenu'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main'>
      <Sidemenu />
      <Chat />
    </div>
  )
}

export default App
