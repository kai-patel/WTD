import React from "react";
import styles from "./app.module.css";

import TodoList from "./components/TodoList/TodoList";

class App extends React.Component {
    initialTodos = [
        {
            todoText: "1",
            complete: false,
            id: 0,
        },
        {
            todoText: "2",
            complete: false,
            id: 1,
        },
        {
            todoText: "3",
            complete: true,
            id: 2,
        },
    ];

    state = { todos: this.initialTodos };

    onClick = (key) => {
        let currentTodos = this.state.todos;

        for (let i = 0; i < currentTodos.length; i++) {
            if (currentTodos[i].id === key) {
                currentTodos.splice(i, 1);
            }
        }

        this.setState({ todos: currentTodos });
        console.log(currentTodos);
    };

    render() {
        return (
            <div className="root">
                <TodoList
                    click={this.onClick}
                    todoState={this.state}
                ></TodoList>
            </div>
        );
    }
}

export default App;
