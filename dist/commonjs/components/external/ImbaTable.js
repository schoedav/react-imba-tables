"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var SearchField_1 = __importDefault(require("../internal/SearchField"));
var Pagination_1 = __importDefault(require("../internal/Pagination"));
var ColumnHeader_1 = __importDefault(require("../internal/ColumnHeader"));
var Cell_1 = __importDefault(require("../internal/Cell"));
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
        return (react_1.default.createElement("div", { className: "react-imba-table" },
            react_1.default.createElement(SearchField_1.default, { onChange: function (searchText) {
                    _this.setState({ searchText: searchText, page: 1 });
                } }),
            react_1.default.createElement("table", { className: "table table-striped" },
                react_1.default.createElement("thead", null,
                    react_1.default.createElement("tr", null, cols.map(function (col) {
                        return (react_1.default.createElement(ColumnHeader_1.default, { id: col.props.id, key: col.props.id, label: col.props.label, sortable: col.props.sortable, sortColId: _this.state.sortColId, sortAsc: _this.state.sortAsc, onClick: function (sortColId, sortAsc) {
                                _this.setState({ sortColId: col.props.id, sortAsc: sortAsc });
                            } }));
                    }))),
                react_1.default.createElement("tbody", null, pagedData.map(function (row) { return react_1.default.createElement("tr", { key: row.id }, cols.map(function (col) { return react_1.default.createElement(Cell_1.default, { key: col.props.id, columnProps: col.props, data: row[col.props.field] }); })); }))),
            react_1.default.createElement(Pagination_1.default, { pages: pages, currentPage: this.state.page, onPageSelected: function (page) {
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
}(react_1.default.Component));
exports.default = ImbaTable;
