'use strict'

const path = require('path')
const root = path.resolve(__dirname, '..')

let config = {
  'isDev': true,
  'build': 0,
  'gitCommitSha': 'will be received',
  'autoUpdateVersion': {
    'isEnabled': true,
    'checkUpdateInterval': 10000
  },
  'version': '1.0.0',
  'versionNode': 'will be detected',
  'app': 'web',
  'host': {
    'frontendHost': 'localhost:80',
    'name': 'stage-ng-api.cases4real.com',
    'ssl': false,
    'apiUrl': 'will be generated',
    'apiWsUrl': 'wss://live.cases4real.com'
  },
  'dev': {
    '_': 'will be removed in production mode',
    'port': 8080
  },
  'authServices': [
    {
      'name': 'fb',
      'link': 'facebook'
    },
    {
      'name': 'vk',
      'link': 'vkontakte'
    },
    {
      'name': 'steam',
      'link': 'steam'
    }
  ],
  'socialButtons': [
    {
      link: 'https://www.facebook.com/cases4real/',
      icon: '/assets/images/social-buttons/facebook.png'
    },
    {
      link: 'https://vk.com/csgo_cases4real',
      icon: '/assets/images/social-buttons/vkontakte.png'
    },
    {
      link: 'https://www.youtube.com/channel/UCJqePIX-EDhasKlq8_qrwUg',
      icon: '/assets/images/social-buttons/youtube.png'
    },
    {
      link: '',
      icon: '/assets/images/social-buttons/gift.png'
    }
  ],
  'paymentGateways': [
    {
      'id': 'yandex'
    },
    {
      'id': 'g2a'
    },
    {
      'id': 'skins4real'
    }
  ],
  'payments': [
    {
      'id': 'web-money',
      'name': 'Web money',
      'link': ''
    },
    {
      'id': 'qiwi',
      'name': 'Qiwi',
      'link': ''
    },
    {
      'id': 'master-card',
      'name': 'Master card',
      'link': ''
    },
    {
      'id': 'visa',
      'name': 'Visa',
      'link': ''
    },
    {
      'id': 'yandex',
      'name': 'Yandex',
      'link': 'yandex'
    },
    {
      'id': 'g2a',
      'name': 'G2A',
      'link': ''
    }
  ],
  'i18n': {
    'languages': [
      {
        'id': 'en',
        'name': 'English',
        'shortName': 'USA',
        'icon': '/assets/images/icons/langs/lang-icon_en.jpg',
        'defaultCurrency': 'USD'
      },
      {
        'id': 'ru',
        'name': 'Русский',
        'shortName': 'RUS',
        'icon': '/assets/images/icons/langs/lang-icon_ru.jpg',
        'defaultCurrency': 'RUB'
      },
      {
        'id': 'pl',
        'name': 'Polski',
        'shortName': 'POL',
        'icon': '/assets/images/icons/langs/lang-icon_pl.jpg',
        'defaultCurrency': 'USD'
      },
      {
        'id': 'pt',
        'name': 'Portuguese',
        'shortName': 'PRT',
        'icon': '/assets/images/icons/langs/lang-icon_pt.jpg',
        'defaultCurrency': 'USD'
      }
    ],
    'currencies': [
      {
        'id': 'RUB',
        'name': 'ruble'
      },
      {
        'id': 'USD',
        'name': 'dollar'
      }
    ],
    'preferredLanguage': 'ru',
    'fallbackLanguage': 'en',
    'fallbackCurrency': 'USD'
  },
  'sound': {
    'isEnabled': false,
    'volume': 1,
    'settings': {},
    'sounds': {}
  },
  'log': {
    'level': 'info'
  },
  'games': {
    'classicGame': {},
    'monsterGame': {}
  },
  'metrics': {},
  'cache': {},
  'socialSharing': {},
  'serverRendering': {},
  'static': {
    'webmasterEmail': 'chief.support@cases4real.com'
  },
  'ticker': {
    'speed': 1000,
    'delay': 5000
  },
  'launcher': {
    'carousel': {
      'speed': 1000,
      'delay': 5000
    },
    'nav': {
      'navItems': [
        'news',
        'important',
        'offers'
      ]
    },
    'news': {
      'maxNewsLength': 270
    },
    'important': {
      'speed': 1000,
      'delay': 5000
    }
  },
  'liveDrop': {
    'tabsItems': [
      'RECENT_DROPS',
      'TOP_DROPS',
      'REVIEWS'
    ]
  }
}

// protocol
config.host.apiUrl = `${(config.host.ssl ? 'https' : 'http')}://${config.host.name}`
config.host.redirectUrl = config.host.apiUrl
config.host.apiUrl = 'http://stage-ng-api.cases4real.com'
config.centrifugo = {
  url: 'http://stage-ng-api.cases4real.com:8000/connection/websocket',
  insecure: true
}

if (process.env.NODE_ENV !== 'production') {
  config.host.apiUrl = 'http://localhost:7007'
  // config.centrifugo.url = 'http://localhost:8000/connection'
}

// config.version = require(`${root}/package.json`).version
// config.versionNode = process.version
module.exports = config
