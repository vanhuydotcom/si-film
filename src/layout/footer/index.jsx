export default function Footer() {
    return (
        <footer data-scroll-section>
            <div className="footer__background background-image" data-scroll data-scroll-speed={-6} data-bg="url('assets/img/general/footer.jpg')" />
            <div className="overlay2" />
            <div className data-scroll data-scroll-speed={-4}>
                <div id="inner_footer">
                    <a id href="mailto:hello@fleava.com" className="main_link menu_fade">
                        hello@fleava.com
                    </a>
                    <a id href="mailto:hello@fleava.com" className="main_link menu_fade mobile">
                        Get in touch
                    </a>
                </div>
                <div className="address menu_fade">
                    <div className="text">
                        <div className="textrow">
                            <div className="textcol">
                                <h5>
                                    <a href="sg.html" className title="Fleava — Singapore Digital Agency">Singapore</a>
                                </h5>
                                <p><strong>FLEAVA PTE. LTD.</strong><br />160 Robinson Road, #14-04 <br />Singapore Business Federation <br />Centre - 068914, Singapore</p>
                            </div>
                            <div className="textcol">
                                <h5>
                                    <a href="id.html" className title="Fleava — Bali Digital Agency">Bali</a>
                                </h5>
                                <p><strong>PT FLEAVA DIGITAL MEDIA</strong><br />Jalan Merta Agung, No.25, <br />Kerobokan Kelod, Badung, <br />Bali - 80361, Indonesia</p>
                            </div>
                            <div className="textcol mob_half">
                                <h5>
                                    <a href="index.html" title="Home" className="inner_link">Home</a>
                                    <a href="works.html" title="Works" className="inner_link">Works <sup>12</sup></a>
                                    <a href="expertise.html" title="Expertise" className="inner_link">Expertise <sup>06</sup></a>
                                    <a href="about.html" title="About" className="inner_link">About</a>
                                    <a href="journal.html" title="Journal" className="inner_link">Journal <sup>19</sup></a>
                                </h5>
                            </div>
                            <div className="textcol mob_half">
                                <h5>
                                    <a href="awards.html" title="Awards" className="inner_link">Awards <sup>47</sup></a>
                                    <a href="brands.html" title="Brands" className="inner_link">Brands <sup>110</sup></a>
                                    <a href="careers.html" title="Careers" className="inner_link">Careers <sup>04</sup></a>
                                    <a href="inquiry.html" title="Inquire" className="inner_link">Inquiries</a>
                                    <a href="https://transform.fleava.com/" target="_blank" rel="noopener noreferrer" title="Transform with Fleava" className>Transform &nbsp; →</a>
                                </h5>
                            </div>
                        </div>
                        <p>
                            <a className href="https://www.facebook.com/fleava/" target="_blank" rel="noopener noreferrer" title="Fleava on Facebook">Fb &nbsp; &nbsp;</a>
                            <a className href="https://www.instagram.com/fleava/" target="_blank" rel="noopener noreferrer" title="Fleava on Instagram">Ig &nbsp; &nbsp;</a>
                            <a className href="https://twitter.com/fleava" target="_blank" rel="noopener noreferrer" title="Fleava on Twitter">Tw &nbsp; &nbsp;</a>
                            <a className href="https://www.linkedin.com/company/fleava/" target="_blank" rel="noopener noreferrer" title="Fleava on LinkedIn">In &nbsp; &nbsp;</a>
                            <a className href="https://www.behance.net/fleava" target="_blank" rel="noopener noreferrer" title="Fleava on Behance">Bē &nbsp; &nbsp;</a><br />
                            © <span id="copyrightYear">2020 </span> <a href="index.html" title="Fleava — Singapore, Bali, Jakarta Digital Agency">Fleava.&nbsp; &nbsp;</a>
                            <a className href="terms.html">Terms. &nbsp; &nbsp;</a>
                            <a className href="sitemap.html">Sitemap.</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}