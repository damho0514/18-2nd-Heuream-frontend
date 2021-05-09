import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loading from "./Components/Loading/Loading";
import Shop from "./Pages/Shop/Shop";
import Modal from "./Pages/Shop/Components/Modal";
import Login from "./Pages/Login/Login";
import Join from "./Pages/Login/Join";
import MyPage from "./Pages/MyPage/MyPage";
import Product from "./Pages/Product/Product";
import Nav from "./Components/Nav/Nav";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Nav" component={Nav} />
        <Route exact path="/Loading" component={Loading} />
        <Route exact path="/Shop" component={Shop} />
        <Route exact path="/Modal" component={Modal} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/MyPage" component={MyPage} />
        <Route exact path="/Product" component={Product} />
        <Route exact path="/loading" component={Loading} />
        <Route exact path="/join" component={Join} />
      </Switch>
    </Router>
  );
}

export default Routes;
