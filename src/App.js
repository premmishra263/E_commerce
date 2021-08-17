import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import './App.css';
import Home from './home/home';
import SignIn from './user/login';
import SignUp from "./user/sign-up";

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
