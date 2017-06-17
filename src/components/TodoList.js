import React, { Component } from 'react';
import { Todo } from '.';

class TodoList extends Component {
    render() {
        const mapToComponents = (
            // this.state.todos.map( (todo, i) => {
            //     return <Todo todo={todo}
            //                  key={i} />
            // })
            <div></div>
        );

        return (
            <ul className="todolist">
                {mapToComponents}
            </ul>
        );
    }
}

export default TodoList;