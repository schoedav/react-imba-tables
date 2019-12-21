import React from 'react'
import ReactDOM from 'react-dom';
import ImbaTable, {ImbaTableColumn} from "../main";
import ImbaTableContentType from "../main/enums/ImbaTableContentType";

const data = [{
    id: '1',
    name: 'Jamie',
    lastName: 'West',
    dateOfBirth: '1999-06-16',
}, {
    id: '2',
    name: 'Katie',
    lastName: 'Ballard',
    dateOfBirth: '2000-09-30',
}, {
    id: '3',
    name: 'Jeremy',
    lastName: 'Scott',
    dateOfBirth: '2002-11-12',
}, {
    id: '4',
    name: 'Ava',
    lastName: 'Swanson',
    dateOfBirth: '2005-01-05',
}, {
    id: '5',
    name: 'Derek',
    lastName: 'Sutton',
    dateOfBirth: '2018-11-22',
}, {
    id: '6',
    name: 'Jack',
    lastName: 'Swanson',
    dateOfBirth: '1987-05-11',
}, {
    id: '7',
    name: 'Grace',
    lastName: 'Baker',
    dateOfBirth: '1988-01-19',
}, {
    id: '8',
    name: 'Jordan',
    lastName: 'Nielsen',
    dateOfBirth: '1994-05-20',
}, {
    id: '9',
    name: 'Jehuda',
    lastName: 'Katz',
    dateOfBirth: '2003-05-12',
}, {
    id: '10',
    name: 'Nicholas',
    lastName: 'Marsh',
    dateOfBirth: '2012-03-14',
}, {
    id: '11',
    name: 'Jasmine',
    lastName: 'Montgomery',
    dateOfBirth: '1971-06-21',
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
        label='Last name'
        sortable={true}
    />

    <ImbaTableColumn
        id={4}
        field='dateOfBirth'
        label='Birthday'
        contentType={ImbaTableContentType.Date}
        dateFormat="DD. MMM YYYY"
    />

</ImbaTable>, domContainer);
