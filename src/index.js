import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import { RedaktiloDemoViewer } from "./components/RedaktiloDemoViewer";
import { RedaktiloDemoEditor } from "./components/RedaktiloDemoEditor";

import styles from "./styles.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/viewer"
          render={() => <RedaktiloDemoViewer className={styles.editor} />}
        />
        <Route
          path="/editor"
          render={() => <RedaktiloDemoEditor className={styles.editor} />}
        />
        <Route
          exact
          path="/"
          render={() => (
            <ul>
              <li>
                <Link to="/editor">Editor</Link>
              </li>
              <li>
                <Link to="/viewer">Viewer</Link>
              </li>
            </ul>
          )}
        />
      </Switch>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
