import { SET_RANKUP_STATE } from './actions'

const INITIAL_STATE = {
  visible: false
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_RANKUP_STATE:
      return {...state, ...action.state}
    default:
      return state
  }
}
export default reducer
