import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";
import { Badge, FlatButton, IconButton } from "material-ui";
import { cyan500, grey300 } from 'material-ui/styles/colors';
import Done from "../icons/done";
import Progress from "../icons/progress";
import All from "../icons/all";

class FilterLink extends React.PureComponent {

    handleFilterClick = (e) => {
        e.preventDefault();
        this.props.onClick();
    }

    handleDisplayCount = () => {
        const { todos, filter } = this.props;
        switch (filter) {
            case "SHOW_COMPLETED": 
                return todos.filter(t => t.completed).length;
            case "SHOW_ACTIVE":
                return todos.filter(t => !t.completed).length;
            case "SHOW_ALL":
            default:
                return todos.length;
        }
    }

    handleDisplayIcon = () => {
        const { text } = this.props;
        switch (text) {
            case "active":
                return <Progress/>;
            case "completed":
                return <Done/>;
            default:
                return <All/>;
        }
    }

    render() {
        const { active, text, width } = this.props;

        const icon = this.handleDisplayIcon();

        return (
            <Badge
                badgeContent={this.handleDisplayCount()}
                primary={true}
                data-test={`filter-${text}`}
                badgeStyle={{top: "12px", right: "12px", backgroundColor: active ? cyan500 : grey300}}
            >
                {width > 400 && <FlatButton
                    onClick={this.handleFilterClick}
                    label={text}
                    disabled={active}
                />}
                {width <= 400 && <IconButton onClick={this.handleFilterClick} disabled={active}>
                    {icon}
                </IconButton>}
            </Badge>
        );
    }
}

FilterLink.propTypes = {
    active: PropTypes.bool.isRequired,
    filter: PropTypes.string.isRequired,
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired).isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    width: PropTypes.number.isRequired
};

const mapStateToProps = (state, props) => {
    return {
        active: props.filter === state.visibilityFilter,
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(props.filter));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink);
