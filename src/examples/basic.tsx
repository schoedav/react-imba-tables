import React from 'react'
import ReactDOM from 'react-dom';
import ImbaTable, {ImbaTableColumn} from "../main";

const data = [{
    id: 1,
    name: 'Jamie',
    lastName: 'West'
}, {
    id: 2,
    name: 'Katie',
    lastName: 'Ballard'
}, {
    id: 3,
    name: 'Jeremy',
    lastName: 'Scott'
}, {
    id: 4,
    name: 'Ava',
    lastName: 'Swanson'
}, {
    id: 5,
    name: 'Derek',
    lastName: 'Sutton'
}, {
    id: 6,
    name: 'Jack',
    lastName: 'Swanson'
}, {
    id: 7,
    name: 'Grace',
    lastName: 'Baker'
}, {
    id: 8,
    name: 'Jordan',
    lastName: 'Nielsen'
}, {
    id: 9,
    name: 'Jehuda',
    lastName: 'Katz'
}, {
    id: 10,
    name: 'Nicholas',
    lastName: 'Marsh'
}, {
    id: 11,
    name: 'Jasmine',
    lastName: 'Montgomery'
}];

const domContainer = document.querySelector('#basic-react-imba-table');
ReactDOM.render(<ImbaTable data={data}>

    <ImbaTableColumn
        id={1}
        field='id'
        label='#'
        sortable={true}
    />

    <ImbaTableColumn
        id={2}
        field='name'
        label='Name'
        sortable={false}
    />

    <ImbaTableColumn
        id={3}
        field='lastName'
        label='Nachname'
        sortable={true}
    />

</ImbaTable>, domContainer);
