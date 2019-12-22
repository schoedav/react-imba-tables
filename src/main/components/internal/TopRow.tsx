import React from 'react'
import SearchField from "./SearchField";
import RowsPerPageSelect from "./RowsPerPageSelect";

interface Props {
    onSearchTextChange: (searchText: string) => void;
    onRowsPerPageChange: (rowsPerPage: number) => void;
}

const TopRow: React.FC<Props> = ({onSearchTextChange, onRowsPerPageChange}) => {

    return (
        <div className="row">
            <div className="col mb-3">

                <RowsPerPageSelect onChange={onRowsPerPageChange}/>

            </div>
            <div className="col mb-3">
                <SearchField onChange={onSearchTextChange} />
            </div>
        </div>
    )
};

export default TopRow;
