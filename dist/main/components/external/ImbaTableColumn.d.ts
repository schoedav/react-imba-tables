import React from 'react';
import ImbaTableContentType from "../../enums/ImbaTableContentType";

export interface ImbaTableColumnProps {
    id: number;
    field: string;
    label: string;
    sortable?: boolean;
    contentType?: ImbaTableContentType;
    dateFormat?: string;
}
declare const ImbaTableColumn: React.FC<ImbaTableColumnProps>;
export default ImbaTableColumn;
