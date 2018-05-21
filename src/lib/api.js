import { http, redirectPost, serializeGetParams } from 'src/lib/http'

const defaultPageLimit = 50
const pagination = true

export const api = {
  async auth (authProvider) {
    return http(`login/${authProvider}` + location.search)
  },

  linkUserAccounts (serviceName, backUrl) {
    return http('v1/login-add', {service: serviceName, callback_url: backUrl},
      'post')
  },

  getAuthToken (token) {
    return http(`v1/token/${token}`)
  },

// short User info
  getProfile () {
    return http('v1/user/card')
  },

// full User info
  getProfileFull () {
    return http('v1/user/profile')
  },

  getAnyProfile (userId, page = 1, limit = 100) {
    return http(`v1/profile/${userId}?page=${page}&limit=${limit}`)
  },

  setTradeUrl (tradeUrl) {
    return http('v1/user/trade_url', {trade_url: tradeUrl}, 'post')
  },

  setAvatar (avatarBase64Image) {
    return http('v1/user/avatar', {image: avatarBase64Image}, 'post')
  },

  requestEmailConfirmationCode (email) {
    return http('v1/user/email', {email: email}, 'put')
  },

  setEmail (email, confirmationCode) {
    return http('v1/user/email', {email: email, code: confirmationCode}, 'put')
  },

  requestSmsCode (phoneNumber) {
    return http('v1/user/phone', {phone: phoneNumber}, 'put')
  },

  setPhoneNumber (phoneNumber, smsCode) {
    return http('v1/user/phone', {phone: phoneNumber, sms_code: smsCode}, 'put')
  },

  getBoxes () {
    return http('v1/boxes')
  },

  getBoxesCharged () {
    return http(`v1/user/charged`)
  },

  getBox (boxId) {
    return http(`v1/boxes/${boxId}`)
  },

  openBox (boxId, boxOptions) {
    return http(`v1/boxes/${boxId}/order`, boxOptions, 'post')
  },

  getInventory (userId, page = 0, limit = defaultPageLimit, filter = {}) {
    page++
    const f = {}
    if (filter.priceGreater && filter.priceLesser) {
      f['loot.prices.amount[between]'] = `${(filter.priceGreater *
        100)}..${(filter.priceLesser * 100)}`
    } else if (filter.priceGreater) {
      f['loot.prices.amount[gte]'] = filter.priceGreater * 100
    } else if (filter.priceLesser) {
      f['loot.prices.amount[lte]'] = filter.priceLesser * 100
    }

    f['quality'] = filter.quality

    return http(
      `v1/user/${userId}/inventory${serializeGetParams({pagination, limit, page, ...f})}`)
  },

  getReferralReg () {
    return http(`v1/user/transaction_referral_reg`)
  },

  getReferralDeposit () {
    return http(`v1/user/transaction_referral_deposit`)
  },

  getReferralReward () {
    return http(`v1/user/referral_reward`, {}, 'post')
  },

  updateUserSettings (settings) {
    return http('v1/user/settings', settings, 'put')
  },

  getUserNotifications () {
    return http('v1/user/notifications')
  },

  getDepositMethods () {
    return http('')
  },

  makeDeposit () {
    return http('')
  },

  takeDrops (dropIds) {
    return http('v1/drop/take', {drops_ids: dropIds}, 'post')
  },

  sellDrops (dropIds) {
    return http('v1/drop/sell', {drops_ids: dropIds}, 'post')
  },

  sellDropsByTransactionId (transactionId) {
    return http(`v1/drop/sell-all/transactionId`, null, 'post')
  },

  getDropHistory (userId, page = 0, limit = defaultPageLimit, filter = {}) {
    // createdAt[before]
    // createdAt[after]
    page++
    const f = {}
    if (filter.priceGreater && filter.priceLesser) {
      f['amount[between]'] = `${(filter.priceGreater *
        100)}..${(filter.priceLesser * 100)}`
    } else if (filter.priceGreater) {
      f['amount[gte]'] = filter.priceGreater * 100
    } else if (filter.priceLesser) {
      f['amount[lte]'] = filter.priceLesser * 100
    }
    f['createdAt[after]'] = filter['createdAt[after]']
    f['createdAt[before]'] = filter['createdAt[before]']

    f['quality'] = filter.quality
    return http(`v1/user/${userId}/history${serializeGetParams(
      {pagination, limit, page, ...f})}`)
  },

// contact = email|phone
  async addBalance (paymentType, amount, currency, contact, paymentGateway) {
    amount = +amount
    if (isNaN(amount)) {
      return new Error('amount should be a number')
    }

    const res = await http(`v1/payment/${paymentGateway}/start`,
      {
        contact,
        amount,
        currency,
        payment_type: paymentType
      },
      'post')

    if (res.code >= 400) {
      return false
    }

    if (res.method !== 'POST') {
      // send params as get
      // console.log(res.url + serializeGetParams(res.details))
      window.location.href = res.url + serializeGetParams(res.details)
    } else {
      if (paymentGateway === 'stub') {
        await http(`v1/payment/stub/pushback`, res.details, 'post')
      } else {
        // post encoded form data
        redirectPost(res.url, res.details)
      }
    }

    return false
  },

  getDictionaries () {
    return http(`v1/dictionaries`)
  },

  async useCoupon (couponCode) {
    const response = await http('v1/coupon', {code: couponCode}, 'post')
    if (response.code >= 400) {
      const message = response.message ? response.message : 'Fatal error'
      throw new Error(message)
    }

    return response
  },

  getBanner () {
    return http('v1/banners')
  },

  getLivedrop () {
    return http('v1/live-drop')
  },

  getAchievements () {
    return http('v1/user/achievements')
  },

  /**
   * Track user visit on backend.
   * @param clientId UUID for client.
   * @returns {Promise}
   */
  trackVisit (clientId) {
    return http('v1/track/visit', {'client-id': clientId}, 'post')
  },

  /**
   * Submit user feedback.
   * @param text
   * @param transactionId
   * @returns {Promise<*>}
   */
  submitFeedback (text, transactionId) {
    return http('v1/feedback', {text, transactionId}, 'post')
  }
}
