# react-imba-tables

<!--[![Travis][build-badge]][build]
#[![npm package][npm-badge]][npm]
#[![Coveralls][coveralls-badge]][coveralls]-->

[![npm version](https://badge.fury.io/js/react-imba-tables.svg)](https://badge.fury.io/js/react-imba-tables)
[![MIT License][license-image]][license-url]
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fschoedav%2Freact-imba-tables.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fschoedav%2Freact-imba-tables?ref=badge_shield)

Flexible datatable component for `React`.

> Not production ready yet. Wait for version 1.0.0 (coming soon)

Every admin site needs some datatables. Integrating datatables can be quite hard and if you use a 
library like the famous jQuery plugin [DataTables](https://datatables.net/) you might struggle depending
on the framework of your choice. If you happen to use `React` as your framework you can use several 
datatable libraries but most of them won't work the `React Way`. You might miss JSX support for rendering
special content, keeping the state in sync might be problematic as well as rerendering. This component
tries to remedy your aches by giving you a fully-fledged and flexible datatable that integrates
nicely with `React`.

`react-imba-tables` is written in `TypeScript`, so you will have full typesafety and autocomplection 
if you use it in a TypeScript project. If not, don't fear, it will work just the same. Only difference
is you need to know what you do ;-) And maybe read this Readme ;-)

## Installation

Install react-imba-tables via your favorite package manager.

```
npm install react-imba-tables --save
```

or

```
yarn add react-imba-tables
```

That's it :-)

## Usage

Include the styles in your page. You will need the react-imba-tables styles from `/public/css/react-imba-tables.css`
linked in your html head or via cdn:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/react-imba-tables@0.2.0/public/css/react-imba-tables.min.css">
```

You will also want `Bootstrap 4` css in you page:

```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
```

More infos about styling you can find under [Styling](#styling).

Now you can import the components like

```ecmascript 6
import ImbaTable, {ImbaTableColumn} from 'react-imba-tables';
```

and use them in your JSX

```jsx harmony
<ImbaTable data={data}>

  <ImbaTableColumn
      id={1}
      field='id'
      label='#'
      sortable={false}
  />

  <ImbaTableColumn
      id={2}
      field='firstname'
      label='Firstname'
  />

  <ImbaTableColumn
      id={3}
      field='lastname'
      label='Lastname'
  />

</ImbaTable>
```

with `data` that matches the column definitions:

```ts
const data = [{
    id: 1,
    firstname: 'James',
    lastname: 'Johnson'
  }, {
    id: 2,
    firstname: 'Thomas',
    lastname: 'Miller'
  }, {
    id: 3,
    firstname: 'Brian',
    lastname: 'Davis'
  }];
```

## Component Details

### ImbaTable

Renders a datatable.

**Props**

|     Prop     |   Description | Default | Example |
|----------|-------------|---|---|
| data |  An array containing objects of whatever you wish. **id** is needed for updating purposes. | [] | [{id: 1, name: 'Brian'}] |

### ImbaTableColumn

Defines a column in the datatable. Needs an `id` for updating purposes, a `field` to reference the
data and a `label` to show in the column header.

|     Prop     |   Description | Default | Optional | Example |
|----------|-------------|---|---|---|
| id (number) |  A unique identifier.  |  |  | 1 |
| field (string) |  The name of the property in each object of the data-array whose value shall be rendered in this column.  |  |  | firstname |
| label (string) |  The label to be used for this column in the head of the table.  |  |  | First name |
| sortable (boolean) | Defines if data can be sorted by this column. | true | yes | false

## <a name="styling">Styling</a>

Currently react-imba-tables uses `Bootstrap 4` markup and classes for styling. Future versions will
provide customization possibilities as well as other Libraries like `Foundation` etc.

So, if you wan't your table to look nice, dont't forget to include `Bootstrap 4` css for example
via `CDN`.

```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
```

## Coming Next

* [X] Sorting
* [ ] Responsiveness
* [ ] Content-Types for Table Cells (including custom rendering)
* [ ] Examples
* [ ] Custom markup and styling possibilities
* [ ] Tests

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.com/package/react-imba-tables

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fschoedav%2Freact-imba-tables.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fschoedav%2Freact-imba-tables?ref=badge_large)
