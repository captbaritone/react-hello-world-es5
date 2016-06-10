import React from 'react';
import {render} from 'react-dom';

let author = {
    first: 'Jordan',
    last: 'Eldredge'
}

const DEFAULT_NAME = 'Jordan';

function getGreeting(name, greeting='Hello') {
    return `${greeting} ${name}!`
}

class Greeter extends React.Component {
    render() {
        let greeting = getGreeting(this.props.name, 'Welcome');
        return <h1>{greeting}</h1>
    }
};

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: DEFAULT_NAME};
    }
    handleNameChange(e) {
        this.setState({name: e.target.value});
    }
    render() {
        return <div>
            <Greeter name={this.state.name} />
            <p>What's your name?</p>
            <input onChange={this.handleNameChange.bind(this)} />
        </div>;
    }
};

render(
    <Page />,
    document.getElementById('example')
);
