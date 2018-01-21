import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import TodoList from "../containers/TodoList";
import { Paper } from 'material-ui';
import { $, merge } from "glamor";

const App = () => {

    const styles = merge(
        {
            width: "fit-content",
            margin: "20px",
            padding: "0px 20px"
        },
        $(" .footer", {
            textAlign: "center",
        }),
        $(" .addTodo", {
            textAlign: "center",
        }),
    );

    return (
        <Paper {...styles}>
            <AddTodo />
            <TodoList />
            <Footer />
        </Paper>
    );
};

export default App;
