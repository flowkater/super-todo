export const CHECK_TODO = 'CHECK_TODO';

export function checkTodo(index) {
    return {
        type: CHECK_TODO,
        index
    }
};