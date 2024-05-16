import React from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleTodo}
/>
    <span onClick={toggleTodo}>{todo.text}</span>
    <button onClick={deleteTodo}>Delete</button>
    </li>
);
}

export default TodoItem;
