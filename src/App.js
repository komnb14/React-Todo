import { useEffect, useState } from 'react';
import { MdAddCircle } from 'react-icons/md';
import Template from './Template';
import TodoList from './TodoList';
import TodoInsert from './TodoInsert';
import axios from "axios";
import './App.css'

function App() {
  //Proxy test
  const callApi = async () => {
    axios.get('/api').then((res) => console.log(res.data.test));
  };
  useEffect(() => {
    callApi();
  });


  let nextId = 5;
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setinsertToggle] = useState(false)
  const [todos,setTodos] = useState([
    {
    id : 1,
    text : '할일',
    checked: true
    },
    {
      id : 2,
      text : '할일',
      checked: true
    },
    {
      id : 3,
      text : '할일',
      checked: false
    },
    {
      id : 4,
      text : '할일',
      checked: true
    },
    
  ])

  const onInsertToggle = () => {
    if(selectedTodo) {
      setSelectedTodo(null);
    }
    setinsertToggle(prev => !prev);
  }

  const onCheckToggle = (id) => {
    setTodos(todo => todo.map(
      todos => (todos.id === id) ? {...todos, checked: !todos.checked} : todos)
      );
  }
  const onInsertTodo = (text) => {
    if(text === '') {
        return alert('일을 입력해주세요');
    } else {
      const todo = {
        id: {nextId},
        text : text,
        checked : false
      }
      setTodos(todos => todos.concat(todo));
      nextId++;
    }
  };

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
    console.log(todo);
  };

  const onRemove = id => {
    onInsertToggle();
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }

  const onUpdate = (id, text) => {
    onInsertToggle();
    setTodos(todos => todos.map(todo => todo.id === id ? {...todo,text} : todo))
  };


  return (
    <div className="App">
      <Template todoLength={todos.length}>
        <TodoList todos={todos} onCheckToggle={onCheckToggle} onInsertToggle={onInsertToggle} onChangeSelectedTodo={onChangeSelectedTodo}/>
        <div className="addTodoButton" onClick={onInsertToggle}><MdAddCircle/></div>
        {insertToggle && 
        <TodoInsert 
        selectedTodo={selectedTodo}
          onInsertToggle={onInsertToggle}
          onInsertTodo={onInsertTodo}
          onRemove={onRemove}
          onUpdate={onUpdate}/> }
          
        </Template>
    </div>
  );
}

export default App;
