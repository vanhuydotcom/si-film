export default function FeaturedStories() {
    return (
        <section className="section no-pt grey motion_hover" data-fov={50} data-scroll-section>
            <div className="q-container container-inner">
                <div className="columns">
                    <div className="column menu_fade ">
                        <ol className="journal-list motion_hover_container">
                            <h6 className="font_caps">/ Featured Stories</h6>
                            <li className="journal-thumbnail-container link">
                                <div>
                                    <a href="journal/transform-story.html" className="hover-target">
                                        <div className="label">
                                            <h4>Commarts: Behind our Digital Transformation campaign</h4>
                                            <p>
                                                We've been interviewed with Communication Arts — the largest international trade journal of visual communications — about our campaign: Transform with Fleava.
                                                <span className="category font_caps">/ News &amp; Stories</span>
                                            </p>
                                            <span className="more">+</span>
                                        </div>
                                    </a>
                                </div>
                                <img className="motion_hover__img" data-src="/assets/img/journal/thumbs/transform.jpg" alt="" />
                            </li>
                            <li className="journal-thumbnail-container link">
                                <div>
                                    <a href="journal/designer-of-the-year-2020.html" className="hover-target">
                                        <div className="label">
                                            <h4>Fleava is nominated as the 2020 Designer of the Year on CSS Design Awards.</h4>
                                            <p>
                                                CSSDA is awarding those that inspire the rest of us to be more creative, more innovative and more inspiring. This year, Fleava is nominated as the Designer of the Year (Agency) on their 2020 DOTD Awards.
                                                <span className="category font_caps">/ News &amp; Stories</span>
                                            </p>
                                            <span className="more">+</span>
                                        </div>
                                    </a>
                                </div>
                                <img className="motion_hover__img" data-src="/assets/img/journal/thumbs/cssda.jpg" alt="" />
                            </li>
                            <li className="journal-thumbnail-container link">
                                <div>
                                    <a href="journal/agency-of-the-year-2020.html" className="hover-target">
                                        <div className="label">
                                            <h4>Fleava is nominated as the 2020 Agency of the Year on Awwwards.</h4>
                                            <p>
                                                Awwwards recognizes the talent and effort of industry-leading web professionals and agencies all around the world. This year, Fleava is nominated as the Agency of the Year on their 2020 Annual Awards.
                                                <span className="category font_caps">/ News &amp; Stories</span>
                                            </p>
                                            <span className="more">+</span>
                                        </div>
                                    </a>
                                </div>
                                <img className="motion_hover__img" data-src="/assets/img/journal/thumbs/agency-of-the-year-2020.jpg" alt="" />
                            </li>
                        </ol>
                        <a href="journal.html" className="magnet center">Explore the Journal <span className="magnet_circle">
                            <span className="magnet_arrow">→</span></span></a>
                    </div>
                </div>
            </div>
        </section>
    )
}