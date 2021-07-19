// State is similar to props, but it is private and fully controlled by the component.
import React from 'react';
import ReactDOM from 'react-dom'


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date : new Date()}
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick = () => {
        this.setState({date : new Date()})
    }

    render() {
        return (
            <div>
                <h1>Hello, World!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

ReactDOM.render(<Clock/>, document.getElementById('root'));

export {Clock};

// There are three things you should know about setState().
// 1. Do Not Modify State Directly
// 2. State Updates May Be Asynchronous
// 3. State Updates are Merged