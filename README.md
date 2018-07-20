[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![Build Status](https://img.shields.io/circleci/project/github/RedSparr0w/node-csgo-parser.svg) [![devDependencies Status](https://david-dm.org/dwyl/hapi-auth-jwt2/dev-status.svg)](https://david-dm.org/dwyl/hapi-auth-jwt2?type=dev)

# wee-grid
Wee-grid An extremely simple, customizable, and responsive CSS grid. Both media query breakpoints and number of grid columns are customizable. Wee-grid uses [Sass](http://sass-lang.com/) for precompiling CSS and [webpack](https://webpack.js.org/) for building the CSS asset.

## Usage

### Media Query Breakpoints
By default wee-grid uses a 12-column grid over 4 media query breakpoints. Media queries are configured for mobile-first usage.

| Breakpoint | Width  |
|------------|--------|
| sm         | 567px  |
| md         | 768px  |
| lg         | 992px  |
| xl         | 1200px |

### CSS Classes for Grid Column Containers

Column containers have the the following name convention:

`col-[breakpoint]-[number of columns]-[column set size]`

**Examples:**

```
col-sm-4-12
col-md-6-12
col-lg-8-12
```

_(CSS class names can use simpler fractions by creating custom column sets.)_


### Building a Grid

Wrap a grid row within an element with a `wg` CSS class.  The following grid contains two containers that are initially the width of the screen. When the `md` breakpoint is reached each container will be half the width of the screen.

```
<div class="wg">
  <div class="col-md-6-12">foo</div>
  <div class="col-md-6-12">bar</div>
</div>

```

The grid uses standard CSS floats and drops so multiple rows can be created in an element within a `wg` class. Just make sure that all containers span columns gracefully to avoid float drops.

```
<div class="wg">
  <div class="col-md-6-12">foo</div>
  <div class="col-md-6-12">bar</div>
  <div class="col-md-10-12">foo</div>
  <div class="col-md-2-12">bar</div>
</div>

```

Multiple `col-` classes can be used for behavior at multiple breakpoints.

```
<div class="wg">
  <div class="col-sm-4-12 col-md-6-12 col-lg-2-12">foo</div>
  <div class="col-sm-8-12 col-md-6-12 col-lg-10-12">foo</div>
</div>

```
## Customization

### Breakpoints
Default breakpoints are listed in `src/_config.scss`. They may be changed to different sizes and unit types.

```
$breakpoints: (
	sm : 567px,
	md : 768px,
	lg : 992px,
	xl : 1200px,
);
```

_If you add or change the name of a breakpoint, be sure to use that name in your column class. For example if you add an `xxl` breakpoint you'll want to use class names like `col-xxl-6-12`._

### Column Sets

Change the number of grid columns used in `src/wee-grid.scss`. By default a 12-column grid is built but as per the commented examples, multiple column sets can be defined and used at once. Each column set is created from a Sass mixin. You can create new column sets using any positive integer.

```
// --------- Specify Column Set(s) ---------- //
//
// Multiple columnsets may be used.
//
// @include column-set(2);
// @include column-set(4);
// @include column-set(6);
// @include column-set(8);
@include column-set(12);
// @include column-set(16);
```

By enabling the `@include column-set(2)` column set we can use simpler, more intuitive class names.  Instead of using the `col-md-6-12` CSS class, we'd use simpler fractions.

```
<div class="wg">
  <div class="col-md-1-2">foo</div>
  <div class="col-md-1-2">bar</div>
</div>

```

## Contributing

Contributions are welcome. Remember that wee-grid wants to stay as simple as possible. It wants to be a grid, not a responsive framework. :-)

1. Fork this repository (https://github.com/ecarlisle/wee-grid/fork).
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Here is some new awesomeness!')
4. Push to the branch (git push origin my-new-feature)
5. Create a new Pull Request
