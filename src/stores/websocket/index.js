'use strict'
import events from './events.js'
import Socket from 'socket.io-client'
import config from 'src/lib/config'

const ws = new Socket(config.host.apiWsUrl, {
  query: {rooms: '/'},
  transports: ['websocket']
})

const websocket = store => {
  // set listeners for ws events
  Object.keys(events).forEach(key => {
    ws.on(key, onMessage(store.dispatch, store.getState))
  })
}

const onMessage = (dispatch, getState) => (event, data) => {
  if (events[event]) {
    dispatch({type: events[event], payload: data})
  } else {
    console.debug('unrecognized event', event, data)
  }
}

export default websocket
