import React, { useState, useEffect } from 'react';
import { MdAddCircle } from 'react-icons/md';
import {TiPencil, TiTrash} from 'react-icons/ti';
import './TodoInsert.css'

function TodoInsert({onInsertToggle, onInsertTodo,selectedTodo, onRemove,onUpdate}) {
    const [value,setValue] = useState('')

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onSubmit = (e) => {
      e.preventDefault();
      onInsertTodo(value);
      setValue('');
      onInsertToggle();
    };

    useEffect(() => {
        if(selectedTodo) {
            setValue(selectedTodo.text);
        }
    }, [selectedTodo])

    return (
        <div>
           <div className="background" onClick={onInsertToggle} ></div>
           <form action="" onSubmit={selectedTodo ?  ()=>{onUpdate(selectedTodo.id,value)} : onSubmit}>
               <input type="text" value={value} onChange={onChange}/>
               {selectedTodo ? ( <div className="rewrite"><TiPencil
                onClick={() => {onUpdate(selectedTodo.id,value)}}/>
                <TiTrash 
                onClick={() => {onRemove(selectedTodo.id)}} /></div> ) :
              (<button type="submit" ><MdAddCircle/></button>)
                }
           </form>
        </div>
    )
}

export default TodoInsert
