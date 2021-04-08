import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Loading from "./Components/Loading/Loading";
import Shop from "./Pages/Shop/Shop";
import Login from "./Pages/Login/Login";
import Join from "./Pages/Login/Join";
import MyPage from "./Pages/MyPage/MyPage";
import Product from "./Pages/Product/Product";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/nav" component={Nav} />
        <Route exact path="/footer" component={Footer} />
        <Route exact path="/loading" component={Loading} />
        <Route exact path="/" component={Shop} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/join" component={Join} />
        <Route exact path="/myPage" component={MyPage} />
        <Route exact path="/product" component={Product} />
      </Switch>
    </Router>
  );
}

export default Routes;
