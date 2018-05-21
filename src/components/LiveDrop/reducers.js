import { EVENT_NEW_DROP } from 'src/stores/websocket/types'

import { createReducer } from 'src/lib/redux'

const initialState = []

export default createReducer(initialState,
  {
    [EVENT_NEW_DROP]: (state = [], payload) => {
      const livedrop = state.map(s => s)
      livedrop.push({loot: {image_url: payload.uri, name: payload.title.en}})

      // todo
      if (livedrop.length > 10) {
        livedrop.shift()
      }
      return livedrop
    }
  }
)
