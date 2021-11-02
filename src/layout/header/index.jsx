export default function Header() {
    return (
        <header>
            <div className="header-wrap">
                <a href="index.html" className="logo" id="main-logo" title="Si film Media">
                    <div className="logo-wrap" id="logo-wrap">
                        <img src="/assets/img/general/fleava-logo.svg" alt="logo" title="Si film Media" height="20px" />
                    </div>
                </a>
                <div className="nav_right">
                    <a href="about.html" className=" font_caps">About</a>
                    <a href="works.html" className=" font_caps">Works</a>
                </div>
            </div>
            <div className="nav-menu" id="nav">
                <span className="line" />
                <span className="line" />
                <span className="text">Menu</span>
            </div>
        </header>
    )
}