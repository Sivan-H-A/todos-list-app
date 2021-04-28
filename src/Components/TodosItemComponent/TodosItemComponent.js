import React, { useState,useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'

export default function TodosItemComponent({todoItem, onCheckedItem, onDeleteItem}) {
    const [disabledClass, setDisabledClass] = useState("");
    const [disable, setDisable] = useState(false);
    const [show, setShow] = useState(false);



    function onCheckboxClick(e){
        setDisabledClass("c-todo-item-checked");
        setDisable(true);
        onCheckedItem(todoItem.id);
    }

    useEffect(() => {
        if(todoItem.completed){
            setDisable(true);
            setDisabledClass("c-todo-item-checked");
        }
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
            <input type="checkbox" className="c-checkbox text-center col-2"  disabled={disable} checked={disable} onChange={(e)=> onCheckboxClick(e)}/>
            <label className={`${disabledClass} c-label col-8`}>
                {todoItem.title}
            </label>
            <Button className="todo-cancel-item btn-danger" onClick={()=> onDeleteTodoItem()}>x</Button>
            <Modal show={show} onHide={()=>setShow(false)}>
                <Modal.Header closeButton>
                <Modal.Title>Delete Item</Modal.Title>
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
