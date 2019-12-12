import React, {ReactElement} from 'react'
import ImbaTablePagination from "./ImbaTablePagination";
import ImbaTableSearchField from "./ImbaTableSearchField";
import ImbaTableColumnHeader from "./ImbaTableColumnHeader";

interface DataProps {
    id: number;
}

interface State {
    page: number;
    rowsPerPage: number;
    searchText: string;
    sortColId: number;
    sortAsc: boolean;
}

interface Props {
    data: any[];
    children: ReactElement[];
}

class ImbaTable extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            page: 1,
            rowsPerPage: 5,
            searchText: '',
            sortColId: 1,
            sortAsc: true,
        }
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        if(prevProps.data.length !== this.props.data.length) {
            this.setState({page: 1});
        }
    }

    render() {

        const {children, data} = this.props;

        const cols: ReactElement[] = children.filter((child: any) => {
            return !(!child.props || !child.props.field || !child.props.label);
        });

        // Filtering
        let filteredData = data;
        if(this.state.searchText.length > 0) {
            filteredData = data.filter((row: any) => {
                return Object.keys(row).find((key: string) => {
                    const value = row[key].toString();
                    return (value.toLowerCase().indexOf(this.state.searchText.toLocaleLowerCase()) !== -1);
                })
            });
        }

        // Sorting
        const sortedData = filteredData.sort((row1: any, row2: any) => {
            const sortCol = cols.find((col) => {
                return col.props.id === this.state.sortColId;
            });
            if(!sortCol) {
                return 0;
            }
            const sortField: string = sortCol.props.field;
            if(row1[sortField] < row2[sortField]) {
                return (this.state.sortAsc ? -1 : 1);
            } else if(row1[sortField] > row2[sortField]) {
                return (this.state.sortAsc ? 1 : -1);
            }
            return 0;
        });

        // Paging
        const pages = Math.ceil(sortedData.length / this.state.rowsPerPage);
        const startIndex = (this.state.page-1) * this.state.rowsPerPage;
        let endIndex = startIndex + this.state.rowsPerPage;
        if (endIndex > data.length) {
            endIndex = data.length;
        }
        const pagedData = sortedData.slice(startIndex, endIndex);

        return (
            <div className="react-imba-table">
                <ImbaTableSearchField
                    onChange={ (searchText: string) => {
                        this.setState({searchText: searchText, page: 1});
                    }}
                />

                <table className="table table-striped">
                    <thead>
                    <tr>
                        {cols.map((col: ReactElement) => {
                            return (
                                <ImbaTableColumnHeader
                                    id={col.props.id}
                                    key={col.props.id}
                                    label={col.props.label}
                                    sortable={col.props.sortable}
                                    sortColId={this.state.sortColId}
                                    sortAsc={this.state.sortAsc}
                                    onClick={(sortColId: number, sortAsc: boolean) => {
                                        this.setState({sortColId: col.props.id, sortAsc: sortAsc})
                                    }}
                                />
                            );
                        })}
                    </tr>
                    </thead>
                    <tbody>
                        {pagedData.map((row: any) => <tr key={row.id}>
                            {cols.map((col: ReactElement) => <td key={col.props.id}>{row[col.props.field]}</td>)}
                        </tr>)}
                    </tbody>
                </table>

                <ImbaTablePagination
                    pages={pages}
                    currentPage={this.state.page}
                    onPageSelected={(page: number) => {
                        this.setState({page: page})
                    }}
                    onPrevious={() => {
                        if(this.state.page > 1) {
                            this.setState({page: this.state.page-1})
                        }
                    }}
                    onNext={() => {
                        if(this.state.page < pages) {
                            this.setState({page: this.state.page+1})
                        }
                    }}
                />

                Showing Page {this.state.page} of {pages}
            </div>
        );
    }
}

export default ImbaTable;
