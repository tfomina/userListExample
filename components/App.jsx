import React, {Component} from 'react';

import List from './List';
import Form from './Form';

import {getList} from '../sources/list';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            count: 6
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(e) {
        const { target } = e;

        this.setState({ count: target.value })
    }

    componentDidMount() {
        // console.log('did mount');
        getList({count: this.state.count})
            .then(({data}) => this.setState({list: data}));
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            getList({count: this.state.count})
                .then(({data}) => this.setState({list: data}));
        }
        // console.log('did update');
        // console.log('did update prevState: ', prevState);
        // console.log('did update ', this.state);

    }

    render() {
        // const { onInputChange } = this;

        // const {list} = this.state;

        // console.log('count: ', this.state.count);

        return (
            <div>
                {/*<input type="number" placeholder="count here" onChange={onInputChange} />*/}
                {/*<List list={list}/>*/}
                <Form />
            </div>
        );
    }
}

export default App;
