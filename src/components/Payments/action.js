import { api } from 'src/lib/api'

export const ActionType = {
  SET_PAYMENTS_STATE: '@payments.set_payments_state',
  SET_POPUP_STATE: '@payments.set_popup_state',
  APPLY_COUPON: '@payments.apply_coupon'
}

/**
 * @param state
 * @returns {{type: string, payload: *}}
 */
export const setPaymentsState = (state) => ({type: ActionType.SET_PAYMENTS_STATE, state})
export const setPopupState = (state) => ({type: ActionType.SET_POPUP_STATE, state})
export const applyCoupon = code => async dispatch => {
  try {
    const coupon = await api.useCoupon(code)
    dispatch({type: ActionType.SET_PAYMENTS_STATE, state: {coupon}})
    dispatch({type: ActionType.SET_POPUP_STATE, state: {viewMode: 'default', message: null}})
  } catch (error) {
    dispatch({type: ActionType.SET_POPUP_STATE, state: {message: error.message}})
  }
}
