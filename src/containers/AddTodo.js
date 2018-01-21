import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import { TextField, FlatButton } from "material-ui";

class AddTodo extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            input: ""
        };
    }

    handleInputChange = (e) => {
        const input = e.target.value;
        this.setState({input: input});
    }

    handleSubmit = () => {
        const { onTodoSubmit } = this.props;
        const { input } = this.state;
        if (input.trim() !== "") {
            onTodoSubmit(input);
            this.setState({input: ""});
        }
    }

    render() {
        const { input } = this.state;

        return (
            <div className="addTodo">
                <TextField
                    name="todo"
                    value={input}
                    onChange={this.handleInputChange}
                    style={{margin: "15px"}}
                    data-test="input-add-todo"
                />
                <FlatButton
                    onClick={this.handleSubmit}
                    label="add to do"
                    data-test="button-add-todo"
                />
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {};
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoSubmit: input => {
            dispatch(addTodo(input));
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
