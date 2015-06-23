var Code = require('code');
var Lab = require('lab');
var server = require('../lib/index.js');

var lab = exports.lab = Lab.script();

var describe = lab.describe;
var it = lab.it;
var before = lab.before;
var after = lab.after;
var expect = Code.expect;


describe('Server', function () {

	it('should get the api version', function (done) {

		server.inject('/version', function(response) {

			expect(response.statusCode).to.equal(200);
			expect(response.result.version).to.equal('0.0.1');
			done();
		});
	});
});
