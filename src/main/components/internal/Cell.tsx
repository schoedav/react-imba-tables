import React from 'react'
import {ImbaTableColumnProps} from "../external/ImbaTableColumn";
import ImbaTableContentType from "../../enums/ImbaTableContentType";
import moment from 'moment';

interface Props {
    data: string;
    columnProps: ImbaTableColumnProps;
}

const Cell: React.FC<Props> = ({data, columnProps}) => {

    let { contentType, dateFormat } = columnProps;

    const formatRaw = (data: any): string => {
        return data.toString();
    };

    const formatDate = (data: any): string => {
        try {
            if(dateFormat) {
                return moment(data).format(dateFormat);
            }
            return moment(data).format();
        } catch(error) {
            console.error(error);
            return 'could not parse date';
        }
    };

    if(contentType !== null && contentType !== undefined) {

        switch (contentType) {
            case ImbaTableContentType.Date:
                return <td>{formatDate(data)}</td>;
            default:
                return <td>{formatRaw(data)}</td>
        }
    }

    return (
        <td>{data}</td>
    )
};

export default Cell;
