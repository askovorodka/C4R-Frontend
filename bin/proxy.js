#!/usr/bin/env node

const httpProxy = require('http-proxy')
const proxy = httpProxy.createProxyServer({
  target: {
    host: 'stage-ng-api.cases4real.com',
    // host: 'localhost',
    port: 80
  }
})

const allowedHeaders = ['content-type', 'x-auth', 'x-locale', 'x-currency']
proxy.on('proxyRes', function (proxyRes, req, res, options) {
  proxyRes.headers['access-control-allow-origin'] = '*'
  proxyRes.headers['access-control-allow-headers'] = allowedHeaders.join(',')
})

const PROXY_PORT = 7007
proxy.listen(PROXY_PORT)
console.log('API proxy listening on port %d', PROXY_PORT)
