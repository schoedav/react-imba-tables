import React, {useState} from 'react';
import moment from 'moment';

var ColumnHeader = function (_a) {
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

var ImbaTableContentType;
(function (ImbaTableContentType) {
    ImbaTableContentType["Text"] = "text";
    ImbaTableContentType["Date"] = "date";
})(ImbaTableContentType || (ImbaTableContentType = {}));
var ImbaTableContentType$1 = ImbaTableContentType;

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
            case ImbaTableContentType$1.Date:
                return React.createElement("td", null, formatDate(data));
            default:
                return React.createElement("td", null, formatRaw(data));
        }
    }
    return (React.createElement("td", null, data));
};

var Pagination = function (_a) {
    var pages = _a.pages, currentPage = _a.currentPage, onPageSelected = _a.onPageSelected, onPrevious = _a.onPrevious, onNext = _a.onNext;
    var renderPageButtons = function () {
        return Array.from(Array(pages).keys()).map(function (pageNumber, index) {
            var isActive = (pageNumber + 1 === currentPage ? ' active' : '');
            return (React.createElement("li", { key: index, className: "page-item" + isActive, onClick: function () { onPageSelected(pageNumber + 1); } },
                React.createElement("a", { className: "page-link", href: "#" }, pageNumber + 1)));
        });
    };
    var prevDisabled = (currentPage <= 1 ? ' disabled' : '');
    var nextDisabled = (currentPage >= pages ? ' disabled' : '');
    return (React.createElement(React.Fragment, null,
        React.createElement("nav", { "aria-label": "Page navigation example" },
            React.createElement("ul", { className: "pagination justify-content-end" },
                React.createElement("li", { className: "page-item" + prevDisabled, onClick: function () { onPrevious(); } },
                    React.createElement("a", { className: "page-link", href: "#" }, "Previous")),
                renderPageButtons(),
                React.createElement("li", { className: "page-item" + nextDisabled, onClick: function () { onNext(); } },
                    React.createElement("a", { className: "page-link", href: "#" }, "Next"))))));
};

var BottomRow = function (_a) {
    var pages = _a.pages, currentPage = _a.currentPage, onPageSelected = _a.onPageSelected, onPrevious = _a.onPrevious, onNext = _a.onNext, startIndex = _a.startIndex, endIndex = _a.endIndex, numberOfEntries = _a.numberOfEntries;
    return (React.createElement("div", { className: "row" },
        React.createElement("div", { className: "col mb-3" },
            "Showing ",
            startIndex,
            " to ",
            endIndex,
            " of ",
            numberOfEntries,
            " entries"),
        React.createElement("div", { className: "col mb-3" },
            React.createElement(Pagination, { pages: pages, currentPage: currentPage, onPageSelected: onPageSelected, onPrevious: onPrevious, onNext: onNext }))));
};

var SearchField = function (_a) {
    var onChange = _a.onChange;
    return (React.createElement("div", null,
        React.createElement("input", { type: "email", className: "form-control", placeholder: "Search...", onChange: function (event) { onChange(event.target.value); } })));
};

var RowsPerPageSelect = function (_a) {
    var onChange = _a.onChange;
    var _b = useState(5), selectedOption = _b[0], setSelectedOption = _b[1];
    var options = [{
            id: 1,
            text: '5',
            value: 5,
        }, {
            id: 2,
            text: '10',
            value: 10,
        }, {
            id: 3,
            text: '50',
            value: 50,
        }, {
            id: 4,
            text: 'All',
            value: 0,
        }];
    return (React.createElement("form", { className: "form-inline" },
        React.createElement("p", { className: "my-1 mr-2" }, "Show"),
        React.createElement("select", { className: "custom-select my-1 mr-sm-2", value: selectedOption, onChange: function (event) {
                var value = parseInt(event.target.value);
                setSelectedOption(value);
                onChange(value);
            } }, options.map(function (option) {
            return React.createElement("option", { key: option.id, value: option.value }, option.text);
        })),
        React.createElement("p", { className: "my-1 mr-2" }, "entries")));
};

