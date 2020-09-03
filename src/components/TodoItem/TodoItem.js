import React from "react";
import styles from "./todoitem.module.css"
const TodoItem = (props) => {
    return <ul className={styles.todoitem}>{props.todo.todoText}</ul>;
};

export default TodoItem;