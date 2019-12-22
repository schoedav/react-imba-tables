import React from 'react';

interface Props {
    onSearchTextChange: (searchText: string) => void;
    onRowsPerPageChange: (rowsPerPage: number) => void;
}
declare const TopRow: React.FC<Props>;
export default TopRow;
