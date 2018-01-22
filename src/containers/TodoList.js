import { connect } from "react-redux";
import PropTypes from "prop-types";
import React from "react";
import { deleteTodo, toggleTodo } from "../actions";
import Todo from "../components/Todo";
import { List } from 'material-ui/List';

class TodoList extends React.PureComponent{

    render () {
        const { todos, totalCount, onTodoClick, onTodoDelete, touchDevice } = this.props;

        const todoHeigh = 48;
        const listHeight = todoHeigh * totalCount;

        return (
            <List data-test="todo-list" style={{height: `${listHeight}px`}}>
                {todos.map((todo, idx) => (
                    <Todo key={idx} id={todo.id} idx={idx} {...todo} touchDevice={touchDevice} handleCheck={() => onTodoClick(todo.id)} handleDelete={() => onTodoDelete(todo.id)}/>
                ))}
            </List>
        );
    }
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired,
    onTodoDelete: PropTypes.func.isRequired,
    totalCount: PropTypes.number.isRequired,
    touchDevice: PropTypes.bool.isRequired
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
        todos: getVisibleTodos(state.todos, state.visibilityFilter),
        totalCount: state.todos.length
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id));
        },
        onTodoDelete: (id) => {
            dispatch(deleteTodo(id));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
