import React from "react";
import { Route, Router, Switch } from "react-router-dom";

import history from "../history";
import Home from "./Home";
import Footer from "./Footer";
import DetailRecipe from "./DetailRecipe";

class App extends React.Component {
  render() {
    // console.log("state-----", this.state);
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/detail/:id" component={DetailRecipe} exact />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
