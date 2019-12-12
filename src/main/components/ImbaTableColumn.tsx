import React from 'react'

interface Props {
    id: number;
    field: string;
    label: string;
    sortable?: boolean;
}

class ImbaTableColumn extends React.Component<Props> {

    render() {
        return <div>col</div>
    }
}

export default ImbaTableColumn;
