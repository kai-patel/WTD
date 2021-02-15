import React from "react";
import styles from "./inputarea.module.css";

const InputArea = (props) => {
    return (
        <form className={styles.inputarea} onSubmit={props.handleSubmit}>
            <input type="text" className={styles.inputelement} onChange={props.handleChange} />
            <input type="submit" value="Add" className={styles.inputelement} />
        </form>
    );
};

export default InputArea;
