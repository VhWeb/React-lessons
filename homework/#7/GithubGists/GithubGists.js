import createStore from "./redux/createStore";
import { Provider } from "react-redux";
import React from "react";
import Routes from "./Routes";

const store = createStore();

function GithubGists() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default GithubGists
