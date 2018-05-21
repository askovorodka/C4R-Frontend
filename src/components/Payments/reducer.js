import { ActionType } from './action'

const INITIAL_STATE = {
  amount: 100,
  bonus: 0,
  coupon: null,
  method: null,
  contact: null,
  popup: {
    title: 'Add funds',
    message: null,
    viewMode: 'default',
    visible: false
  }
}

/**
 * Payments reducer.
 * @param state
 * @param action
 * @returns {*}
 */
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionType.SET_PAYMENTS_STATE:
      return {...state, ...action.state}

    case ActionType.SET_POPUP_STATE:
      return {...state, popup: {...state.popup, ...action.state}}

    case ActionType.APPLY_COUPON:
      return {...state, coupon: action.coupon}

    default:
      return state
  }
}

export default reducer
