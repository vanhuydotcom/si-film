import { BrowserRouter, Switch } from "react-router-dom";
import { RouteWithSubRoutes } from "./core/routeConfig";
import routes from "./routes";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, i) => {
          return (
            <RouteWithSubRoutes key={i} {...route} />
          )
        })}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
