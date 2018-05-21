'use strict'
import { toastr } from 'react-redux-toastr'
import config from 'src/lib/config'

const apiUrl = config.host.apiUrl
const headers = new window.Headers()

headers.set('Content-Type', 'application/json')
// headers.set('Cache-control', 'no-cache')

export async function http (uri, data, method = 'get') {
  const options = {
    method,
    headers
  }

  if (data !== undefined) {
    options.body = JSON.stringify(data)
  }

  let response
  let result = {}

  try {
    response = await window.fetch(`${apiUrl}/${uri}`, options)
    result = await response.json()
  } catch (err) {
    console.error(err)
    toastr.error('should be JSON response', '' + err)
  }

  // todo handle 401
  if (response.status === 401) {
    console.error('unauthorized: token is expired')
  }

  return result
}

export function setAuthTokenHeader (token) {
  setHeader('x-auth', token)
}

export function setLanguageHeader (language) {
  setHeader('x-locale', language)
}

export function setCurrencyHeader (currency) {
  setHeader('x-currency', currency)
}

export function setHeader (headerName, headerValue) {
  headers.set(headerName, headerValue)
}

export function getHeader (headerName) {
  return headers.get(headerName)
}

export function deleteHeader (headerName) {
  headers.delete(headerName)
}

export function redirectPost (url, data) {
  const form = window.document.createElement('form')
  form.method = 'post'
  form.action = url
  for (let name in data) {
    if (data.hasOwnProperty(name)) {
      const input = window.document.createElement('input')
      input.type = 'hidden'
      input.name = name
      input.value = data[name]
      form.appendChild(input)
    }
  }
  form.submit()
}

export function serializeGetParams (paramsObject) {
  let str = Object.keys(paramsObject).map(
    (key) => paramsObject[key] ? key + '=' + paramsObject[key] : ''
  ).filter(key => key).join('&')

  if (str) {
    str = '?' + str
  }

  return str
}
