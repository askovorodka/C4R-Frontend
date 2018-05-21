import { api } from 'src/lib/api'

export const getDropHistory = (userId, limit, offset, filter) => dispatch => {
  return api.getDropHistory(userId, limit, offset, filter).then(res => {
    return res
  })
}
