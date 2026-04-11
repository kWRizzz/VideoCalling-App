import React from 'react'
import SignIn from './pages/auth/SignIn'
import Login from './pages/auth/Login'
import LandingPage from './pages/home/LandingPage'

const App = () => {
  return (
    <div className='min-h-screen w-full font-body bg-main-bg text-white'>
       <LandingPage />
    </div>
  )
}
export default App