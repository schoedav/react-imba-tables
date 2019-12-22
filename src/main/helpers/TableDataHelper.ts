import {ReactElement} from "react";

const filterData = (data: any[], searchText: string) => {
    let filteredData = data;
    if(searchText.length > 0) {
        filteredData = data.filter((row: any) => {
            return Object.keys(row).find((key: string) => {
                const value = row[key].toString();
                return (value.toLowerCase().indexOf(searchText.toLocaleLowerCase()) !== -1);
            })
        });
    }
    return filteredData;
};

const sortData = (data: any[], cols: ReactElement[], sortColId: number, sortAsc: boolean) => {
    return data.sort((row1: any, row2: any) => {
        const sortCol = cols.find((col) => {
            return col.props.id === sortColId;
        });
        if(!sortCol) {
            return 0;
        }
        const sortField: string = sortCol.props.field;
        if(row1[sortField] < row2[sortField]) {
            return (sortAsc ? -1 : 1);
        } else if(row1[sortField] > row2[sortField]) {
            return (sortAsc ? 1 : -1);
        }
        return 0;
    });
};

export { filterData, sortData };
