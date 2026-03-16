import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import HomeUser from './pages/user/home'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/homeuser' element={<HomeUser />} />
      </Routes>
    </Router>
  )
}