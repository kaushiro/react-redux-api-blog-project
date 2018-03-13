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

import reducer from "./components/data/reducer";

import initial from "./components/data/initial";

const store = createStore(
    reducer,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

let articles = store.getState().get("articles");

// wrap Router with Provider
ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <App articles={ articles } />
        </Router>
    </Provider>,
    document.getElementById("root"),
);
