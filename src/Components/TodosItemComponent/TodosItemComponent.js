import React, { useState,useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'

export default function TodosItemComponent({todoItem, onCheckedItem, onDeleteItem}) {
    const [disabledClass, setDisabledClass] = useState("");
    const [checked, setChecked] = useState(false);
    const [show, setShow] = useState(false);

    function onCheckboxClick(e){      
        setDisabledClass(e.target.checked? "c-todo-item-checked":"");
        setChecked(e.target.checked? true : false);  
        onCheckedItem(todoItem.id,e.target.checked);
    }

    useEffect(() => {     
        setChecked (todoItem.completed? true: false)
        setDisabledClass(todoItem.completed? "c-todo-item-checked":"");       
    }, [todoItem])

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
            <input type="checkbox" className="c-checkbox text-center col-2" checked={checked} onChange={(e)=> onCheckboxClick(e)}/>
            <label className={`${disabledClass} c-label col-8`}>
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
