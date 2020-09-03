import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./todolist.module.css";

const TodoList = (props) => {
    let todos = props.todoState.todos;
    return todos.map((todo, id) => <TodoItem todo={todo} key={id}></TodoItem>);
};

export default TodoList;
