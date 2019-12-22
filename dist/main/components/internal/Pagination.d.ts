import React from 'react';

interface Props {
    currentPage: number;
    pages: number;
    onPageSelected: (page: number) => void;
    onPrevious: () => void;
    onNext: () => void;
}
declare const Pagination: React.FC<Props>;
export default Pagination;
