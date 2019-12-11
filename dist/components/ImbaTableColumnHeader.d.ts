import React from 'react';

interface Props {
    id: number;
    label: string;
    sortable?: boolean;
    sortColId: number;
    sortAsc: boolean;
    onClick: (sortColId: number, sortAsc: boolean) => void;
}
declare const ImbaTableColumnHeader: React.FunctionComponent<Props>;
export default ImbaTableColumnHeader;
