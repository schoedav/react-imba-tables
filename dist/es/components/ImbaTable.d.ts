import React, {ReactElement} from 'react';

interface DataProps {
    id: number;
}
interface State {
    page: number;
    rowsPerPage: number;
    searchText: string;
    sortColId: number;
    sortAsc: boolean;
}
interface Props {
    data: DataProps[];
    children: ReactElement[];
}
declare class ImbaTable extends React.Component<Props, State> {
    constructor(props: Props);
    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void;
    render(): JSX.Element;
}
export default ImbaTable;
