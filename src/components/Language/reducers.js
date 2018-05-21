import { SET_LANGUAGE } from './types'

import { clone, createReducer } from 'src/lib/redux'

const initialState = {}

export default createReducer(initialState,
  {
    [SET_LANGUAGE]: (state, payload) => {
      return clone(state, payload)
    }
  }
)
