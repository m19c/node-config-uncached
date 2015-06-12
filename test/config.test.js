var configUncached = require('../'),
    assert         = require('chai').assert;

describe('config-uncached', function () {
  'use strict';

  it('returns another `date` after `purge`', function (done) {
    var date, changedDate;

    date = configUncached().date;

    setTimeout(function () {
      changedDate = configUncached(true).date;
      assert.notEqual(changedDate, date);
      done();
    }, 100);
  });
});