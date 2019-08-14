import React from 'react';
import GraphListItem from './GraphListItem';
import {MSG_NO_ITEMS} from '../../assets/text/en_US';

export default function FilteredList(props) {
    const {items} = props;

    if (items.length === 0) {
        return (
            <p className="alert alert-info">{MSG_NO_ITEMS}</p>
        );
    }

    return (
        <ul className="list-unstyled">
            {items.map(item => (
                <GraphListItem key={item.id} data={item} />
            ))}
        </ul>
    );
}
