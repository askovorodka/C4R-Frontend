import 'rxjs'
import { combineEpics } from 'redux-observable'
import { updateProfile } from 'src/routes/ProfileSettings/actions'

// @todo разнести в разные файлы, когда станет больше (сейчас оставил для наглядности)
const gamePlayedEpic = (action$) =>
  action$.ofType('GAME_PLAYED')
    .map(() => updateProfile())

const sellDropEpic = (action$) =>
  action$.ofType('SELL_DROPS')
    .map(() => updateProfile())

const epicLoader = combineEpics(
  gamePlayedEpic,
  sellDropEpic
)

export default epicLoader
