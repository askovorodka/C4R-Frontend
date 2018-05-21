import { SET_LOGIN_STATE } from './actions'

const INITIAL_STATE = {
  popup: {
    visible: false
  }
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOGIN_STATE: {
      return {...state, popup: action.state}
    }
    default:
      return state
  }
}
export default reducer
