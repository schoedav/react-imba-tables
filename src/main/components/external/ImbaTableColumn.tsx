import React from 'react'
import ImbaTableContentType from "../../enums/ImbaTableContentType";

export interface ImbaTableColumnProps {
    id: number;
    field: string;
    label: string;
    sortable?: boolean;
    contentType?: ImbaTableContentType;
    dateFormat?: string;
}

const ImbaTableColumn: React.FC<ImbaTableColumnProps> = () => {
    return <div>col</div>
};

export default ImbaTableColumn;
