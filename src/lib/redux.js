import merge from 'deepmerge'

// simplify reducer syntax
export function createReducer (initialState, reducerMap) {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type]

    return reducer
      ? reducer(state, action.payload)
      : state
  }
}

// deep copy of objects /w prototypes
export function clone (...objects) {
  return merge.all(objects)
}
