export default function About() {
    return (
        <section className="section no-p" data-scroll-section>
            <a href="about.html">
                <div className="full_banner long wide reveal" data-scroll data-hover="About" data-style="fill">
                    <div className="image_reveal">
                        <div className="background-image" data-scroll data-scroll-speed={-6} data-bg="url('assets/img/home/about.jpg')" />
                    </div>
                    <div className="banner-overlay" />
                    <div className="q-container container-inner">
                        <div className="columns" data-scroll data-scroll-speed={-3} data-scroll-call="revMask" data-scroll-offset="10%">
                            <div className="column menu_fade ">
                                <h6 className="font_caps text_cover">/ The Agency</h6>
                                <h2 className="text_cover">We do amazing<br />things with amazing<br />People.</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </section>
    )
}