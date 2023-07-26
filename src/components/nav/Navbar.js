import { Link } from 'react-router-dom'
import './nav.css'
import { LoginContext } from '../contexts/LoginContext'
import { useContext } from 'react'

const Navbar = () => {
  //
  const { loggedIn, setLoggedIn } = useContext(LoginContext)
  return (
    <nav>
      <div className="top">
        <Link to="/">Home</Link>
        <Link to="/child">Child</Link>
        <Link to="/form">Form</Link>
        <Link to="/reducer">Reducer</Link>
        {/* <Link to="/context-test">ContextTest</Link> */}
      </div>
      <div className="bottom">
        {loggedIn ? (
          <div>
            <span style={{ color: 'white' }}>Hello Scott</span>
            <button className="nav-button" onClick={() => setLoggedIn()}>
              Log Out
            </button>
          </div>
        ) : (
          <span></span>
        )}
      </div>
    </nav>
  )
}

export default Navbar
