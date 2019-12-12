import * as React from 'react';
//@ts-ignore
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {shallow} from 'enzyme';
import ImbaTable from '../main/components/ImbaTable';
import ImbaTableColumn from "../main/components/ImbaTableColumn";

Enzyme.configure({ adapter: new Adapter() });

test('ImbaTable renders pagination', () => {
    const table = shallow(
        <ImbaTable data={[{id:1, name: 'Jason', lastName: 'Furgison'}]}>
            <ImbaTableColumn id={1} field={'name'} label={'Name'}/>
            <ImbaTableColumn id={2} field={'lastName'} label={'Last name'}/>
        </ImbaTable>);

    // Interaction demo
    expect(table.text()).toContain('<ImbaTablePagination');

    // Snapshot demo
    expect(table).toMatchSnapshot();
});
