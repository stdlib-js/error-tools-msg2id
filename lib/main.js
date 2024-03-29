/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var database = require( '@stdlib/error-tools-database' );
var inverse = require( '@stdlib/utils-object-inverse' );
var format = require( '@stdlib/string-format' );


// VARIABLES //

var db;


// MAIN //

/**
* Returns a two-character error identifier corresponding to a provided error message.
*
* @param {string} msg - error message
* @throws {TypeError} must provide a string
* @returns {(string|null)} two-character error identifier
*
* @example
* var v = msg2id( 'invalid option. `%s` option must be an array. Option: `%s`.' );
* // returns 'GX'
*/
function msg2id( msg ) {
	if ( !isString( msg ) ) {
		throw new TypeError( format( 'invalid argument. Must provide a string. Value: `%s`.', msg ) );
	}
	if ( !db ) {
		db = inverse( database(), {
			'duplicates': false
		});
	}
	if ( hasOwnProp( db, msg ) ) {
		return db[ msg ];
	}
	return null;
}


// EXPORTS //

module.exports = msg2id;
