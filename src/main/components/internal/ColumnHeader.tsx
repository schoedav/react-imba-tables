import React from 'react'

interface Props {
    id: number;
    label: string;
    sortable?: boolean;
    sortColId: number;
    sortAsc: boolean;
    onClick: (sortColId: number, sortAsc: boolean) => void;
}

const ColumnHeader: React.FunctionComponent<Props> = ({id, label, sortable, sortColId, sortAsc, onClick}) => {

    const clickCallback = () => {
        if(sortColId === id) {
            onClick(id, !sortAsc);
        } else {
            onClick(id, true);
        }
    };

    if(sortable === undefined || sortable) {
        if(sortColId === id) {
            if(sortAsc) {
                return <th onClick={clickCallback} scope="col" className="sortable asc">{label}</th>
            }
            return <th onClick={clickCallback} scope="col" className="sortable desc">{label}</th>
        }
        return <th onClick={clickCallback} scope="col" className="sortable">{label}</th>
    }
    return <th scope="col">{label}</th>
};

export default ColumnHeader;
