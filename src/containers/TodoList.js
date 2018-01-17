import { connect } from "react-redux";
import PropTypes from "prop-types";
import React from "react";
import { toggleTodo } from "../actions";
import Todo from "../components/Todo";
import { List } from 'material-ui/List';

const TodoList = ({todos, onTodoClick}) => (
    <List data-test="todo-list">
        {todos.map((todo) => (
            <Todo key={todo.id} id={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
        ))}
    </List>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
};

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case "SHOW_COMPLETED": 
            return todos.filter(t => t.completed);
        case "SHOW_ACTIVE":
            return todos.filter(t => !t.completed);
        case "SHOW_ALL":
        default:
            return todos;
    }
}

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
