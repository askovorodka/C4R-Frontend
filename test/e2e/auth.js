const lib = require('./lib')
const localStorage = require('./lib/localStorage')
const steamAccount = require('./credentials').steam
const stagingHost = 'stage-ng.cases4real.com'

describe('authorization', () => {
  it('app should have login form', async () => {
    await browser.driver.get(browser.baseUrl)
    await localStorage.clear()
    await lib.waitForAppearInDom('button.login-form__item_net_steam')
  })

  it('redirect to steam community', async () => {
    const loginButton = await lib.waitForAppearInDom('button.login-form__item_net_steam')
    await loginButton.click()
    await lib.waitForUrlPart('://steamcommunity.com')
  })

  it('proceed to steam login form', async () => {
    // if site blacklisted
    const proceedButton = await lib.waitForAppearInDom('.blacklist_takeover_continueanyway a')
    await proceedButton.click()
  })

  it('fill steam login form', async () => {
    const loginInput = await lib.waitForAppearInDom('#steamAccountName')
    await loginInput.sendKeys(steamAccount.login)
    const passwordInput = await lib.waitForAppearInDom('#steamPassword')
    await passwordInput.sendKeys(steamAccount.password)
    const loginButton = await lib.waitForAppearInDom('#imageLogin')
    await loginButton.click()
  })

  it('redirect from steam back to app', async () => {
    await lib.waitForUrlPart(`://${stagingHost}`, 25000)
  })

  it('User should be authorized', async () => {
    const isAuthorized = await lib.waitForAppearInDom('.login-form__authorized')
    expect(isAuthorized.isPresent()).toBe(true)
  })

  it('username should be equal to steam name', async () => {
    await lib.waitForAppearInDom('.login-form__authorized')
    expect(element(by.css('.login-form__authorized .User-name')).getText())
      .toEqual(steamAccount.userName)
  })

  it('auth token should be set', async () => {
    const token = await localStorage.getValue('token')
    global.token = token
    expect(token).toEqual(jasmine.any(String))
  })

  it('auth token should be correct jwt with proper unexpired exp field', async () => {
    const token = await localStorage.getValue('token')
    expect(validateToken(token)).toEqual(null)
  })
})

function validateToken (token) {
  try {
    const jwt = token.split('.')[1]
    const jwtDecoded = JSON.parse(Buffer.from(jwt, 'base64').toString())
    const currentTime = new Date().getTime() / 1000

    if (typeof jwtDecoded.exp !== 'number') {
      return new Error('JWT exp property should be a number, got type', typeof jwtDecoded.exp)
    }

    if (currentTime > jwtDecoded.exp) {
      return new Error('token already expired')
    }
  } catch (e) {
    throw new Error('cannot parse JWT token ' + token + e.message)
  }
  return null
}
