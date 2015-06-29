'use strict'

var test = require('tape')
var randomInt = require('random-int')
var latest = require('./')

test('xtend', function (t) {
  t.plan(1)
  latest('xtend', function (err, version) {
    if (err) return t.end(err)
    t.equal(version, '4.0.0')
  })
})

test('does not exist', function (t) {
  t.plan(2)
  var name = 'xtend-' + randomInt(1000)
  latest(name, function (err) {
    t.ok(err)
    t.equal(err.message, name + ' was not found on the npm registry')
  })
})

test('arg checking', function (t) {
  t.throws(latest, 'name required')
  t.throws(latest.bind(null, {}), 'callback required')
  t.end()
})
