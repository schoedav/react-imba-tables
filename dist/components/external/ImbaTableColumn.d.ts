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
declare class ImbaTableColumn extends React.Component<ImbaTableColumnProps> {
    render(): JSX.Element;
}
export default ImbaTableColumn;
