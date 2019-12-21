import React from 'react';

interface Props {
    onChange: (text: string) => void;
}
declare class SearchField extends React.Component<Props> {
    render(): JSX.Element;
}
export default SearchField;
