import React, { useState,useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'

export default function TodosItemComponent({todoItem, onCheckedItem, onDeleteItem}) {
    const [show, setShow] = useState(false);
  
    function onDeleteTodoItem(){
        if(todoItem.completed){
            onDeleteItem(todoItem)
        }
        else{
            setShow(true);
        }
    }
    return (
        <>
            <input  type="checkbox" 
                    className={`${todoItem.completed ? "c-todo-item-checked" : "c-checkbox"} text-center col-2`} 
                    checked={todoItem.completed} 
                    onChange={()=>onCheckedItem(todoItem)}/>
            <label className={`${todoItem.completed ? "c-todo-item-checked" : "c-checkbox"} text-center c-label col-8`}>
                {todoItem.title}
            </label>
            <Button className="todo-cancel-item btn-danger" onClick={()=> onDeleteTodoItem()}>x</Button>
            <Modal show={show} onHide={()=>setShow(false)}>
                <Modal.Header closeButton>
                <Modal.Title>Delete Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete todo: {todoItem.title}</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={()=>setShow(false)}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=> {
                                                        setShow(false);
                                                        onDeleteItem(todoItem)}}>
                    OK
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
