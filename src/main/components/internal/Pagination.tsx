import React from 'react'

interface Props {
    currentPage: number;
    pages: number;
    onPageSelected: (page: number) => void;
    onPrevious: () => void;
    onNext: () => void;
}

const Pagination: React.FC<Props> = ({pages, currentPage, onPageSelected, onPrevious, onNext}) => {

    const renderPageButtons = () => {
        return Array.from(Array(pages).keys()).map((pageNumber, index) => {

            const isActive = (pageNumber+1 === currentPage ? ' active' : '');

            return (
                <li key={index} className={`page-item${isActive}`} onClick={() => { onPageSelected(pageNumber+1); }}>
                    <a className="page-link" href="#">{pageNumber+1}</a>
                </li>
            );
        })
    };

    const prevDisabled = (currentPage <= 1 ? ' disabled' : '');
    const nextDisabled = (currentPage >= pages ? ' disabled' : '');

    return (
        <>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end">
                    <li className={`page-item${prevDisabled}`} onClick={() => { onPrevious(); }}>
                        <a className="page-link" href="#">Previous</a>
                    </li>
                    {renderPageButtons()}
                    <li className={`page-item${nextDisabled}`} onClick={() => { onNext(); }}>
                        <a className="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </>
    );

};

export default Pagination;
