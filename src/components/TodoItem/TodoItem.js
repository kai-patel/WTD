import React from "react";
import styles from "./todoitem.module.css"

const TodoItem = (props) => {
    return <ul onClick={() => props.click(props.todo.id)} className={`${styles.todoitem} ${props.todo.complete ? styles.complete : styles.incomplete}`}>{props.todo.todoText}</ul>;
};

export default TodoItem;