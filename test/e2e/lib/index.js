const timeoutDefault = 5000

function waitForAppearInDom (cssSelector, timeout = timeoutDefault) {
  return browser.wait(protractor.ExpectedConditions.presenceOf(element(by.css(cssSelector))),
    timeout, `${cssSelector} taking more than ${timeout}ms to appear in the DOM`).then(r => {
      return element(by.css(cssSelector))
    })
}

function waitForUrlPart (urlPart, timeout = timeoutDefault) {
  const urlChanged = url => () => browser.getCurrentUrl()
    .then(actualUrl => {
      return !!~actualUrl.indexOf(url)
    })

  return browser.wait(urlChanged(urlPart),
    timeout, `${urlPart} is not in found in current URL for ${timeout}ms`)
}

module.exports = {
  waitForAppearInDom,
  waitForUrlPart
}
