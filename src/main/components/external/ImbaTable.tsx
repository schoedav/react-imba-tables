import React, {ReactElement, useState} from 'react'
import ColumnHeader from "../internal/ColumnHeader";
import Cell from "../internal/Cell";
import BottomRow from "../internal/BottomRow";
import TopRow from "../internal/TopRow";
import {filterData, sortData} from "../../helpers/TableDataHelper";

interface Props {
    data: any[];
    children: ReactElement[];
}

const ImbaTable: React.FC<Props> = ({children, data}) => {

    const [searchText, setSearchText] = useState('');
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [sortColId, setSortColId] = useState(1);
    const [sortAsc, setSortAsc] = useState(true);

    const colDefinitions: ReactElement[] = children.filter((child: any) => {
        return !(!child.props || !child.props.field || !child.props.label);
    });

    // Filtering
    const filteredData = filterData(data, searchText);

    // Sorting
    const sortedData = sortData(filteredData, colDefinitions, sortColId, sortAsc);

    // Paging
    let pages = 1;
    let startIndex = 0;
    let endIndex = sortedData.length;
    if(rowsPerPage > 0) {
        pages = Math.ceil(sortedData.length / rowsPerPage);
        startIndex = (page-1) * rowsPerPage;
        endIndex = startIndex + rowsPerPage;
        endIndex = (endIndex > sortedData.length ? sortedData.length : endIndex);
    }

    const pagedData = sortedData.slice(startIndex, endIndex);

    return (
        <div className="react-imba-table">

            <TopRow
                onSearchTextChange={(searchText: string) => {
                    setSearchText(searchText);
                    setPage(1);
                }}
                onRowsPerPageChange={(rowsPerPage: number) => {
                    setRowsPerPage(rowsPerPage);
                    setPage(1);
                }}
            />

            <table className="table table-striped">
                <thead>
                <tr>
                    {colDefinitions.map((col: ReactElement) => {
                        return (
                            <ColumnHeader
                                id={col.props.id}
                                key={col.props.id}
                                label={col.props.label}
                                sortable={col.props.sortable}
                                sortColId={sortColId}
                                sortAsc={sortAsc}
                                onClick={(sortColId: number, sortAsc: boolean) => {
                                    setSortColId(col.props.id);
                                    setSortAsc(sortAsc);
                                }}
                            />
                        );
                    })}
                </tr>
                </thead>
                <tbody>
                    {pagedData.map((row: any) => <tr key={row.id}>
                        {colDefinitions.map((col: ReactElement) => <Cell key={col.props.id} columnProps={col.props} data={row[col.props.field]} />)}
                    </tr>)}
                </tbody>
            </table>

            <BottomRow
                pages={pages}
                currentPage={page}
                onPageSelected={(page: number) => { setPage(page) }}
                onPrevious={() => { if(page > 1) { setPage(page-1); }}}
                onNext={() => { if(page < pages) { setPage(page+1); }}}
                startIndex={startIndex+1}
                endIndex={endIndex}
                numberOfEntries={sortedData.length}
            />

        </div>
    );
};

export default ImbaTable;
