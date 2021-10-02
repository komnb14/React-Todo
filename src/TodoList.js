import React from 'react'
import TodoItem from './TodoItem'
import './TodoList.css'

function TodoList({todos, onCheckToggle, onInsertToggle, onChangeSelectedTodo}) {
    return (
        <div className='todoList'>
            <div>{todos.map(todos => (<TodoItem todo={ todos }  key={todos.id}  onCheckToggle={onCheckToggle} onInsertToggle={onInsertToggle} onChangeSelectedTodo={onChangeSelectedTodo}/>))}</div>
        </div>
    )
}

export default TodoList
