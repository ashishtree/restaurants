import * as React from "react";
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
  Redirect,
} from "react-router-dom";
import RestaurantComponent from "./restaurants/Restaurants";

class Home extends React.Component<RouteComponentProps> {
  render() {
    return (
      <Switch>
        <Route exact={true} path="/">
          <Redirect to="/restaurants" />
        </Route>
        <Route
          path="/restaurants"
          exact={true}
          component={RestaurantComponent}
        />
      </Switch>
    );
  }
}

export default withRouter(Home);
