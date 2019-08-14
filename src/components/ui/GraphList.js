import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FilteredList from './FilteredList';
import {applyFilter } from '../../services/filter';

export default function GraphList(props) {
    const {list, filter, mode} = props.data;
    const {calculate, changeFilter, changeMode } = props.actions;
    const count = list.length;
    const items = applyFilter(list, filter);

    return (
        <div className="container">
            <div className="row">
                <div className="graphlist">
                    <Header {...{calculate, mode}}/>
                    <FilteredList {...{items}}/>
                    <Footer {...{count, filter, changeFilter, mode, changeMode}}/>
                </div>
            </div>
        </div>
    );
}
