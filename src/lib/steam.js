const STEAM_CDN_URL = 'http://steamcommunity-a.akamaihd.net/economy/image/'
const TRADE_URL_REGEX = /^(https?|http):\/\/steamcommunity.com\/tradeoffer\/new\/\?partner=([0-9]+)&token=([A-Za-z0-9_-]{8})/

// до 512х384
export function getSteamItemImageUrl (image = '', width = 200, height = 200) {
  // todo isPathAbsolute
  return `${~image.indexOf('://') ? '' : STEAM_CDN_URL}${image}/${width}fx${height}`
}

export function isTradeUrlValid (tradeUrl) {
  return TRADE_URL_REGEX.test(tradeUrl)
}

export function whereToGetMyTradeUrl () {
  return 'http://steamcommunity.com/id/me/tradeoffers/privacy#trade_offer_access_url'
}

const FACTORY_NEW = 'FN'
const MINIMAL_WEAR = 'MW'
const FIELD_TESTED = 'FT'
const WELL_WORN = 'WW'
const BATTLED_SCARRED = 'BS'

export const skinsQualityList = {
  FACTORY_NEW,
  MINIMAL_WEAR,
  FIELD_TESTED,
  WELL_WORN,
  BATTLED_SCARRED
}

export function getQualityKeyByValue (value) {
  return Object.keys(skinsQualityList).filter((key) => skinsQualityList[key] === value)[0]
}
/*
 Шкала качества скинов
 закаленный в боях (Battle-Scarred)
 поношенный (Well-Worn)
 полевые испытания (Field-Tested)
 минимальный износ (Minimal Wear)
 прямиком из завода (Factory new)

 Шкала редкости скинов
 Белое (Частое) — Consumer grade (Потребительская серия) q0
 Голубое (Нечастое) — Industrial grade (Промышленный серия) q1
 Синее (Редкое) — Mil-spec (Военная серия) q2
 Фиолетовое (Мифическое) — Restricted (Ограниченная серия) q3
 Розовое (Легендарное) — Classified (Засекреченная серия) q4
 Красное (Древнее) — Covert (Тайная серия) q5
 Золотое (Чрезвычайно редкое) — ★ q6
 */
