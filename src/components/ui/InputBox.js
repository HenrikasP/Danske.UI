import React from 'react';
import enhance from '../hoc/wrapInputBox';

function InputBox(props) {
    const { value, handleChange, handleKeyUp } = props;

    return (
        <input autoFocus
            type="text"
            className="form-control add-graph"
            value={value}
            onKeyUp={handleKeyUp}
            onChange={handleChange}
            placeholder="Enter path separated by space: eg. '1 2 0 3 0 2 0'"
        />
    );
}

export default enhance(InputBox);
