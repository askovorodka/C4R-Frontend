/* global location */

import { createReduxStore } from './stores'
import router from './router'
import ReactDOM from 'react-dom'
import { CookiesProvider } from 'react-cookie'

import 'styles/index.scss'
import { App } from './app'
import i18n from './lib/i18n'
import { Provider } from 'react-redux'
import { I18nextProvider } from 'react-i18next'
import { CentProvider } from 'react-cent'
import config from 'src/lib/config'

const context = {}
const store = createReduxStore({})

async function render (pathname) {
  const route = await router.resolve(pathname)

  ReactDOM.render(
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <CookiesProvider>
          <CentProvider config={config.centrifugo}>
            <App context={context}>{route.component}</App>
          </CentProvider>
        </CookiesProvider>
      </Provider>
    </I18nextProvider>,
    document.getElementById('app')
  )
}

render(location.pathname)

// Get the current pathname
let currentLocation = store.getState().router.pathname

// Subscribe to the store location
const unsubscribe = store.subscribe(() => {
  const previousLocation = currentLocation
  currentLocation = store.getState().router.pathname

  if (previousLocation !== currentLocation) {
    console.log('Some deep nested property changed from', previousLocation, 'to', currentLocation)
    render(currentLocation)
  }
})
