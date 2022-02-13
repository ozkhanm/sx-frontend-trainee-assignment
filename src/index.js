import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

import App from "./App";

import {reducer, Operation} from "./reducer/reducer";
import {ActionCreator} from "./reducer/action-creator";
import api from "./api";

const store = createStore(reducer, compose(
    applyMiddleware(thunk.withExtraArgument(api)),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f)
);

store.dispatch(Operation.getArticles())
    .then(() => store.dispatch(ActionCreator.changeLoadingStatus(true)));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);