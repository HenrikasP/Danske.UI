import React, {Component} from 'react';
import GraphList from '../ui/GraphList';
import StateProvider from './StateProvider';

class App extends Component {
    render() {
        return (
            <StateProvider>
                <GraphList/>
            </StateProvider>
        );
    }
}

export default App;
