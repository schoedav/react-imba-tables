import React from 'react'
import Pagination from "./Pagination";

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

const BottomRow: React.FC<Props> = ({pages, currentPage, onPageSelected, onPrevious, onNext, startIndex, endIndex, numberOfEntries}) => {

    return (
        <div className="row">
            <div className="col mb-3">
                Showing {startIndex} to {endIndex} of {numberOfEntries} entries
            </div>
            <div className="col mb-3">
                <Pagination
                    pages={pages}
                    currentPage={currentPage}
                    onPageSelected={onPageSelected}
                    onPrevious={onPrevious}
                    onNext={onNext}
                />
            </div>
        </div>
    )
};

export default BottomRow;
