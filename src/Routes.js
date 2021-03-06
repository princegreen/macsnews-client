import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NewsList from "./containers/NewsList";
import NASAPoD	from "./containers/NASAPoD";
import Mylinks	from "./containers/Mylinks";
import NotFound from "./containers/NotFound";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
	<Route path="/NewsList/:id" exact component={NewsList} />
	<Route path="/NASAPoD" exact component={NASAPoD} />
	<Route path="/Mylinks" exact component={Mylinks} />
	{ /* Finally, catch all unmatched routes */ }
	<Route component={NotFound} />
  </Switch>;
