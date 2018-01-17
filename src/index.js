import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import todoApp from "./reducers";
import App from "./components/App";
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const store = createStore(todoApp);

render(
	<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
		<Provider store={store}>
			<App />
		</Provider>
	</MuiThemeProvider>,
	document.getElementById("root")
);
