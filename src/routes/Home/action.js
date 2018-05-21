import { api } from '../../lib/api'
import { GET_CHARGED } from './types'

export const getChargedAction = () => async dispatch => {
  const res = await api.getBoxesCharged().then(res => {
    dispatch({
      type: GET_CHARGED,
      payload: res.rewards
    })
  })
  return res
}
