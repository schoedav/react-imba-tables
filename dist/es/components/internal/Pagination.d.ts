import React from 'react';

interface Props {
    currentPage: number;
    pages: number;
    onPageSelected: (page: number) => void;
    onPrevious: () => void;
    onNext: () => void;
}
declare class Pagination extends React.Component<Props> {
    renderPageButtons(): JSX.Element[];
    render(): JSX.Element;
}
export default Pagination;
