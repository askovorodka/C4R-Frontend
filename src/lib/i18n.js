import i18n from 'i18next'
import XHR from 'i18next-xhr-backend'
import { setCurrencyHeader, setLanguageHeader } from 'src/lib/http'
import LanguageDetector from 'i18next-browser-languagedetector'
import config from 'src/lib/config'

const languagesAvaliable = config.i18n.languages

// todo to async - load setted locale from storage
export default i18n
    .use(XHR)
    .use(LanguageDetector)
    .init({
      // lng: 'en',
      fallbackLng: 'ru',
      ns: ['common', 'boxes'],
      defaultNS: 'common',
      backend: {
        loadPath: '/assets/langs/{{lng}}/{{ns}}.json'
      },
      wait: true, // globally set to wait for loaded translations in translate hoc
      debug: false, // config.isDev,
      interpolation: {
        formatSeparator: ',',
        format: function (value, format, lng) {
          if (format === 'uppercase') return value.toUpperCase()
          return value
        }
      }
    })

export async function changeLanguage (lang) {
  const res = await new Promise((resolve, reject) => {
    i18n.changeLanguage(lang, (err, t) => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
  initHeaders(lang)

  return res
}

function initHeaders (lang) {
  if (isLanguageExist(lang) === false) {
    return false
  }

  const currency = getPreferredLanguageCurrency(lang)

  setLanguageHeader(lang)
  setCurrencyHeader(currency)
}

export function isLanguageExist (lang) {
  return languagesAvaliable.filter(l => l.id === lang).length !== 0
}

export function getPreferredLanguageCurrency (lang) {
  return languagesAvaliable.filter(l => lang === l.id)[0].defaultCurrency
}
