import React from "react";
import styles from "./app.module.css";

import TodoList from "./components/TodoList/TodoList";

class App extends React.Component {
    initialTodos = [
        {
            todoText: "1",
            complete: false,
        },
        {
            todoText: "2",
            complete: false,
        },
        {
            todoText: "3",
            complete: false,
        },
    ];

    state = { todos: this.initialTodos };

    render() {
        return (
            <div className="root">
                <TodoList todoState={this.state}></TodoList>
            </div>
        );
    }
}

export default App;
