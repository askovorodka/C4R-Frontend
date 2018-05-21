import { api } from 'src/lib/api'
import { init as initI18n } from 'components/Language/actions'
import { initProfile } from 'src/routes/ProfileSettings/lib'

const storeLoader = (state) => {
  return new Promise(resolve => {
    Promise.all([
      new Promise(resolve => {
        initI18n().then(i18n => resolve({i18n}))
      }),
      new Promise(resolve => {
        api.getDictionaries().then(dictionaries => resolve({dictionaries}))
      }),
      new Promise(resolve => {
        api.getLivedrop().then(livedrop => resolve({livedrop}))
      }),
      new Promise(resolve => {
        initProfile().then(user => resolve({'profile': {user}}))
      })
    ]).then(resolve)
  }).then(values => {
    let loadedStore = state

    Object.keys(values).forEach(key => {
      loadedStore = Object.assign(loadedStore, values[key])
    })

    let pathname = window.location.pathname
    loadedStore = Object.assign(loadedStore, {router: {path: pathname}})

    loadedStore = {...loadedStore, router: {pathname: pathname}}

    return loadedStore
  })
}

export default storeLoader
