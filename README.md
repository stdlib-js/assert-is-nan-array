<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# isNaNArray

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is an array-like object containing only NaN values.



<section class="usage">

## Usage

```javascript
import isNaNArray from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan-array@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { objects, primitives } from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan-array@esm/index.mjs';
```

#### isNaNArray( value )

Tests if a `value` is an array-like object containing **only** `NaN` values.

```javascript
var bool = isNaNArray( [ NaN, NaN, NaN ] );
// returns true

bool = isNaNArray( [ NaN, 2 ] );
// returns false
```

#### isNaNArray.primitives( value )

Tests if a `value` is an array-like object containing **only** primitive `NaN` values.

<!-- eslint-disable no-new-wrappers -->

```javascript
import Number from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@esm/index.mjs';

var bool = isNaNArray.primitives( [ NaN, NaN, NaN ] );
// returns true

bool = isNaNArray.primitives( [ NaN, new Number( NaN ) ] );
// returns false
```

#### isNaNArray.objects( value )

Tests if a `value` is an array-like object containing **only** object `NaN` values.

<!-- eslint-disable no-new-wrappers -->

```javascript
import Number from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@esm/index.mjs';

var bool = isNaNArray.objects( [ new Number( NaN ), new Number( NaN ) ] );
// returns true

bool = isNaNArray.objects( [ NaN, new Number( NaN ) ] );
// returns false

bool = isNaNArray.objects( [ NaN, NaN, NaN ] );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-new-wrappers -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import Number from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@esm/index.mjs';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';
import isNaNArray from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan-array@esm/index.mjs';

var bool = isNaNArray( [ NaN ] );
// returns true

bool = isNaNArray( [ NaN, NaN, NaN ] );
// returns true

bool = isNaNArray( [ new Number( NaN ), NaN, NaN ] );
// returns true

bool = isNaNArray( new Float64Array( [ NaN, NaN ] ) );
// returns true

bool = isNaNArray( NaN );
// returns false

bool = isNaNArray( [ 'a', 'b', 'c' ] );
// returns false

bool = isNaNArray( [ 'a', NaN ] );
// returns false

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-nan`][@stdlib/assert/is-nan]</span><span class="delimiter">: </span><span class="description">test if a value is NaN.</span>

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

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-nan-array.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-nan-array

[test-image]: https://github.com/stdlib-js/assert-is-nan-array/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-nan-array/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-nan-array/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-nan-array?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-nan-array.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-nan-array/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-nan-array/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-nan-array/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-nan-array/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-nan-array/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-nan-array/main/LICENSE

<!-- <related-links> -->

[@stdlib/assert/is-nan]: https://github.com/stdlib-js/assert-is-nan/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
