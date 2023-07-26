import { useContext } from 'react'
import { UserContext } from './contexts/UserContext'

const GrandChildComponent = ({ loggedIn }) => {
  const { firstName, lastName, age } = useContext(UserContext)
  return (
    <div
      className="grandChild-container"
      style={{ padding: '15px', border: '1pt solid green', marginTop: '50px' }}
    >
      <h1>GRANDCHILD COMPONENT</h1>
      <p>
        This grandchild serves to BOTH utilize props passed from it's parent
        component (in this case the first child component), and also utilize
        props passed from the UserContext. In this case the firstName, lastName
        and age.
      </p>
      <div>
        {loggedIn ? (
          <span>The Grandchild is logged in as well.</span>
        ) : (
          <span>Grandchild not logged in.</span>
        )}
      </div>
      <div>
        <p>This is the user context</p>
        {loggedIn ? (
          <div>
            {firstName} {lastName} is a {age} year old dude.
          </div>
        ) : (
          <span>Please log in.</span>
        )}
      </div>
    </div>
  )
}

export default GrandChildComponent
