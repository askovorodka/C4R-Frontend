import 'rxjs'
import { updateProfile } from 'src/routes/ProfileSettings/actions'

export const balanceEpic = (action$, store) =>
  action$.ofType('GAME_PLAYED')
    .map(() => updateProfile())
