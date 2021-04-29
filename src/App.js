import './App.css';
import {  Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState ,useEffect } from 'react';
import TodosListComponent from './Components/TodosListComponent/TodosListComponent';
import TodoItemModel from './Model/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

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

  function handleKeyDown(e){
    if(e.key==='Enter' && e.target.value){
      setTodos(todos.concat(new TodoItemModel(e.target.value)));
      e.target.value="";
    }
  }
  function onCheckedTodo(itemId,checked){
    let el = todos.find(x=>x.id===itemId);
    const tempTodo = new TodoItemModel(el.title);
    tempTodo.completed = checked;
    let tempArr = [];
    tempArr = tempArr.concat(todos);
    tempArr.splice(tempArr.indexOf(el),1,tempTodo);
    setTodos(tempArr);
  }
  function onDeleteItem(item){
    let tempArr = [];
      todos.splice(todos.findIndex(x=>x.id===item.id),1);
      tempArr= tempArr.concat(todos);
      console.log(tempArr);
      setTodos(tempArr);
  }
 
  return (
    <Container className="App">
        <h1 className="text-center row todos-header">Todos</h1>
        <input className="row todos-input" placeholder="What's next?" onKeyDown={(e)=>handleKeyDown(e)}></input>
        {todos && todos.length>0 ? <TodosListComponent todosList={todos} onDeleteItem={onDeleteItem} onCheckedTodo={onCheckedTodo}/> : "" }
        
    </Container>
  );
}

export default App;
