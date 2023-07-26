export const INITIAL_STATE = {
  emailInput: '',
  passwordInput: '',
  count: 0,
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_EMAIL':
      return {
        ...state,
        emailInput: action.payload,
      }
    case 'UPDATE_PASSWORD':
      return {
        ...state,
        passwordInput: action.payload,
      }
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      return new Error()
  }
}

export const ACTIONS = {
  emailUpdate: 'UPDATE_EMAIL',
  passwordUpdate: 'UPDATE_PASSWORD',
  increment: 'INCREMENT',
  decrement: 'DECREMENT',
}
