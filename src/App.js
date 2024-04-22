import React from 'react'
import NavbarPage from './PageComponents/Navbar'
import HomePage from './PageComponents/Home'
import ServicePage from './PageComponents/Service'
import FooterPage from './PageComponents/Footer'
import ContactPage from './PageComponents/Contact'
import AboutPage from './PageComponents/About'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingPage from './PageComponents/Loading'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/'>
            <Route index element={<LoadingPage/>}/>
            <Route path='/Navbar' element={<NavbarPage/>} />
            <Route path='/Home' element={<HomePage/>} />
            <Route path='/Service' element={<ServicePage/>} />
            <Route path='/Contact' element={<ContactPage/>} />
            <Route path='/About' element={<AboutPage/>} />
            <Route path='/Footer' element={<FooterPage/>} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
// WE DO