import React from 'react';

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
                return React.createElement("th", { onClick: clickCallback, scope: "col", className: "sortable asc" }, label);
            }
            return React.createElement("th", { onClick: clickCallback, scope: "col", className: "sortable desc" }, label);
        }
        return React.createElement("th", { onClick: clickCallback, scope: "col", className: "sortable" }, label);
    }
    return React.createElement("th", { scope: "col" }, label);
};
export default ImbaTableColumnHeader;
