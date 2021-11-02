import { Route } from "react-router-dom";

export function RouteWithSubRoutes(route) {
    console.log(route)
    return (
        <Route
            path={route.path}
            render={props => {
                // pass the sub-routes down to keep nesting
                return <route.component {...props} routes={route.routes} />
            }}
        />
    );
}