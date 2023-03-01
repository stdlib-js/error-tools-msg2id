<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# msg2id

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return a two-character error identifier corresponding to a provided error message.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import msg2id from 'https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-msg2id@esm/index.mjs';
```

#### msg2id( msg )

Returns a two-character error identifier corresponding to a provided error message.

```javascript
var v = msg2id( 'invalid value. `%s` must be a number. Value: `%s`.' );
// e.g., returns '6d'
```

If provided an unrecognized error message, the function returns `null`.

```javascript
var v = msg2id( 'beep boop baz' );
// returns null
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import msg2id from 'https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-msg2id@esm/index.mjs';

var list;
var v;
var i;

list = [
    'invalid argument. First argument must be a number and not `NaN`. Value: `%s`.',
    'invalid argument. First argument must be a positive integer. Value: `%s`.'
];

for ( i = 0; i < list.length; i++ ) {
    v = list[ i ];
    console.log( 'msg: "%s". id: "%s".', v, msg2id( v ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->



<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- <license> -->

<!-- </license> -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/error-tools-msg2id.svg
[npm-url]: https://npmjs.org/package/@stdlib/error-tools-msg2id

[test-image]: https://github.com/stdlib-js/error-tools-msg2id/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/error-tools-msg2id/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/error-tools-msg2id/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/error-tools-msg2id?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/error-tools-msg2id.svg
[dependencies-url]: https://david-dm.org/stdlib-js/error-tools-msg2id/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/error-tools-msg2id#cli
[cli-url]: https://github.com/stdlib-js/error-tools-msg2id/tree/cli
[@stdlib/error-tools-msg2id]: https://github.com/stdlib-js/error-tools-msg2id/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/error-tools-msg2id/tree/deno
[umd-url]: https://github.com/stdlib-js/error-tools-msg2id/tree/umd
[esm-url]: https://github.com/stdlib-js/error-tools-msg2id/tree/esm
[branches-url]: https://github.com/stdlib-js/error-tools-msg2id/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/error-tools-msg2id/main/LICENSE

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
