import React, { Component } from 'react';
import { TodoList } from '../components';
import { connect } from 'react-redux';
import { checkTodo } from '../actions/todoActions';

class Home extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.checkTodo(1);
        console.log('handleClick');
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Test</button>
                <TodoList />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        todos: state.todo.get('todos').toJS()
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        checkTodo: (index) => {
            dispatch(checkTodo(index));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);