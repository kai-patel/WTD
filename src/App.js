import React from "react";
import styles from "./app.module.css";

import TodoList from "./components/TodoList/TodoList";
import InputArea from "./components/InputArea/InputArea";

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

    state = { todos: this.initialTodos, value: "" };

    onClick = (key) => {
        let currentTodos = this.state.todos;
        let currentValue = this.state.value;

        for (let i = 0; i < currentTodos.length; i++) {
            if (currentTodos[i].id === key) {
                currentTodos.splice(i, 1);
            }
        }

        this.setState({ todos: currentTodos, value: currentValue });
        console.log(currentTodos);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.value) {
            let currentTodos = this.state.todos;
            let newTodo = {
                todoText: this.state.value,
                complete: false,
                id: currentTodos.length,
            };
            currentTodos.push(newTodo);
            this.setState({ todos: currentTodos, value: "" });
            e.target.reset();
        }
    };

    handleChange = (e) => {
        let currentTodos = this.state.todos;
        this.setState({ todos: currentTodos, value: e.target.value });
    };

    markComplete = (key) => {
        let currentTodos = this.state.todos;
        let currentValue = this.state.value;

        for (let i = 0; i < currentTodos.length; i++) {
            if (currentTodos[i].id === key) {
                currentTodos[i].complete = !currentTodos[i].complete;
            }
        }

        this.setState({ todos: currentTodos, value: currentValue });
        console.log(currentTodos);
    };

    render() {
        return (
            <div className={styles.approot}>
                <div className={styles.inputarea}>
                    <InputArea
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                    ></InputArea>
                </div>
                <div className="todolist">
                    <TodoList
                        markComplete={this.markComplete}
                        click={this.onClick}
                        todoState={this.state}
                    ></TodoList>
                </div>
            </div>
        );
    }
}

export default App;
