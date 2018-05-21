import { api } from 'src/lib/api'
import { isTradeUrlValid } from '../../lib/steam'
import { toastr } from 'react-redux-toastr'

const toastrOptions = {
  timeOut: 3000,
  position: 'top-center',
  transitionIn: 'fadeIn',
  transitionOut: 'fadeOut'
}

export const setTradeUrl = (tradeUrl) => dispatch => saveTradeUrl(tradeUrl)

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

async function saveTradeUrl (tradeUrl) {
  if (isTradeUrlValid(tradeUrl) !== true) {
    toastr.error('error', 'trade url is invalid', toastrOptions)
    return false
  }

  await api.setTradeUrl(tradeUrl)
  toastr.success('ok', 'trade url is set', toastrOptions)
  return true
}
