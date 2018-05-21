import Cookies from 'universal-cookie'
import uuidv4 from 'uuid/v4'
import { api } from 'src/lib/api'

/**
 * Generates ClientId if needed and tracks user visit.
 * @param store
 * @returns {function(*): function(*)}
 */
const trackVisitMiddleware = store => next => action => {
  if (action.type !== 'ROUTER/LOCATION_CHANGE') {
    return next(action)
  }

  const cookies = new Cookies()
  let clientId = cookies.get('c4r_client_id')
  if (!clientId) {
    let expires = new Date()
    expires.setDate(expires.getDate() + 365)
    clientId = uuidv4()
    cookies.set('c4r_client_id', clientId, {path: '/', expires})
  }

  api.trackVisit(clientId)

  return next(action)
}

export default trackVisitMiddleware
