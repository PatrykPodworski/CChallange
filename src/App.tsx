import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

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

const ROUTES = {
  submissions: "/submissions",
  highscores: "/highscores",
};

const Header = () => (
  <header>
    <h1>C Challange</h1>
    <nav>
      <Link to={ROUTES.submissions}>Solve</Link>
      <Link to={ROUTES.highscores}>Top 3</Link>
    </nav>
  </header>
);

export default App;
