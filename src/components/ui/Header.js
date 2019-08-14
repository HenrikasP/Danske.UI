import React from 'react';
import InputBox from './InputBox';

export default function Header(props) {
    const {calculate} = props;

    return (
        <header>
            <h1>Calculate path</h1>
            
            <InputBox {...{calculate}}/>
        </header>
    );
}
