# Usage

Include the styles in your page. You will need the react-imba-tables styles from `/public/css/react-imba-tables.css`
linked in your html head or via cdn:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/react-imba-tables@0.2.0/public/css/react-imba-tables.min.css">
```

You will also want `Bootstrap 4` css in your page:

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
