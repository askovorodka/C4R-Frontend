/** es-lint global browser jasmine */

exports.config = {
  specs: ['test/e2e/*.js'],
  exclude: ['test/e2e/lib/*.js'],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--disable-extensions', '--start-maximized']
    }
  },
  baseUrl: 'http://localhost:8080',
  framework: 'jasmine',
  onPrepare: function () {
    browser.ignoreSynchronization = true

    const SpecReporter = require('jasmine-spec-reporter').SpecReporter
    jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: false}))
  },
  stackTrace: false,
  jasmineNodeOpts: {
    // If true, display spec names.
    isVerbose: false,

    // Use colors in the command line report.
    showColors: true,

    // If true, include stack traces in failures.
    includeStackTrace: false,

    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 60000,

    // If true, print timestamps for failures
    showTiming: true,

    // Print failures in real time.
    realtimeFailure: true
  }
}
