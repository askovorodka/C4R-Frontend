import {
  CLOSE_USER_MENU,
  LOGOUT,
  OPEN_USER_MENU,
  SELL_DROPS,
  SET_AVATAR_IMAGE,
  SET_PROFILE,
  UPDATE_PROFILE
} from './constants'
import { SET_LANGUAGE } from 'src/components/Language/types'
import { GAME_PLAYED } from 'src/routes/Box/constants'
import { clone, createReducer } from 'src/lib/redux'

const initialState = {}

export default createReducer(initialState,
  {
    [SET_PROFILE]: (state, payload) => {
      return clone(state, payload)
    },
    [LOGOUT]: (state, payload) => {
      const s = clone(state, payload)
      s.user = {}
      return s
    },
    [SET_AVATAR_IMAGE]: (state, avatarUrl) => {
      /* const s = clone(state, )
       s.User.avatar = avatarUrl */
      return clone(state, {user: {avatar: avatarUrl}})
    },
    [SET_LANGUAGE]: (state, payload) => {
      return state
    },
    [GAME_PLAYED]: (state, payload) => {
      return clone(state, payload)
    },
    [UPDATE_PROFILE]: (state, payload) => {
      return clone(state, payload)
    },
    [OPEN_USER_MENU]: (state, payload) => {
      return clone(state, {isMenuCollapsed: true})
    },
    [CLOSE_USER_MENU]: (state, payload) => {
      return clone(state, {isMenuCollapsed: false})
    },
    [SELL_DROPS]: (state, payload) => {
      return clone(state, {isBalanceUpdated: true})
    }
  }
)
