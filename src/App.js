import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/nav/Navbar'
import Home from './components/Home'
import Form from './components/useReducer/Form'
import EmailForm from './components/useReducer/EmailForm'
// import SideBar from './components/useContext/SideBar'
// import { DashboardContext } from './components/useContext/context'
import ChildComponent from './components/ChildComponent'
import { LoginContext } from './components/contexts/LoginContext'
import { UserContext } from './components/contexts/UserContext'

const user = {
  firstName: 'Scott',
  lastName: 'Lucas',
  age: 41,
  isSubscribed: true,
}

const App = () => {
  //
  const [loggedIn, setLoggedIn] = useState(false)
  //
  return (
    // <DashboardContext.Provider value={user}>
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      <UserContext.Provider value={user}>
        <div className="App">
          <Router>
            <Navbar />
            <Routes>
              <Route index element={<Home />} />
              <Route path="form" element={<Form />} />
              <Route path="child" element={<ChildComponent />} />
              <Route path="reducer" element={<EmailForm />} />

              {/* <Route path="sidebar" element={<SideBar />} /> */}
            </Routes>
          </Router>
        </div>
      </UserContext.Provider>
    </LoginContext.Provider>

    // </DashboardContext.Provider>
  )
}

export default App
