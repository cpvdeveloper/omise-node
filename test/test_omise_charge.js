var chai   = require('chai');
var expect = chai.expect;
var should = chai.should();

var config = require('./config.js');
var omise  = require('../index')(config);
var testHelper = require('./testHelper');

describe('Omise', function() {
  describe('#charges', function() {
    it('should be able to create a charge', function(done) {
      testHelper.setupMock('charges_create');
      var charge = { 'description': 'Charge for order 3947',
                     'amount': '100000',
                     'currency': 'thb',
                     'card': 'token_id'
      };
      omise.charges.create(charge, function(err, resp) {
        expect(resp.object, 'charge');
        var chargeId = resp.id;
        chargeId.should.be.equal('chrg_test_4z429hvnv7ouolu6kmp');
        expect(resp.capture).be.true;
        expect(resp.captured).be.true;
        done();
      });
    })
  })
})
