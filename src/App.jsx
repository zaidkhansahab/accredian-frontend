
import {Route , Routes} from "react-router-dom"
import Layout from './Layout'

import IndexPage from './pages/IndexPage'
import ReferralForm from './component/ReferralForm'




function App() {
 

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index  element={<IndexPage/>} />
      
      <Route path="Referral/" element={<ReferralForm  />}/>
      
      </Route>

    </Routes>
  )
}

export default App
