export default function Carousel() {
    return (
        <section className="section small-pb x_hide" data-scroll-section>
            <div className="q-container container-inner menu_fade">
                <div className="columns short_container reveal">
                    <div className="column q-2-3">
                        <h6 className="font_caps">/ Expertise</h6>
                        <h3 className>Elevating <a href="brands.html">Brands</a> through innovation in Digital Transformation.</h3>
                    </div>
                    <div className="column q-1-3 flex_end flex_right">
                        <a href="expertise.html" className="magnet">What we do <span className="magnet_circle">
                            <span className="magnet_arrow">→</span></span></a>
                    </div>
                </div>
            </div>
            <div className="q-container container-inner overflow menu_fade">
                <div className="columns">
                    <div className="column" style={{ position: 'relative' }}>
                        <div className="carousel">
                            <div className="carousel__planes">
                                <div className="carousel__plane">
                                    <div className="carousel__image" data-hover="Drag">
                                        <div className="background-image" data-bg="url('assets/img/expertise/thumbs/strategy.jpg')" />
                                    </div>
                                    <a href="expertise/digital-strategy.html" className="carousel__text" data-hover="None">
                                        <span className="carousel__num font_caps">/ 01</span>
                                        <h4>Digital Strategy</h4>
                                        <p>Consumer Insights &amp; Trends, Go-To-Market Planning, Data Science &amp; Analytics, Product Strategy &amp; Roadmapping.</p>
                                    </a>
                                </div>
                                <div className="carousel__plane">
                                    <div className="carousel__image" data-hover="Drag">
                                        <div className="background-image" data-bg="url('assets/img/expertise/thumbs/branding.jpg')" />
                                    </div>
                                    <a href="expertise/branding.html" className="carousel__text" data-hover="None">
                                        <span className="carousel__num font_caps">/ 02</span>
                                        <h4>Branding</h4>
                                        <p>Brand Strategy, Brand Identity &amp; Positioning, Visual Language, Brand Messaging, Brand Implementation &amp; Guidelines.</p>
                                    </a>
                                </div>
                                <div className="carousel__plane">
                                    <div className="carousel__image" data-hover="Drag">
                                        <div className="background-image" data-bg="url('assets/img/expertise/thumbs/ux.jpg')" />
                                    </div>
                                    <a href="expertise/ux.html" className="carousel__text" data-hover="None">
                                        <span className="carousel__num font_caps">/ 03</span>
                                        <h4>User Experience</h4>
                                        <p>Experience Strategy, User Interface Design, Design Systems &amp; Style Guides, Product Prototyping &amp; Optimization.</p>
                                    </a>
                                </div>
                                <div className="carousel__plane">
                                    <div className="carousel__image" data-hover="Drag">
                                        <div className="background-image" data-bg="url('assets/img/expertise/thumbs/development.jpg')" />
                                    </div>
                                    <a href="expertise/development.html" className="carousel__text" data-hover="None">
                                        <span className="carousel__num font_caps">/ 04</span>
                                        <h4>Product Development</h4>
                                        <p>Technical Discovery &amp; Architecture, Website Development, eCommerce, Mobile &amp; Web App Development, CRM / ERM Platforms.</p>
                                    </a>
                                </div>
                                <div className="carousel__plane">
                                    <div className="carousel__image" data-hover="Drag">
                                        <div className="background-image" data-bg="url('assets/img/expertise/thumbs/production.jpg')" />
                                    </div>
                                    <a href="expertise/production.html" className="carousel__text" data-hover="None">
                                        <span className="carousel__num font_caps">/ 05</span>
                                        <h4>Media Production</h4>
                                        <p>Art Direction, Photography, Video Production, 360 Photography &amp; Video, Copywriting.</p>
                                    </a>
                                </div>
                                <div className="carousel__plane">
                                    <div className="carousel__image" data-hover="Drag">
                                        <div className="background-image" data-bg="url('assets/img/expertise/thumbs/marketing.jpg')" />
                                    </div>
                                    <a href="expertise/digital-marketing.html" className="carousel__text" data-hover="None">
                                        <span className="carousel__num font_caps">/ 06</span>
                                        <h4>Digital Marketing</h4>
                                        <p>Campaign Development, Digital Marketing &amp; Advertising, Search Engine Optimisation, Social Media Management.</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}