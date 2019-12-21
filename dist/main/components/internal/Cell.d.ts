import React from 'react';
import {ImbaTableColumnProps} from "../external/ImbaTableColumn";

interface Props {
    data: string;
    columnProps: ImbaTableColumnProps;
}
declare const Cell: React.FC<Props>;
export default Cell;
