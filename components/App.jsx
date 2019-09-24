import React, {Component} from 'react';

import List from './List';

import {getList} from '../sources/list';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            count: 6
        };
    }

    componentDidMount() {
        getList({count: this.state.count})
            .then(({data}) => this.setState({list: data}));
    }

    render() {
        const {list} = this.state;

        return (
            <div>
                <h3>ddd</h3>
                <List list={list}/>
            </div>
        );
    }
}

export default App;
