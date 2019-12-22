import * as React from 'react';
//@ts-ignore
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {mount} from 'enzyme';
import ImbaTable from '../main/components/external/ImbaTable';
import ImbaTableColumn from "../main/components/external/ImbaTableColumn";
import Pagination from "../main/components/internal/Pagination";

Enzyme.configure({ adapter: new Adapter() });

test('ImbaTable renders pagination', () => {
    const table = mount(
        <ImbaTable data={[{id:1, name: 'Jason', lastName: 'Furgison'}]}>
            <ImbaTableColumn id={1} field={'name'} label={'Name'}/>
            <ImbaTableColumn id={2} field={'lastName'} label={'Last name'}/>
        </ImbaTable>);

    expect(table.find(Pagination).length).toEqual(1);

    expect(table).toMatchSnapshot();
});
