import { combineReducers } from 'redux'
import { reducer as toastr } from 'react-redux-toastr'
import * as asyncInitialState from 'redux-async-initial-state'
import profile from 'src/routes/ProfileSettings/reducers'
import i18n from 'src/components/Language/reducers'
import config from 'src/lib/config'
import livedrop from 'src/components/LiveDrop/reducers'
import chargedInfo from 'src/routes/Home/reducer'
import { default as payments } from 'src/components/Payments/reducer'
import { default as login } from 'src/components/LoginForm/reducer'
import { default as rank} from 'src/components/Rank/reducer'
import { routerReducer } from 'redux-first-routing'

const reducers = {
  dictionaries: (state = {}) => state,
  config,
  profile,
  livedrop,
  toastr,
  i18n,
  payments,
  login,
  rank,
  chargedInfo
}

export default asyncInitialState.outerReducer(
  combineReducers({
    ...reducers,
    router: routerReducer,
    asyncInitialState: asyncInitialState.innerReducer
  })
)
