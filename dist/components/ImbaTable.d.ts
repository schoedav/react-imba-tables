import React, { ReactElement } from 'react';
interface Props {
    data: any[];
    children: ReactElement[];
}
declare class ImbaTable extends React.Component<Props> {
    render(): JSX.Element;
}
export default ImbaTable;
