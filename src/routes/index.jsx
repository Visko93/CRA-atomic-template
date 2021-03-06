import { Route, Switch } from "react-router-dom";

import Home from "../components/pages/Home";

export default function Routes() {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
