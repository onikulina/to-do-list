import React from "react";
import Filter from "./Filter";
import AddTodo from "../containers/AddTodo";
import TodoList from "../containers/TodoList";
import { Paper } from 'material-ui';
import { $, merge } from "glamor";
import { grey50 } from 'material-ui/styles/colors';


const App = () => {

    const styles = merge(
        {
            width: "fit-content",
            padding: "0px 20px"
        },
        $(" .filter", {
            textAlign: "center",
        }),
        $(" .addTodo", {
            textAlign: "center",
        }),
        $(" .grey", {
            backgroundColor: grey50,
        }),
    );

    return (
        <Paper {...styles}>
            <AddTodo />
            <TodoList />
            <Filter />
        </Paper>
    );
};

export default App;
