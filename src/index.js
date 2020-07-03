import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import App from "./App";
import firebase from 'firebase/app'
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
// import firebase from 'firebase/app'
import thunk from "redux-thunk";
import {
  ReactReduxFirebaseProvider,
} from "react-redux-firebase";
import { reduxFirestore, getFirestore, createFirestoreInstance } from "redux-firestore";
// import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from "./config/fbConfig";


const initialState = {};
const store = createStore(
  rootReducer, initialState, compose(
    applyMiddleware(thunk.withExtraArgument({getFirestore})),
    reduxFirestore(fbConfig))
);

const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
