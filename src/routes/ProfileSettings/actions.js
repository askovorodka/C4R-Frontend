import {
  CLOSE_USER_MENU,
  LOGOUT,
  OPEN_USER_MENU,
  SELL_DROPS,
  SET_AVATAR_IMAGE,
  SET_PROFILE,
  TAKE_DROPS,
  UPDATE_PROFILE
} from './constants'
import { api } from 'src/lib/api'
import * as lib from './lib'

export const login = authProvider => dispatch => () => {
  lib.getAuthToken(authProvider)
}

export const linkUserAccount = (authProvider) => dispatch => async () => {
  const backUrl = window.location.pathname
  try {
    const res = await api.linkUserAccounts(authProvider, backUrl)
    window.location.href = res.redirect_url
    toastr.success('ok', 'steam is set', toastrOptions)
  } catch (error) {
    toastr.error('error', res.message, toastrOptions)
  }
}

export const setAuthToken = token => async dispatch => {
  const res = await lib.setAuth(token)
  dispatch({
    type: SET_PROFILE,
    payload: {user: res}
  })
  return res
}

/**
 * function for epic, action: UPDATE_PROFILE
 */
export const updateProfile = () => async dispatch => {
  const res = await lib.getProfileShort()
  return dispatch({
    type: UPDATE_PROFILE,
    payload: {user: res}
  })
}

export const logout = () => async dispatch => {
  await lib.clearAuth()
  dispatch({
    type: LOGOUT,
    payload: {}
  })
}

export const getInventory = (userId, page, limit, filter) => async dispatch => {
  return api.getInventory(userId, page, limit, filter)
}

export const setAvatar = avatarBase64Image => async dispatch => {
  const res = await api.setAvatar(avatarBase64Image)
  dispatch({
    type: SET_AVATAR_IMAGE,
    payload: res.image
  })
}

export const sellDrops = dropIds => async dispatch => {
  await api.sellDrops(dropIds)
  dispatch({
    type: SELL_DROPS,
    payload: {user: {}}
  })
}

export const showUserMenu = () => dispatch => {
  dispatch({
    type: OPEN_USER_MENU,
    payload: {}
  })
}

export const hideUserMenu = () => dispatch => {
  dispatch({
    type: CLOSE_USER_MENU,
    payload: {}
  })
}

export const takeDrops = dropIds => async dispatch => {
  await api.takeDrops(dropIds)
  dispatch({
    type: TAKE_DROPS,
    payload: {user: {}}
  })
}
