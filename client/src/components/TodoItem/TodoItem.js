import React from "react";
import styles from "./todoitem.module.css";

const TodoItem = (props) => {
    return (
        <div className={styles.todo}>
            <ul
                onClick={() => props.click(props.todo.id)}
                className={`${styles.todoitem} ${
                    props.todo.complete ? styles.complete : styles.incomplete
                }`}
            >
                {props.todo.todoText}
            </ul>
            <button className={styles.removebutton} onClick={() => props.markComplete(props.todo.id)}></button>
        </div>
    );
};

export default TodoItem;
