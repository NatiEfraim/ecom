// import React, { Component, Fragment } from "react";
// import { Router, Route, Switch } from "react-router";
// import HomePage from "../pages/HomePage";

// class AppRoute extends Component {
//   render() {
//     return (
//       <Fragment>
//         <Switch>
//           <Route exact to="/" component={HomePage} />
//         </Switch>
//       </Fragment>
//     );
//   }
// }

// export default AppRoute;
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import UserLoginPage from "../pages/UserLoginPage";
import ContactPage from "../pages/ContactPage";
import PrivacyPage from "../pages/PrivacyPage";
import PurchasePage from "../pages/PurchasePage";
import RefundPage from "../pages/RefundPage";

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={UserLoginPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/purchase" component={PurchasePage} />
          <Route exact path="/privacy" component={PrivacyPage} />
          <Route exact path="/refund" component={RefundPage} />
          {/* <Switch>
            <Route exact path="/" component={HomePage} />{" "}
          </Switch> */}
        </Router>
      </Fragment>
    );
  }
}

export default AppRoute;
