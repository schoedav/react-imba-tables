import React, {useState} from 'react'

interface Props {
    onChange: (count: number) => void;
}

const RowsPerPageSelect: React.FC<Props> = ({onChange}) => {

    const [selectedOption, setSelectedOption] = useState(5);

    const options = [{
        id: 1,
        text: '5',
        value: 5,
    }, {
        id: 2,
        text: '10',
        value: 10,
    }, {
        id: 3,
        text: '50',
        value: 50,
    }, {
        id: 4,
        text: 'All',
        value: 0,
    }];

    return (
        <form className="form-inline">
            <p className="my-1 mr-2">Show</p>
            <select className="custom-select my-1 mr-sm-2" value={selectedOption} onChange={(event) => {
                const value = parseInt(event.target.value);
                setSelectedOption(value);
                onChange(value);
            }}>
                {options.map((option: any) => {
                    return <option key={option.id} value={option.value}>{option.text}</option>
                })}
            </select>
            <p className="my-1 mr-2">entries</p>
        </form>
    );
};

export default RowsPerPageSelect;
