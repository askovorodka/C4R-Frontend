'use strict'
// import AsyncStorage from '@callstack/async-storage';
// https://github.com/callstack-io/async-storage

export const storage = {
  setItem (key, value) {
    return new Promise((resolve, reject) => {
      window.localStorage.setItem(key, value)
      resolve()
    })
  },

  async getItem (key) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return value
    } else {
      return false
    }
  }
}
