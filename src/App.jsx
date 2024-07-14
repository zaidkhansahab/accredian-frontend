import { useState } from 'react'
import {Route , Routes} from "react-router-dom"
import Layout from './Layout'

import IndexPage from './pages/IndexPage'

import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegistrationPage'



function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index  element={<IndexPage/>} />
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/register" element={<RegisterPage />}/>
      
      </Route>

    </Routes>
  )
}

export default App
