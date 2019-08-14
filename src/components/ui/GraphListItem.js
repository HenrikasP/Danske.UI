import React from 'react';

export default function GraphListItem(props) {
    const {data} = props;
    const className = 'graphlist-item ui-state-default ' + (data.completed === true ? 'completed' : 'pending');
    let alertClassName= '';

    if (data.error) {
        alertClassName = 'danger';;
    } else if (data.isTraversable) {
        alertClassName = 'success';
    } else {
        alertClassName = 'warning';
    }

    const getColor = (index) => data.path.indexOf(index) !== -1 ? 'item-selected' : '';

    return (
        <li className={className}>
            <p className={`alert alert-${ alertClassName }`}>
            {
                data.isTraversable ?
                    data.input.map((item, index) => <label key={`${data.id}-${index}`} className={getColor(index)}>{item}&nbsp;</label>) :
                    data.input.join(' ')
            }</p>
        </li>
    );
}
