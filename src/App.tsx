import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ROUTES from "./constants/ROUTES";
import Header from "./Header/Header";

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

const SubmitForm = () => <div>Submit form</div>;
const Highscores = () => <div>Highscores</div>;

export default App;
