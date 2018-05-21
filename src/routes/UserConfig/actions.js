import { api } from 'src/lib/api'
import { UPDATE_USER_SETTINGS } from './constants'

export const updateUserSettings = settingsObject => async dispatch => {
  const res = await api.updateUserSettings(settingsObject)

  dispatch({
    type: UPDATE_USER_SETTINGS,
    payload: {user: {}}
  })
  return res
}
