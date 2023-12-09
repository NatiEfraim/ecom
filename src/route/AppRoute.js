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

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Route exact path="/" component={HomePage} />

          {/* <Switch>
            <Route exact path="/" component={HomePage} />{" "}
          </Switch> */}
        </Router>
      </Fragment>
    );
  }
}

export default AppRoute;
