import React from "react";
import Filter from "./Filter";
import AddTodo from "../containers/AddTodo";
import TodoList from "../containers/TodoList";
import { Paper } from 'material-ui';
import { $, merge } from "glamor";
import { grey50 } from 'material-ui/styles/colors';

class App extends React.PureComponent {

    styles = merge(
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

    constructor(props) {
        super(props);
        this.state = { 
            width: 0,
            touchDevice: "ontouchstart" in window || navigator.maxTouchPoints ? true : false
        };
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () =>{
        this.setState({ width: window.innerWidth });
    }

    render() {
        const { width, touchDevice } = this.state;

        return (
            <Paper {...this.styles}>
                <AddTodo width={width}/>
                <TodoList touchDevice={touchDevice} />
                <Filter width={width} />
            </Paper>
        );
    }
};

export default App;
