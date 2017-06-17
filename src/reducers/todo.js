import * as todoActions from '../actions/todoActions';
import { fromJS } from 'immutable';

const todoInitialState = fromJS({
    todos: [{name: '성수랑 개발', done: false}, 
            {name: '회사일', done: false}, 
            {name: '운동하기', done: false}, 
            {name: '책읽기', done: false}]
})

export default function (state = todoInitialState, action = {}) { 
    const todos = state.get('todos');

    switch(action.type) {
        case todoActions.CHECK_TODO:
            console.log('CheckTodo');
            return state.set('todos', todos.update(action.index, todo => todo.set('done', !todo.done)));
        default:
            return state;
    }
}