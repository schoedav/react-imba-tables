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
import React from 'react';

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
export default Pagination;
