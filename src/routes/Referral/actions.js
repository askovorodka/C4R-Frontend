import {api} from 'src/lib/api'

export const getReferralReg = () => async dispatch => {
  return api.getReferralReg()
}

export const getReferralDeposit = () => async dispatch => {
  return api.getReferralDeposit()
}

export const getReferralReward = () => async dispatch => {
  return api.getReferralReward()
}
