import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Loading from "./Components/Loading/Loading";
import Shop from "./Pages/Shop/Shop";
import Login from "./Pages/Login/Login";
import MyPage from "./Pages/MyPage/MyPage";
import Product from "./Pages/Product/Product";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Nav" component={Nav} />
        <Route exact path="/Footer" component={Footer} />
        <Route exact path="/Loading" component={Loading} />
        <Route exact path="/Shop" component={Shop} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/MyPage" component={MyPage} />
        <Route exact path="/Product" component={Product} />
      </Switch>
    </Router>
  );
}

export default Routes;
