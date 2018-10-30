// This file is part of Pa11y Dashboard.
//
// Pa11y Dashboard is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Pa11y Dashboard is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Pa11y Dashboard.  If not, see <http://www.gnu.org/licenses/>.

// jscs:disable maximumLineLength, requireArrowFunctions
'use strict';

const assert = require('proclaim');

describe('GET /export', function() {

	beforeEach(function(done) {
		const request = {
			method: 'GET',
			endpoint: '/export'
		};
		this.navigate(request, done);
	});

	it('should send a 200 status', function() {
		assert.strictEqual(this.last.status, 200);
	});

	it('should have content-disposition header', function() {
		assert.strictEqual(this.last.response.headers['content-disposition'], 'attachment; filename=configuartion.json');
	});

	it('should be a json array', function() {
		assert.isArray(JSON.parse(this.last.response.body));
	});
});
