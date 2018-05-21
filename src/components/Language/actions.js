'use strict'
import { storage } from 'src/lib/storage'
import { SET_LANGUAGE } from './types'
import * as i18n from 'src/lib/i18n'
import config from 'src/lib/config'

const preferredLanguage = config.i18n.preferredLanguage
const languagesAvaliable = config.i18n.languages

export const changeLanguage = lang => dispatch => {
  // todo save lang to server

  setLanguage(lang).then(dictionary => {
    dispatch({
      type: SET_LANGUAGE,
      payload: {dictionary: dictionary, currentLanguage: lang}
    })
  })
}

// set inital redux state
export async function init () {
  const lang = await initLanguage()

  await setLanguage(lang)
  return {
    currentLanguage: lang,
    languages: languagesAvaliable
  }
}

// detect client Language
export async function initLanguage () {
  let lang = await storage.getItem('language')

  // remove if lang corrupted
  if (i18n.isLanguageExist(lang) === false) {
    lang = false
  }

  if (!lang) {
    // todo detect Language

    // fallback
    lang = preferredLanguage
    await storage.setItem('language', lang)
  }
  return lang
}

export async function setLanguage (lang) {
  if (i18n.isLanguageExist(lang) === false) {
    return false
  }

  await i18n.changeLanguage(lang)

  await storage.setItem('language', lang)
}
