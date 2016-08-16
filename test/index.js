const test = require('ava')
const writeSnapshot = require('../')
const fs = require('fs-promise')
const sinon = require('sinon')
const proxyquire = require('proxyquire')

test('Should take a snapshot', t => {
  return writeSnapshot()
    .then(path => fs.exists(path))
    .then(exists => t.is(exists, true))
})

test('Should override path for taking snapshot', t => {
  const path = './test.' + Date.now() + '.heapsnapshot'
  return writeSnapshot(path)
    .then(() => fs.exists(path))
    .then(exists => t.is(exists, true))
})

test('Should handle errors', t => {
  return proxyquire('../', {
    'heapdump': {
      writeSnapshot: sinon.stub().callsArgWith(0, new Error('Urk!'))
    }
  })()
    .catch(() => t.pass())
})
