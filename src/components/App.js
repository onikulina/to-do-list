import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import TodoList from "../containers/TodoList";

const App = () => (
    <div>
        <AddTodo />
        <TodoList />
        <Footer />
    </div>
);

export default App;
