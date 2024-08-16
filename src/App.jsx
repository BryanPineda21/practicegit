import { useState } from 'react'

import './App.css'
import component from './feature1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>
      Hello world!
    </h1>

    <h2>
      This is my second change on this file
    </h2>

    <h3>
      This is my third change on this file
      </h3>

      <component />
    </>
  )
}

export default App
