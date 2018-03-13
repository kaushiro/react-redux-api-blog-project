import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

// import the Router component
import { BrowserRouter as Router } from "react-router-dom";

// import the App component
import App from "./App";

// import in Immutable Map and List for our dummy data
import { Map, List } from "immutable";

import reducer from "./data/reducer";

import initial from "./data/initial";

const store = createStore(
    reducer,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// wrap Router with Provider
ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root"),
);
