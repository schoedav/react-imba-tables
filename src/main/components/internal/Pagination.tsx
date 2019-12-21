import React from 'react'

interface Props {
    currentPage: number;
    pages: number;
    onPageSelected: (page: number) => void;
    onPrevious: () => void;
    onNext: () => void;
}

class Pagination extends React.Component<Props> {

    renderPageButtons() {
        return Array.from(Array(this.props.pages).keys()).map((pageNumber, index) => {

            const isActive = (pageNumber+1 === this.props.currentPage ? ' active' : '');

            return (
                <li key={index} className={`page-item${isActive}`} onClick={() => { this.props.onPageSelected(pageNumber+1); }}>
                    <a className="page-link" href="#">{pageNumber+1}</a>
                </li>
            );
        })
    }

    render() {

        const prevDisabled = (this.props.currentPage <= 1 ? ' disabled' : '');
        const nextDisabled = (this.props.currentPage >= this.props.pages ? ' disabled' : '');

        return (
            <div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className={`page-item${prevDisabled}`} onClick={() => { this.props.onPrevious(); }}>
                            <a className="page-link" href="#">Previous</a>
                        </li>
                        {this.renderPageButtons()}
                        <li className={`page-item${nextDisabled}`} onClick={() => { this.props.onNext(); }}>
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Pagination;
