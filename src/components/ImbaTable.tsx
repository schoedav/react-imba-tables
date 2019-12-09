import React, {ReactElement} from 'react'

interface Props {
    data: any[];
    children: ReactElement[];
}

class ImbaTable extends React.Component<Props> {

    render() {

        const {children} = this.props;

        // console.log(children);

        const cols: ReactElement[] = children.filter((child: any) => {
            return !(!child.props || !child.props.field || !child.props.label);
        });

        return <div>
            <table className="table table-striped">
                <thead>
                <tr>
                    {cols.map((col: ReactElement) => <th scope="col" key={col.props.id}>{col.props.label}</th>)}
                </tr>
                </thead>
                <tbody>
                    {this.props.data.map((row) => <tr key={row.id}>
                        {cols.map((col: ReactElement) => <td key={col.props.id}>{row[col.props.field]}</td>)}
                    </tr>)}
                </tbody>
            </table>
        </div>
    }
}

export default ImbaTable;
