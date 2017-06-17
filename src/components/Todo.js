import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            done: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({done: !this.state.done});
    }

    render() {
        const { todo } = this.props;
        const doneStyle = {textDecoration: 'line-through'};
        
        return (
            <li className="todo" style={this.state.done ? doneStyle : null} onClick={this.handleClick}>
                {todo.name}
            </li>
        );
    }
}

Todo.propTypes = {
    todo: PropTypes.object
}

Todo.defaultProps = {
    todo: {}
}

export default Todo;