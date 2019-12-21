# Component Details

## ImbaTable

Renders a datatable.

**Props**

|     Prop     |   Description | Default | Example |
|----------|-------------|---|---|
| data |  An array containing objects of whatever you wish. **id** is needed for updating purposes. | [] | [{id: 1, name: 'Brian'}] |

## ImbaTableColumn

Defines a column in the datatable. Needs an `id` for updating purposes, a `field` to reference the
data and a `label` to show in the column header.

|     Prop     |   Description | Default | Optional | Example |
|----------|-------------|---|---|---|
| id (number) |  A unique identifier.  |  |  | 1 |
| field (string) |  The name of the property in each object of the data-array whose value shall be rendered in this column.  |  |  | firstname |
| label (string) |  The label to be used for this column in the head of the table.  |  |  | First name |
| sortable (boolean) | Defines if data can be sorted by this column. | true | yes | false
