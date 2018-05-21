import { api } from 'src/lib/api'
import { storage } from 'src/lib/storage'
import { setAuthTokenHeader } from 'src/lib/http'
import { isTradeUrlValid } from 'src/lib/steam'
import { toastr } from 'react-redux-toastr'
import { withCookies, Cookies } from 'react-cookie'

// todo move to http client
const AUTH_TOKEN_KEY = 'token'
const REFERRAL_TOKEN_KEY = 'referral'

// this abstraction layer is required in box of using non web platform
export async function getAuthToken (authProvider) {
  try {
    const cookies = new Cookies()
    const res = await api.auth(authProvider)
    if (typeof res.ref_code === 'string') {
      // а это работает?
      cookies.set('ref_code', res.ref_code, {path: '/'})
    }
    window.location.href = res.redirect_url
  } catch (error) {
    console.log(error.toString())
  }
}

// set new auth token
export async function setAuth (authToken) {
  await storage.setItem(AUTH_TOKEN_KEY, authToken)
  setAuthTokenHeader(authToken)
  return api.getProfileFull()
}

// logout
export async function clearAuth () {
  await storage.setItem(AUTH_TOKEN_KEY, '')
  setAuthTokenHeader('')
}

// on app load
export async function initProfile () {
  const token = await storage.getItem(AUTH_TOKEN_KEY)
  if (isAuthTokenValid(token) !== true) {
    await storage.setItem(AUTH_TOKEN_KEY, '')
    return false
  }
  setAuthTokenHeader(token)
  return api.getProfileFull()
}

export async function getProfileShort () {
  return api.getProfile()
}

export function isAuthTokenValid (token) {
  if (!token) {
    return false
  }

  try {
    const jwt = token.split('.')[1]
    const jwtDecoded = JSON.parse(window.atob(jwt))
    const currentTime = new Date().getTime() / 1000

    if (typeof jwtDecoded.exp !== 'number') {
      console.error('JWT exp property should be a number, got type', typeof jwtDecoded.exp)
      return false
    }

    if (currentTime > jwtDecoded.exp) {
      return false
    }
  } catch (e) {
    console.error('cannot parse JWT token')
    return false
  }

  return true
}
