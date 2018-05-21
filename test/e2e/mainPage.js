const lib = require('./lib')

describe('main page', () => {
  beforeAll(() => {
    browser.driver.get(browser.baseUrl)
  })

  it('should have a login form', () => {
    lib.waitForAppearInDom('.login-form').then(e => {
      expect(e.isPresent()).toBe(true)
    })
  })

  it('should have a carousel', () => {
    lib.waitForAppearInDom('.carousel').then(e => {
      expect(e.isPresent()).toBe(true)
    })
  })

  it('should have a Language switcher', () => {
    lib.waitForAppearInDom('.Language-switcher').then(e => {
      expect(e.isPresent()).toBe(true)
    })
  })

  it('should have case categories', () => {
    lib.waitForAppearInDom('.Box-category-list').then(e => {
      expect(e.isPresent()).toBe(true)
    })
  })

  it('should have a ticker', () => {
    lib.waitForAppearInDom('.ticker').then(e => {
      expect(e.isPresent()).toBe(true)
    })
  })

  it('should have a live-drop', () => {
    lib.waitForAppearInDom('.live-drop').then(e => {
      expect(e.isPresent()).toBe(true)
    })
  })
})
