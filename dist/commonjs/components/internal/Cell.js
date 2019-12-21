"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ImbaTableContentType_1 = __importDefault(require("../../enums/ImbaTableContentType"));
var moment_1 = __importDefault(require("moment"));
var Cell = function (_a) {
    var data = _a.data, columnProps = _a.columnProps;
    var contentType = columnProps.contentType, dateFormat = columnProps.dateFormat;
    var formatRaw = function (data) {
        return data.toString();
    };
    var formatDate = function (data) {
        try {
            if (dateFormat) {
                return moment_1.default(data).format(dateFormat);
            }
            return moment_1.default(data).format();
        }
        catch (error) {
            console.error(error);
            return 'could not parse date';
        }
    };
    if (contentType !== null && contentType !== undefined) {
        switch (contentType) {
            case ImbaTableContentType_1.default.Date:
                return react_1.default.createElement("td", null, formatDate(data));
            default:
                return react_1.default.createElement("td", null, formatRaw(data));
        }
    }
    return (react_1.default.createElement("td", null, data));
};
exports.default = Cell;
