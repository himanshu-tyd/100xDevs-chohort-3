import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import SignUp from '../components/SignUp'
import Hero from '../sections/Hero'
import SignIn from '../components/SignIn'

const Router = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Hero/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/signin' element={<SignIn/>} />
    </Routes>
    </>
  )
}

export default Router