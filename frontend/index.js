import React, { Component } from "react";
import ReactDOM from "react-dom";
import { browserHistory } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./core/store";
import Main from "./container/Main";
import Kitchen from "./components/page/Kitchen";
import "./styles/index.less";

const store = configureStore();

class Init extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Main>
            <Switch>
              <Route exact path="/" component={Kitchen} />
            </Switch>
          </Main>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<Init />, document.querySelector("#app"));
