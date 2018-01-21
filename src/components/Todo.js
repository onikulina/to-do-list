import React from "react";
import PropTypes from "prop-types";
import { ListItem } from 'material-ui/List';
import { Checkbox, IconButton } from 'material-ui';
import Trash from "../icons/trash";
import { grey300 } from 'material-ui/styles/colors';

class Todo extends React.PureComponent {
    
    state = {
        hover: false
    };
    
    handleEnter = () => {
        this.setState({
            hover: true
        });
    }

    handleLeave = () => {
        this.setState({
            hover: false
        });
    }

    render() {
        const { id, text, handleCheck, handleDelete, completed } = this.props;
        const { hover } = this.state;

        let trashIcon = null;
        if (hover) {
            trashIcon = (
                <IconButton onClick={handleDelete}>
                    <Trash color={grey300}/>
                </IconButton>
            );
        }


        return (
            <div onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
                <ListItem
                    leftCheckbox={<Checkbox checked={completed} onCheck={handleCheck} data-test={`checkbox-${id}`}/>}
                    primaryText={text}
                    style={{fontFamily: "Roboto,sans-serif", fontSize: "font-size"}}
                    data-test={`list-item-${id}`}
                    rightIconButton={trashIcon}
                />
            </div>
        );
    }
}

Todo.propTypes = {
    handleCheck: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
};

export default Todo;
