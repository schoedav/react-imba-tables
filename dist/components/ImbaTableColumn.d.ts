import React from 'react';
interface Props {
    id: number;
    field: string;
    label: string;
}
declare class ImbaTableColumn extends React.Component<Props> {
    render(): JSX.Element;
}
export default ImbaTableColumn;
