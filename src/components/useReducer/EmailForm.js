import './form.css'
import { useReducer } from 'react'
import { INITIAL_STATE, reducer, ACTIONS } from './EmailReducer'
//

const EmailForm = () => {
  // We've imported and destructured all Reducer logic from the ReducerLogic file.
  // INITIAL STATE, reducer, ACTIONS

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  const handleSubmit = () => {
    console.log('This is now our reduced state object------', {
      email: state.emailInput,
      password: state.passwordInput,
      count: state.count,
    })
  }

  return (
    <div className="reducer-container">
      <h1>useReducer()</h1>
      <div>
        <p>
          Might be a better method than useState(). We can 'reduce' our state
          data, save it, send it to a DB etc.
        </p>
        <h3>Practice</h3>
        <p>1. import useReducer</p>
        <p>
          2. set the reducer object with state, action and switch/cases for
          action types
        </p>
        <p>
          3. set the useReducer() hook. state and dispatch, use the reducer
          object and an object that defines all state (initialState)
        </p>
        <p>4. handle all changes and clicks by 'dispatching' the action type</p>
      </div>

      {/* ---------------- standard inputs ---------------------- */}
      <div className="form-box">
        <label htmlFor="email"></label>
        <input
          name="email"
          value={state.email}
          type="text"
          placeholder="Email"
          onChange={e =>
            dispatch({ type: ACTIONS.emailUpdate, payload: e.target.value })
          }
        />
        <label htmlFor="password"></label>
        <input
          name="password"
          value={state.password}
          type="password"
          placeholder="Password"
          onChange={e =>
            dispatch({ type: ACTIONS.passwordUpdate, payload: e.target.value })
          }
        />
        <div className="button-box">
          <button onClick={() => dispatch({ type: ACTIONS.increment })}>
            INCREMENT
          </button>
          <button onClick={() => dispatch({ type: ACTIONS.decrement })}>
            DECREMENT
          </button>
        </div>
        <button onClick={handleSubmit}>SUBMIT</button>
      </div>

      <div
        className="results"
        style={{ border: '1pt solid blue', marginTop: '50px', width: '100%' }}
      >
        <p>{state.email}</p>
        <p>{state.count}</p>
      </div>
    </div>
  )
}

export default EmailForm

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return {
//         ...state,
//         count: state.count + 1,
//       }
//     case 'DECREMENT':
//       return {
//         ...state,
//         count: state.count - 1,
//       }
//     case 'NEW_USER_INPUT':
//       return {
//         ...state,
//         userInput: action.payload,
//       }
//     case 'NEW_EMAIL_INPUT':
//       return {
//         ...state,
//         emailInput: action.payload,
//       }
//     default:
//       throw new Error()
//   }
// }
// const ACTION = {
//   newUser: 'NEW_USER_INPUT',
//   newEmail: 'NEW_EMAIL_INPUT',
//   increment: 'INCREMENT',
//   decrement: 'DECREMENT',
// }

// const [state, dispatch] = useReducer(reducer, {
//   count: 0,
//   userInput: '',
//   emailInput: '',
// })

// const handleSubmit = e => {
//   e.preventDefault()
//   console.log('This is the state object-------', {
//     email: state.emailInput,
//     count: state.count,
//   })
// }

// onChange={e =>
//   dispatch({ type: ACTION.newEmail, payload: e.target.value })
// }
