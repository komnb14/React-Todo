import React from 'react';
import {IoMdCheckbox} from 'react-icons/io';
import {MdCheckBoxOutlineBlank} from 'react-icons/md';
import './TodoItem.css';

function TodoItem({todo, onCheckToggle, onInsertToggle,onChangeSelectedTodo }) {
    const { id ,text, checked   } = todo;
    return (
        <div className="todoItem">
            <div className={`content ${checked ? 'checked' : ''}`}>
                {checked ? <IoMdCheckbox onClick={() => {onCheckToggle(id)}} />: <MdCheckBoxOutlineBlank onClick={() => {onCheckToggle(id)}}/> }
               <div className="text" onClick={() => {onChangeSelectedTodo(todo); onInsertToggle();}}>{text}</div>
            </div>
        </div> 
    )
}

export default TodoItem
