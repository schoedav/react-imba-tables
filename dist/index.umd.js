!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],t):t(e.reactImbaTables={},e.react)}(this,function(e,t){var n=function(e){function n(){e.apply(this,arguments)}return e&&(n.__proto__=e),(n.prototype=Object.create(e&&e.prototype)).constructor=n,n.prototype.renderPageButtons=function(){var e=this;return Array.from(Array(this.props.pages).keys()).map(function(n,r){return t.createElement("li",{key:r,className:"page-item"+(n+1===e.props.currentPage?" active":""),onClick:function(){e.props.onPageSelected(n+1)}},t.createElement("a",{className:"page-link",href:"#"},n+1))})},n.prototype.render=function(){var e=this,n=this.props.currentPage>=this.props.pages?" disabled":"";return t.createElement("div",null,t.createElement("nav",{"aria-label":"Page navigation example"},t.createElement("ul",{className:"pagination"},t.createElement("li",{className:"page-item"+(this.props.currentPage<=1?" disabled":""),onClick:function(){e.props.onPrevious()}},t.createElement("a",{className:"page-link",href:"#"},"Previous")),this.renderPageButtons(),t.createElement("li",{className:"page-item"+n,onClick:function(){e.props.onNext()}},t.createElement("a",{className:"page-link",href:"#"},"Next")))))},n}((t=t&&t.hasOwnProperty("default")?t.default:t).Component),r=function(e){function n(){e.apply(this,arguments)}return e&&(n.__proto__=e),(n.prototype=Object.create(e&&e.prototype)).constructor=n,n.prototype.render=function(){var e=this;return t.createElement("div",null,t.createElement("input",{type:"email",className:"form-control",placeholder:"Search...",onChange:function(t){e.props.onChange(t.target.value)}}))},n}(t.Component),a=function(e){function a(t){e.call(this,t),this.state={page:1,rowsPerPage:5,searchText:""}}return e&&(a.__proto__=e),(a.prototype=Object.create(e&&e.prototype)).constructor=a,a.prototype.componentDidUpdate=function(e,t,n){e.data.length!==this.props.data.length&&this.setState({page:1})},a.prototype.render=function(){var e=this,a=this.props,o=a.data,p=a.children.filter(function(e){return!(!e.props||!e.props.field||!e.props.label)}),s=o;this.state.searchText.length>0&&(s=o.filter(function(t){return Object.keys(t).find(function(n){return-1!==t[n].toString().toLowerCase().indexOf(e.state.searchText.toLocaleLowerCase())})}));var c=Math.ceil(s.length/this.state.rowsPerPage),i=(this.state.page-1)*this.state.rowsPerPage,l=i+this.state.rowsPerPage;l>o.length&&(l=o.length);var u=s.slice(i,l);return t.createElement("div",null,t.createElement(r,{onChange:function(t){e.setState({searchText:t,page:1})}}),t.createElement("table",{className:"table table-striped"},t.createElement("thead",null,t.createElement("tr",null,p.map(function(e){return t.createElement("th",{scope:"col",key:e.props.id},e.props.label)}))),t.createElement("tbody",null,u.map(function(e){return t.createElement("tr",{key:e.id},p.map(function(n){return t.createElement("td",{key:n.props.id},e[n.props.field])}))}))),t.createElement(n,{pages:c,currentPage:this.state.page,onPageSelected:function(t){e.setState({page:t})},onPrevious:function(){e.state.page>1&&e.setState({page:e.state.page-1})},onNext:function(){e.state.page<c&&e.setState({page:e.state.page+1})}}),"Showing Page ",this.state.page," of ",c)},a}(t.Component);e.ImbaTableColumn=function(e){function n(){e.apply(this,arguments)}return e&&(n.__proto__=e),(n.prototype=Object.create(e&&e.prototype)).constructor=n,n.prototype.render=function(){return t.createElement("div",null,"col")},n}(t.Component),e.default=a});
//# sourceMappingURL=index.umd.js.map
