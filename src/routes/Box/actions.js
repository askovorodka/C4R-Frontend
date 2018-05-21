import { api } from 'src/lib/api'
import { GAME_PLAYED } from './constants'

export const openBox = (boxId, boxOptions) => dispatch => {
  return api.openBox(boxId, boxOptions).then(res => {
    dispatch({
      type: GAME_PLAYED,
      payload: {}
    })

    return res
  })
}
