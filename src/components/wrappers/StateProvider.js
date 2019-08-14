import React, {Component} from 'react';
import {FILTER_ALL} from '../../services/filter';
import {objectWithOnly, wrapChildrenWith} from '../../util/common';
import {getAll, calculate} from '../../services/path';

class StateProvider extends Component {
    constructor() {
        super();
        this.state = {
            filter: FILTER_ALL,
            list: getAll()
        }
    }

    render() {
        let children = wrapChildrenWith(this.props.children, {
            data: this.state,
            actions: objectWithOnly(this, ['calculate', 'changeFilter'])
        });

        return <div>{children}</div>;
    }

    async calculate(input) {
        let updatedList = await calculate(this.state.list, {input});

        this.setState({list: updatedList});
    }

    changeFilter(filter) {
        this.setState({filter});
    }
}

export default StateProvider;
