"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ImbaTableColumnHeader = function (_a) {
    var id = _a.id, label = _a.label, sortable = _a.sortable, sortColId = _a.sortColId, sortAsc = _a.sortAsc, onClick = _a.onClick;
    var clickCallback = function () {
        if (sortColId === id) {
            onClick(id, !sortAsc);
        }
        else {
            onClick(id, true);
        }
    };
    if (sortable === undefined || sortable) {
        if (sortColId === id) {
            if (sortAsc) {
                return react_1.default.createElement("th", { onClick: clickCallback, scope: "col", className: "sortable asc" }, label);
            }
            return react_1.default.createElement("th", { onClick: clickCallback, scope: "col", className: "sortable desc" }, label);
        }
        return react_1.default.createElement("th", { onClick: clickCallback, scope: "col", className: "sortable" }, label);
    }
    return react_1.default.createElement("th", { scope: "col" }, label);
};
exports.default = ImbaTableColumnHeader;
