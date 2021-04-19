import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "./pages/search";
import Saved from "./pages/saved";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/">
            <Search />
          </Route>
          <Route path="api/books">
            <Saved />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
