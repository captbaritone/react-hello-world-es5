var React = require('react');
var ReactDOM = require('react-dom');

var Greeter = React.createClass({
    render: function() {
        return <h1>Hello, {this.props.name}!</h1>
    }
});

var Page = React.createClass({
    getInitialState: function() {
        return {name: 'Jordan'};
    },
    handleNameChange: function(e) {
        this.setState({name: e.target.value});
    },
    render: function() {
        return <div>
            <Greeter name={this.state.name} />
            <p>What's your name?</p>
            <input onChange={this.handleNameChange} />
        </div>;
    }
});

ReactDOM.render(
    <Page />,
    document.getElementById('example')
);
