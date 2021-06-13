import './App.css';
import {  Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState ,useEffect } from 'react';
import TodosListComponent from './Components/TodosListComponent/TodosListComponent';
import TodoItemModel from './Model/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    var localTodos = JSON.parse(localStorage.getItem('todos'));
    if(localTodos){
      setTodos(localTodos);
    }
  }, []);

  useEffect(() => {
    if(todos){
      localStorage.setItem('todos',JSON.stringify(todos));
    }
  }, [todos]);

  function onSubmit(e){
    e.preventDefault();
    if(input){
      setTodos([...todos, new TodoItemModel(input)]);
      setInput("");
    }
  }

  function onCheckedTodo(todoItem){
    const newTodo = new TodoItemModel(todoItem.title);
    newTodo.completed = !todoItem.completed;
    const index = todos.findIndex(x=>x.id===todoItem.id);
    todos.splice(index,1, newTodo);
    setTodos([...todos]);
  }
  function onDeleteItem(todoItem){
    const index = todos.findIndex(x=>x.id===todoItem.id);
    todos.splice(index,1);
    setTodos([...todos]);
  }
  function onCheckedAll(checked){
    todos.forEach(item=> item.completed=checked);
    setTodos([...todos]);
  }
 
  return (
    <Container className="App">
        <h1 className="text-center row todos-header">Todos</h1>
        <form onSubmit={onSubmit}>
          <input className="row todos-input" 
                placeholder="What's next?"
                value={input}
                onChange={(e)=>setInput(e.target.value)}></input>
        </form>
        {todos && todos.length>0 ? 
          <TodosListComponent 
            todosList={todos} 
            onDeleteItem={onDeleteItem} 
            onCheckedTodo={onCheckedTodo}
            onCheckedAll={onCheckedAll}/> 
          : "" 
        }
        
    </Container>
  );
}

export default App;
