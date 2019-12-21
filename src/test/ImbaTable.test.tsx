import * as React from 'react';
//@ts-ignore
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {shallow} from 'enzyme';
import ImbaTable from '../main/components/external/ImbaTable';
import ImbaTableColumn from "../main/components/external/ImbaTableColumn";

Enzyme.configure({ adapter: new Adapter() });

test('ImbaTable renders pagination', () => {
    const table = shallow(
        <ImbaTable data={[{id:1, name: 'Jason', lastName: 'Furgison'}]}>
            <ImbaTableColumn id={1} field={'name'} label={'Name'}/>
            <ImbaTableColumn id={2} field={'lastName'} label={'Last name'}/>
        </ImbaTable>);

    // Interaction demo
    expect(table.text()).toContain('<Pagination');

    // Snapshot demo
    expect(table).toMatchSnapshot();
});
