import {Router, Switch, Route} from "react-router-dom";

import MainPage from "./components/main-page/MainPage";

import history from "./history";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <MainPage/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
