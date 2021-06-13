import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup,Container, ListGroup } from 'react-bootstrap'
import TodosItemComponent from '../TodosItemComponent/TodosItemComponent'
import './TodosListComponent.css'

export default function TodosListComponent({todosList, onDeleteItem, onCheckedTodo, onCheckedAll}) {
    //filterBtn has 3 values: All, Active, Completed
    const [filterBtn , setFilterBtn] = useState("All");  
    const [checked, setChecked] = useState(false);
    let completed = todosList.filter(x=>x.completed).length;
    let sum = todosList.length - completed;
    let filteredTodos = setFilter();

    useEffect(() => {
        onCheckedAll(checked);
    }, [checked])

    function setFilter(){
        if(filterBtn === "Completed"){
            return todosList.filter(x=> x.completed);
        }
        else if(filterBtn === "Active"){
            return todosList.filter(x=> !x.completed);
        }
        else if(filterBtn === "All"){
            return [...todosList];
        }
    }   

    return (
        <Container>
            {filteredTodos && filteredTodos.length>0 ? 
                <div className="c-mark-all">
                    <div className="c-mark-all-input">
                        <label for="checked">{checked?"Unmark All":"Mark All"}</label>
                        <input type="checkbox" 
                                name="checked" 
                                checked={checked} 
                                    onChange={()=>setChecked(!checked)}/>
                    </div>
                    <ListGroup variant="flush" >
                        {filteredTodos.map((item, index)=>{ 
                            return <ListGroup.Item className="c-todo-item row" key={index}>         
                                <TodosItemComponent todoItem ={item}
                                                    onCheckedItem={(data)=>onCheckedTodo(data)} 
                                                    onDeleteItem={(data)=> onDeleteItem(data)}/>
                            </ListGroup.Item>
                        })}
                    </ListGroup>
                </div>
             : null }         
            <div className="c-todos-list-info">
                <h6 className="text-center c-todo-info-title">{sum} Active items left</h6>
                <ButtonGroup className="c-info-listgroup">
                    <Button variant="outline-primary" 
                            className={filterBtn==="All" ? "c-btn-marked":""} 
                            onClick={()=>setFilterBtn('All')}>All</Button>
                    <Button variant="outline-primary" 
                            className={filterBtn==="Active" ? "c-btn-marked":""} 
                            onClick={()=>setFilterBtn('Active')}>Active</Button>
                    <Button variant="outline-primary" 
                            className={filterBtn==="Completed" ? "c-btn-marked":""} 
                            onClick={()=>setFilterBtn('Completed')}>Completed</Button>
                </ButtonGroup>
            </div>
        </Container>
    )
}
