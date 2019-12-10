import React, {ReactElement} from 'react'
import ImbaTablePagination from "./ImbaTablePagination";
import ImbaTableSearchField from "./ImbaTableSearchField";

interface DataProps {
    id: number;
}

interface State {
    page: number;
    rowsPerPage: number;
    searchText: string;
}

interface Props {
    data: DataProps[];
    children: ReactElement[];
}

class ImbaTable extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            page: 1,
            rowsPerPage: 5,
            searchText: '',
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

        // Paging
        const pages = Math.ceil(filteredData.length / this.state.rowsPerPage);
        const startIndex = (this.state.page-1) * this.state.rowsPerPage;
        let endIndex = startIndex + this.state.rowsPerPage;
        if (endIndex > data.length) {
            endIndex = data.length;
        }
        const pagedData = filteredData.slice(startIndex, endIndex);

        return (
            <div>
                <ImbaTableSearchField
                    onChange={ (searchText: string) => {
                        this.setState({searchText: searchText, page: 1});
                    }}
                />

                <table className="table table-striped">
                    <thead>
                    <tr>
                        {cols.map((col: ReactElement) => <th scope="col" key={col.props.id}>{col.props.label}</th>)}
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
