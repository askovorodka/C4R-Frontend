import { GET_CHARGED } from './types'
import { clone, createReducer } from 'src/lib/redux'

const initialState = {
  dailyVisit: {
    currentScores: 0,
    levelNumber: 0
  },
  loseDrop: {
    currentScores: 0,
    levelNumber: 0
  },
  jokerDrop: {
    currentScores: 0,
    levelNumber: 0
  }
}

export default createReducer(initialState,
  {
    [GET_CHARGED]: (state, payload) => {
      return clone(state, payload)
    }
  }
)
