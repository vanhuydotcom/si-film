import { Switch } from "react-router"
import { RouteWithSubRoutes } from "../core/routeConfig"
import Header from "./header"
import Footer from "./footer"
import MenuNav from "./menuNav"

export const MainLayout = ({ routes }) => {
    return (
        <>
            <div className="cursor" data-cursor>
                <div className="inner">
                    <div className="circle"><span className="cursor_text" /></div>
                </div>
            </div>
            <div id="svg-sprite" style={{ display: 'none' }}>
                <svg xmlns="http://www.w3.org/2000/svg">
                    <symbol id="fleava_logo" viewBox="0 0 307 86">
                        <path d="M11.9,29.5H0v-4.1h11.9v-7.9c0-8.2,2.3-13.4,12.9-13.4c2.2,0,5,0.3,7.8,0.6v4.1c-2.2-0.4-5.1-0.6-7.2-0.6
            c-2.3,0-8.9,0-8.9,7.9v9.3h14.7v4.1H16.5v48.3h-4.6V29.5z" />
                        <path d="M48.4,4.7h4.6v73.1h-4.6V4.7z" />
                        <path d="M68.5,52.6c0.3,13.1,8.9,22.7,24.2,22.7c15.8,0,19.8-10.2,21.6-14.9h4.6c-4.3,13.2-13.2,19-26.7,19
            c-17.3,0-28.2-10.8-28.2-28.3c0-11,6.7-27.4,28.3-27.4c17.6,0,27.7,12.1,27.9,28.9H68.5z M115.1,48.5
            c-1.9-14.3-11.6-20.7-23.3-20.7c-13.1,0-21.3,8.2-23.3,20.7H115.1z" />
                        <path d="M129.3,41.6c1.7-13.2,8.2-17.8,23.6-17.8c14.8,0,23.3,3.6,23.3,15.4v29.4c0,3.9,0,6.2,3.4,6.2c1.5,0,3-0.3,4.5-0.8V78
            c-1.4,0.5-3.3,0.8-5.6,0.8c-6.2,0-6.2-4.5-6.2-11.5H172c-5.7,10.7-17.5,12.1-24.2,12.1c-4.4,0-20.8,0-20.8-16
            c0-10.7,8.8-14.4,19.1-15l17.7-1.2c5.3-0.4,7.7-1,7.7-7.5c0-7.1-3.9-11.9-18.8-11.9c-13.4,0-17.5,4.3-18.9,13.7H129.3z
            M171.6,48.5h-0.2c-1.1,1.2-3.8,2.5-8.1,2.8l-17.1,1.2c-8.5,0.6-14.6,3.1-14.6,11c0,10.6,10.4,11.9,16.6,11.9
            c10.1,0,23.5-4.7,23.5-17.2V48.5z" />
                        <path d="M185.9,25.4h5.2l22.2,47.7l22.2-47.7h5.2l-25.1,52.4h-4.6L185.9,25.4z" />
                        <path d="M248.1,41.6c1.7-13.2,8.2-17.8,23.6-17.8c14.8,0,23.3,3.6,23.3,15.4v29.4c0,3.9,0,6.2,3.4,6.2c1.5,0,3-0.3,4.5-0.8V78
            c-1.4,0.5-3.3,0.8-5.6,0.8c-6.2,0-6.2-4.5-6.2-11.5h-0.2c-5.7,10.7-17.5,12.1-24.2,12.1c-4.4,0-20.8,0-20.8-16
            c0-10.7,8.8-14.4,19.1-15l17.7-1.2c5.3-0.4,7.7-1,7.7-7.5c0-7.1-3.9-11.9-18.8-11.9c-13.4,0-17.5,4.3-18.9,13.7H248.1z
            M290.4,48.5h-0.2c-1.1,1.2-3.8,2.5-8.1,2.8L265,52.5c-8.5,0.6-14.6,3.1-14.6,11c0,10.6,10.4,11.9,16.6,11.9
            c10.1,0,23.5-4.7,23.5-17.2V48.5z" />
                        <polygon points="81,17.3 83.8,19 101.9,7.4 97.6,4.1   " />
                    </symbol>
                </svg>
            </div>
            <Header />
            <div className="menu-cover" id="menu-cover" />
            <div className="menu-overlay" id="menu-overlay" />
            <MenuNav />
            <div id="load_overlay" class="load_overlay"></div>
            <div id="dynamicLoad" class="dynamic_load">
                <div class="progress">
                    <div class="bar" id="dynamicBar"></div>
                </div>
            </div>
            <div id="barba-wrapper">
                <div className="barba-container">
                    <div data-scroll-container>
                        <div id="main">
                            <Switch>
                                {routes.map((route, i) => (
                                    <RouteWithSubRoutes key={i} {...route} />
                                ))}
                            </Switch>
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
