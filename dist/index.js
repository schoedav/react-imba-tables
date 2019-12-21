'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var moment = _interopDefault(require('moment'));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var SearchField = /** @class */ (function (_super) {
    __extends(SearchField, _super);
    function SearchField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SearchField.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("input", { type: "email", className: "form-control", placeholder: "Search...", onChange: function (event) { _this.props.onChange(event.target.value); } })));
    };
    return SearchField;
}(React.Component));

var Pagination = /** @class */ (function (_super) {
    __extends(Pagination, _super);
    function Pagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pagination.prototype.renderPageButtons = function () {
        var _this = this;
        return Array.from(Array(this.props.pages).keys()).map(function (pageNumber, index) {
            var isActive = (pageNumber + 1 === _this.props.currentPage ? ' active' : '');
            return (React.createElement("li", { key: index, className: "page-item" + isActive, onClick: function () { _this.props.onPageSelected(pageNumber + 1); } },
                React.createElement("a", { className: "page-link", href: "#" }, pageNumber + 1)));
        });
    };
    Pagination.prototype.render = function () {
        var _this = this;
        var prevDisabled = (this.props.currentPage <= 1 ? ' disabled' : '');
        var nextDisabled = (this.props.currentPage >= this.props.pages ? ' disabled' : '');
        return (React.createElement("div", null,
            React.createElement("nav", { "aria-label": "Page navigation example" },
                React.createElement("ul", { className: "pagination" },
                    React.createElement("li", { className: "page-item" + prevDisabled, onClick: function () { _this.props.onPrevious(); } },
                        React.createElement("a", { className: "page-link", href: "#" }, "Previous")),
                    this.renderPageButtons(),
                    React.createElement("li", { className: "page-item" + nextDisabled, onClick: function () { _this.props.onNext(); } },
                        React.createElement("a", { className: "page-link", href: "#" }, "Next"))))));
    };
    return Pagination;
}(React.Component));

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

var ImbaTable = /** @class */ (function (_super) {
    __extends(ImbaTable, _super);
    function ImbaTable(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            page: 1,
            rowsPerPage: 5,
            searchText: '',
            sortColId: 1,
            sortAsc: true,
        };
        return _this;
    }
    ImbaTable.prototype.componentDidUpdate = function (prevProps, prevState, snapshot) {
        if (prevProps.data.length !== this.props.data.length) {
            this.setState({ page: 1 });
        }
    };
    ImbaTable.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, data = _a.data;
        var cols = children.filter(function (child) {
            return !(!child.props || !child.props.field || !child.props.label);
        });
        // Filtering
        var filteredData = data;
        if (this.state.searchText.length > 0) {
            filteredData = data.filter(function (row) {
                return Object.keys(row).find(function (key) {
                    var value = row[key].toString();
                    return (value.toLowerCase().indexOf(_this.state.searchText.toLocaleLowerCase()) !== -1);
                });
            });
        }
        // Sorting
        var sortedData = filteredData.sort(function (row1, row2) {
            var sortCol = cols.find(function (col) {
                return col.props.id === _this.state.sortColId;
            });
            if (!sortCol) {
                return 0;
            }
            var sortField = sortCol.props.field;
            if (row1[sortField] < row2[sortField]) {
                return (_this.state.sortAsc ? -1 : 1);
            }
            else if (row1[sortField] > row2[sortField]) {
                return (_this.state.sortAsc ? 1 : -1);
            }
            return 0;
        });
        // Paging
        var pages = Math.ceil(sortedData.length / this.state.rowsPerPage);
        var startIndex = (this.state.page - 1) * this.state.rowsPerPage;
        var endIndex = startIndex + this.state.rowsPerPage;
        if (endIndex > data.length) {
            endIndex = data.length;
        }
        var pagedData = sortedData.slice(startIndex, endIndex);
        return (React.createElement("div", { className: "react-imba-table" },
            React.createElement(SearchField, { onChange: function (searchText) {
                    _this.setState({ searchText: searchText, page: 1 });
                } }),
            React.createElement("table", { className: "table table-striped" },
                React.createElement("thead", null,
                    React.createElement("tr", null, cols.map(function (col) {
                        return (React.createElement(ColumnHeader, { id: col.props.id, key: col.props.id, label: col.props.label, sortable: col.props.sortable, sortColId: _this.state.sortColId, sortAsc: _this.state.sortAsc, onClick: function (sortColId, sortAsc) {
                                _this.setState({ sortColId: col.props.id, sortAsc: sortAsc });
                            } }));
                    }))),
                React.createElement("tbody", null, pagedData.map(function (row) { return React.createElement("tr", { key: row.id }, cols.map(function (col) { return React.createElement(Cell, { key: col.props.id, columnProps: col.props, data: row[col.props.field] }); })); }))),
            React.createElement(Pagination, { pages: pages, currentPage: this.state.page, onPageSelected: function (page) {
                    _this.setState({ page: page });
                }, onPrevious: function () {
                    if (_this.state.page > 1) {
                        _this.setState({ page: _this.state.page - 1 });
                    }
                }, onNext: function () {
                    if (_this.state.page < pages) {
                        _this.setState({ page: _this.state.page + 1 });
                    }
                } }),
            "Showing Page ",
            this.state.page,
            " of ",
            pages));
    };
    return ImbaTable;
}(React.Component));

var ImbaTableColumn = /** @class */ (function (_super) {
    __extends(ImbaTableColumn, _super);
    function ImbaTableColumn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImbaTableColumn.prototype.render = function () {
        return React.createElement("div", null, "col");
    };
    return ImbaTableColumn;
}(React.Component));

exports.ImbaTableColumn = ImbaTableColumn;
exports.ImbaTableContentType = ImbaTableContentType$1;
exports.default = ImbaTable;
