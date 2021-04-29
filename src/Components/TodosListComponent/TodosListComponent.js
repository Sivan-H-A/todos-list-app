import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup,Container, ListGroup } from 'react-bootstrap'
import TodosItemComponent from '../TodosItemComponent/TodosItemComponent'
import './TodosListComponent.css'

export default function TodosListComponent({todosList, onDeleteItem, onCheckedTodo}) {
    const [sum, setSum] = useState(todosList.length);
    const [toggleBtn1, setToggleBtn1] = useState(true);
    const [toggleBtn2, setToggleBtn2] = useState(false);
    const [toggleBtn3, setToggleBtn3] = useState(false);
    const [completed, setCompleted] = useState(0);
    const [filterList, setFilterList] = useState([]);

    const todosListGroup = []; 

    useEffect(() => {
        setSum(todosList.length - completed)
        setFilter();
    }, [todosList,completed]);

    useEffect(() => {
        setFilter()
    }, [toggleBtn1, toggleBtn2,toggleBtn3])

    function setFilter(){
        if(toggleBtn3){
            setFilterList(todosList.filter(x=> x.completed));
        }
        if(toggleBtn2){
            setFilterList(todosList.filter(x=> !x.completed));
        }
        if(toggleBtn1){
            let tempArr = [];
            setFilterList(tempArr.concat(todosList));
        }
    }
    
    function onCheckedItem(itemId, checked){
        setCompleted(checked? completed+1: completed-1);
        onCheckedTodo(itemId,checked);
    };
    function onDeleteItemCompleted(item){
        if(item.completed){
            setCompleted(completed -1);
        }
        onDeleteItem(item);
    }
    
    filterList.map((item)=>{
        todosListGroup.push(
            <ListGroup.Item className="c-todo-item row" key={item.id}>         
               <TodosItemComponent todoItem ={item}
                                    onCheckedItem={onCheckedItem} 
                                    onDeleteItem={ (e)=> onDeleteItemCompleted(e)}/>
            </ListGroup.Item>       
        );
    });

    return (
        <Container>
            <ListGroup variant="flush" >
                {todosListGroup}         
            </ListGroup>
            <div className="c-todos-list-info">
                <h6 className="text-center c-todo-info-title">{sum} Items left</h6>
                <ButtonGroup className="c-info-listgroup">
                    <Button variant="outline-primary" className={toggleBtn1 ? "c-btn-marked":""} 
                            onClick={(e)=>{setToggleBtn1(true); setToggleBtn2(false); setToggleBtn3(false);}}>All</Button>
                    <Button variant="outline-primary" className={toggleBtn2 ? "c-btn-marked":""} 
                            onClick={(e)=>{setToggleBtn2(true); setToggleBtn1(false); setToggleBtn3(false);}}>Active</Button>
                    <Button variant="outline-primary" className={toggleBtn3 ? "c-btn-marked":""} 
                            onClick={(e)=>{setToggleBtn3(true); setToggleBtn1(false); setToggleBtn2(false);}}>Completed</Button>
                </ButtonGroup>
            </div>
        </Container>
    )
}
