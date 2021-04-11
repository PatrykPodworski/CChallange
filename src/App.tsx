import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ROUTES from "./constants/ROUTES";
import Header from "./Header/Header";
import SubmitForm from "./SubmitForm/SubmitForm";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path={ROUTES.submissions}>
          <SubmitForm />
        </Route>
        <Route path={ROUTES.highscores}>
          <Highscores />
        </Route>
      </Switch>
    </Router>
  );
}

const Highscores = () => <div>Highscores</div>;

export default App;
