// Standard form setup... selecttions are made, state is updated, form is submitted and state is logged to the console

import './form.css'
import { useState, useReducer, useRef } from 'react'
import { INITIAL_STATE, formReducer } from './formReducer'

const Form = () => {
  //------------------- ref and State variables ---------------------------
  const memberRef = useRef()
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE)
  const [success, setSuccess] = useState(false)

  //------------------- handle changes, click & submit --------------------
  const handleChange = e => {
    e.preventDefault()
    dispatch({
      type: 'CHANGE_INPUT',
      payload: { name: e.target.name, value: e.target.value },
    })
  }
  const handleIncrease = e => {
    e.preventDefault()
    dispatch({ type: 'INCREASE' })
  }
  const handleDecrease = e => {
    e.preventDefault()
    dispatch({ type: 'DECREASE' })
  }
  const handleMembers = e => {
    e.preventDefault()
    const members = memberRef.current.value.split(',')
    members.forEach(members => {
      dispatch({ type: 'ADD_MEMBER', payload: members })
    })
  }
  const handleSubmit = e => {
    e.preventDefault()
    setSuccess(true)
    console.log(state)
  }
  //---------------------------------------

  return (
    <div className="form-container">
      <h1>FORM PAGE</h1>
      <form>
        {/* ---------------- standard inputs ---------------------- */}
        <label htmlFor="fullName"></label>
        <input
          name="fullName"
          type="text"
          placeholder="Full Name"
          onChange={handleChange}
        />
        <label htmlFor="email"></label>
        <input
          name="email"
          type="text"
          placeholder="Email"
          onChange={handleChange}
        />
        <label htmlFor="age"></label>
        <input
          name="age"
          type="text"
          placeholder="Age"
          onChange={handleChange}
        />
        {/* ---------------- dropdown options ---------------------- */}
        <label htmlFor="membership"></label>
        <select name="membership" onChange={handleChange}>
          <option value="Please Select Membership">
            Please select membership
          </option>
          <option value="Blue Monkey">Blue Monkey</option>
          <option value="Gold Monkey">Gold Monkey</option>
          <option value="Platinum Monkey">Platinum Monkey</option>
        </select>
        {/* ---------------- textarea memberss ---------------------- */}
        <textarea
          ref={memberRef}
          name="members"
          type="textarea"
          placeholder="Members: plesae seperate with comma"
        />
        <button onClick={handleMembers}>Add Members</button>
        {/* ---------------- memberss box ---------------------- */}
        {state.members?.length ? (
          <div className="members-box">
            {state.members.map(members => (
              <small
                onClick={() =>
                  dispatch({ type: 'REMOVE_MEMBER', payload: members })
                }
                key={members}
              >
                {members}
              </small>
            ))}
          </div>
        ) : (
          <span></span>
        )}
        {/* ---------------- quantity box ---------------------- */}
        <div className="quantity-box">
          <label htmlFor="quantity">Quantity ({state.quantity})</label>
          <button className="quantity-button" onClick={handleIncrease}>
            {' '}
            +{' '}
          </button>
          <button className="quantity-button" onClick={handleDecrease}>
            {' '}
            -{' '}
          </button>
        </div>

        <button type="submit" onClick={handleSubmit}>
          SUBMIT
        </button>
      </form>
    </div>
  )
}

export default Form

// console.log(title, description, price, category, quantity)
// setTitle('')
// setDescription('')
// setPrice('')
// setCategory(category)
// setQuantity(0)

// const [title, setTitle] = useState('')
// const [description, setDescription] = useState('')
// const [price, setPrice] = useState(0)
// const [category, setCategory] = useState('')
// const [tags, setTags] = useState('')
// const [quantity, setQuantity] = useState(0)
//
// const handleTitle = e => setTitle(e.target.value)
// const handleDescription = e => setDescription(e.target.value)
// const handlePrice = e => setPrice(e.target.value)
// const handleCategory = e => setCategory(e.target.value)
//
// const handleIncrement = e => {
//   e.preventDefault()
//   setQuantity(quantity + 1)
// }
// const handleDecrement = e => {
//   e.preventDefault()
//   setQuantity(quantity - 1)
// }
