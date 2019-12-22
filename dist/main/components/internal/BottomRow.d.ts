import React from 'react';

interface Props {
    pages: number;
    currentPage: number;
    onPageSelected: (page: number) => void;
    onPrevious: () => void;
    onNext: () => void;
    startIndex: number;
    endIndex: number;
    numberOfEntries: number;
}
declare const BottomRow: React.FC<Props>;
export default BottomRow;
