import React, { useContext } from 'react'
import GrandChildComponent from './GrandChildComponent'
import { LoginContext } from './contexts/LoginContext'

const ChildPage = () => {
  //
  const { loggedIn, setLoggedIn } = useContext(LoginContext)
  //
  const handleClick = () => {
    setLoggedIn(!loggedIn)
  }
  return (
    <div className="secondChild-container" style={{ padding: '15px' }}>
      <h1>CHILD COMPONENT</h1>
      <button onClick={handleClick}>LOGIN</button>
      <div>
        {loggedIn ? (
          <span>You are logged in.</span>
        ) : (
          <span>Please log in.</span>
        )}
      </div>
      <GrandChildComponent loggedIn={loggedIn} />
    </div>
  )
}

export default ChildPage
