import React from 'react'

interface Props {
    onChange: (text: string) => void;
}

class ImbaTableSearchField extends React.Component<Props> {

    render() {

        return (
            <div>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Search..."
                    onChange={(event) => { this.props.onChange(event.target.value); }}
                />
            </div>
        );
    }
}

export default ImbaTableSearchField;
