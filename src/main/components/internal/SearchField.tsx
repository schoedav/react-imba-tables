import React from 'react'

interface Props {
    onChange: (text: string) => void;
}

const SearchField: React.FC<Props> = ({onChange}) => {

    return (
        <div>
            <input
                type="email"
                className="form-control"
                placeholder="Search..."
                onChange={(event) => { onChange(event.target.value); }}
            />
        </div>
    );
};

export default SearchField;
