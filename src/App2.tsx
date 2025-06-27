import  { useState } from 'react'
import Greeting from './Projects/Greeting'

function App2() {
    const [name,setName] = useState("")
  return (
    <div>
      <Greeting name={name} setName={setName}/>
    </div>
  )
}

export default App2
