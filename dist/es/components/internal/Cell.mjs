import React from 'react';
import ImbaTableContentType from "../../enums/ImbaTableContentType";
import moment from 'moment';

var Cell = function (_a) {
    var data = _a.data, columnProps = _a.columnProps;
    var contentType = columnProps.contentType, dateFormat = columnProps.dateFormat;
    var formatRaw = function (data) {
        return data.toString();
    };
    var formatDate = function (data) {
        try {
            if (dateFormat) {
                return moment(data).format(dateFormat);
            }
            return moment(data).format();
        }
        catch (error) {
            console.error(error);
            return 'could not parse date';
        }
    };
    if (contentType !== null && contentType !== undefined) {
        switch (contentType) {
            case ImbaTableContentType.Date:
                return React.createElement("td", null, formatDate(data));
            default:
                return React.createElement("td", null, formatRaw(data));
        }
    }
    return (React.createElement("td", null, data));
};
export default Cell;
