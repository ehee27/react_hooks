export const INITIAL_STATE = {
  fullName: '',
  email: '',
  age: 0,
  membership: '',
  members: [],
  quantity: 0,
}

export const formReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }
    case 'INCREASE':
      return {
        ...state,
        quantity: state.quantity + 1,
      }
    case 'DECREASE':
      return {
        ...state,
        quantity: state.quantity - 1,
      }
    case 'ADD_MEMBER':
      return {
        ...state,
        members: [...state.members, action.payload],
      }
    case 'REMOVE_MEMBER':
      return {
        ...state,
        members: state.members.filter(member => member !== action.payload),
      }
    default:
      return state
  }
}
