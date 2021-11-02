export default function AwardsCover() {
    return (
        <section className="section no-p grey" data-scroll-section>
            <a href="awards.html">
                <div className="offset_banner" style={{ backgroundColor: '#000' }} data-hover="Awards" data-scroll>
                    <div className="video">
                        <video muted="muted" data-scroll playsInline data-scroll-speed={-3} autoPlay loop="loop" data-poster="assets/img/awards/trophy.jpg">
                            <source src="assets/img/awards/trophy.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </a>
        </section>
    )
}