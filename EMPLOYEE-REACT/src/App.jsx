import { useState } from 'react'

import './App.css'
import EmployeeManager from './components/EmployeeManager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <EmployeeManager></EmployeeManager>
    </>
  )
}

export default App


