import React from "react";
import PropTypes from "prop-types";
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

class Todo extends React.PureComponent {
    render() {
        const { id, text, onClick, completed } = this.props;
        return (
            <ListItem
                leftCheckbox={<Checkbox checked={completed} onCheck={onClick} data-test={`checkbox-${id}`}/>}
                primaryText={text}
                style={{fontFamily: "Roboto,sans-serif", fontSize: "font-size"}}
                data-test={`list-item-${id}`}
            />
        );
    }
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
};

export default Todo;