var TopRow = function (_a) {
    var onSearchTextChange = _a.onSearchTextChange, onRowsPerPageChange = _a.onRowsPerPageChange;
    return (React.createElement("div", { className: "row" },
        React.createElement("div", { className: "col mb-3" },
            React.createElement(RowsPerPageSelect, { onChange: onRowsPerPageChange })),
        React.createElement("div", { className: "col mb-3" },
            React.createElement(SearchField, { onChange: onSearchTextChange }))));
};

var filterData = function (data, searchText) {
    var filteredData = data;
    if (searchText.length > 0) {
        filteredData = data.filter(function (row) {
            return Object.keys(row).find(function (key) {
                var value = row[key].toString();
                return (value.toLowerCase().indexOf(searchText.toLocaleLowerCase()) !== -1);
            });
        });
    }
    return filteredData;
};
var sortData = function (data, cols, sortColId, sortAsc) {
    return data.sort(function (row1, row2) {
        var sortCol = cols.find(function (col) {
            return col.props.id === sortColId;
        });
        if (!sortCol) {
            return 0;
        }
        var sortField = sortCol.props.field;
        if (row1[sortField] < row2[sortField]) {
            return (sortAsc ? -1 : 1);
        }
        else if (row1[sortField] > row2[sortField]) {
            return (sortAsc ? 1 : -1);
        }
        return 0;
    });
};

var ImbaTable = function (_a) {
    var children = _a.children, data = _a.data;
    var _b = useState(''), searchText = _b[0], setSearchText = _b[1];
    var _c = useState(1), page = _c[0], setPage = _c[1];
    var _d = useState(5), rowsPerPage = _d[0], setRowsPerPage = _d[1];
    var _e = useState(1), sortColId = _e[0], setSortColId = _e[1];
    var _f = useState(true), sortAsc = _f[0], setSortAsc = _f[1];
    var colDefinitions = children.filter(function (child) {
        return !(!child.props || !child.props.field || !child.props.label);
    });
    // Filtering
    var filteredData = filterData(data, searchText);
    // Sorting
    var sortedData = sortData(filteredData, colDefinitions, sortColId, sortAsc);
    // Paging
    var pages = 1;
    var startIndex = 0;
    var endIndex = sortedData.length;
    if (rowsPerPage > 0) {
        pages = Math.ceil(sortedData.length / rowsPerPage);
        startIndex = (page - 1) * rowsPerPage;
        endIndex = startIndex + rowsPerPage;
        endIndex = (endIndex > sortedData.length ? sortedData.length : endIndex);
    }
    var pagedData = sortedData.slice(startIndex, endIndex);
    return (React.createElement("div", { className: "react-imba-table" },
        React.createElement(TopRow, { onSearchTextChange: function (searchText) {
                setSearchText(searchText);
                setPage(1);
            }, onRowsPerPageChange: function (rowsPerPage) {
                setRowsPerPage(rowsPerPage);
                setPage(1);
            } }),
        React.createElement("table", { className: "table table-striped" },
            React.createElement("thead", null,
                React.createElement("tr", null, colDefinitions.map(function (col) {
                    return (React.createElement(ColumnHeader, { id: col.props.id, key: col.props.id, label: col.props.label, sortable: col.props.sortable, sortColId: sortColId, sortAsc: sortAsc, onClick: function (sortColId, sortAsc) {
                            setSortColId(col.props.id);
                            setSortAsc(sortAsc);
                        } }));
                }))),
            React.createElement("tbody", null, pagedData.map(function (row) { return React.createElement("tr", { key: row.id }, colDefinitions.map(function (col) { return React.createElement(Cell, { key: col.props.id, columnProps: col.props, data: row[col.props.field] }); })); }))),
        React.createElement(BottomRow, { pages: pages, currentPage: page, onPageSelected: function (page) { setPage(page); }, onPrevious: function () { if (page > 1) {
                setPage(page - 1);
            } }, onNext: function () { if (page < pages) {
                setPage(page + 1);
            } }, startIndex: startIndex + 1, endIndex: endIndex, numberOfEntries: sortedData.length })));
};

var ImbaTableColumn = function () {
    return React.createElement("div", null, "col");
};

export default ImbaTable;
export { ImbaTableColumn, ImbaTableContentType$1 as ImbaTableContentType };
