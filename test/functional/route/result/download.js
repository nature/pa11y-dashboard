// This file is part of pa11y-dashboard.
// 
// pa11y-dashboard is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// pa11y-dashboard is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with pa11y-dashboard.  If not, see <http://www.gnu.org/licenses/>.

/* global beforeEach, describe, it */
/* jshint maxlen: false, maxstatements: false */
'use strict';

var assert = require('proclaim');

describe('GET /<task-id>/<result-id>.csv', function () {

	beforeEach(function (done) {
		var req = {
			method: 'GET',
			endpoint: '/abc000000000000000000001/def000000000000000000001.csv',
			nonDom: true
		};
		this.navigate(req, done);
	});

	it('should send a 200 status', function () {
		assert.strictEqual(this.last.status, 200);
	});

	it('should output CSV results', function () {
		assert.match(this.last.body, /^"code","message","type"/);
	});

});

describe('GET /<task-id>/<result-id>.json', function () {

	beforeEach(function (done) {
		var req = {
			method: 'GET',
			endpoint: '/abc000000000000000000001/def000000000000000000001.json',
			nonDom: true
		};
		this.navigate(req, done);
	});

	it('should send a 200 status', function () {
		assert.strictEqual(this.last.status, 200);
	});

	it('should output JSON results', function () {
		var json = this.last.body;
		assert.strictEqual(json.task.name, 'NPG Home');
		assert.strictEqual(json.task.url, 'nature.com');
		assert.strictEqual(json.count.error, 1);
		assert.strictEqual(json.count.warning, 2);
		assert.strictEqual(json.count.notice, 3);
		assert.isArray(json.results);
	});

});
