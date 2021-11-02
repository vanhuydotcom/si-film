import { MainLayout } from "./layout"
import Home from "./page/home"


let routes = [
    {
        component: MainLayout,
        routes: [
            {
                component: Home,
                path: "/",
                exact: true
            }
        ]
    }
]
export default routes