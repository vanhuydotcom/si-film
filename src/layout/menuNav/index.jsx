export default function MenuNav() {
    return (
        <div id="menuNav" className="menu">
            <div className="nav-menu close" id="navClose">
                <span className="line" />
            </div>
            <div className="mid_line" />
            <div className="menu_content" id="le_nav">
                <ol className="grid g3">
                    <li className>
                        <a href="index.html" className="inner_link">Home</a>
                    </li>
                    <li className>
                        <a href="works.html" className="inner_link">Works <sup>12</sup></a>
                    </li>
                    <li className>
                        <a href="expertise.html" className="inner_link">Expertise <sup>06</sup></a>
                    </li>
                    <li className>
                        <a href="about.html" className="inner_link">About</a>
                    </li>
                    <li className>
                        <a href="journal.html" className="inner_link">Journal <sup>19</sup></a>
                    </li>
                    <li className="mobile_link first">
                        <a href="awards.html" title="Careers" className="inner_link">Awards <sup>47</sup></a>
                    </li>
                    <li className="mobile_link">
                        <a href="brands.html" title="Brands" className="inner_link">Brands <sup>110</sup></a>
                    </li>
                    <li className="mobile_link">
                        <a href="careers.html" title="Careers" className="inner_link">Careers <sup>04</sup></a>
                    </li>
                    <li className="mobile_link">
                        <a href="inquiry.html" title="Inquire" className="inner_link">Inquiries</a>
                    </li>
                    <li className="mobile_link">
                        <a href="mailto:hello@fleava.com" title="Contact Us" className>Contact Us</a>
                    </li>
                </ol>
                <div className="address">
                    <div className="text">
                        <a href="sg.html" title="Fleava — Singapore Digital Agency" className="inner_link">
                            <h5>Singapore</h5>
                            <p>{/*<strong>FLEAVA PTE. LTD.</strong><br>*/}160 Robinson Road, #14-04 Singapore Business Federation Centre - 068914, Singapore<br /><br /></p>
                        </a>
                        <a href="id.html" title="Fleava — Indonesia Digital Agency" className="inner_link">
                            <h5>Bali</h5>
                            <p>{/*<strong>PT FLEAVA DIGITAL MEDIA</strong><br>*/}Jalan Merta Agung, No.25, <br />Kerobokan Kelod, Badung, Bali - 80361, Indonesia<br /><br /></p>
                        </a>
                        <h5 className="twocol">
                            <div className="twocol_col">
                                <a href="awards.html" title="Awards" className="inner_link">Awards <sup>47</sup></a>
                                <a href="brands.html" title="Brands" className="inner_link">Brands <sup>110</sup></a>
                                <a href="careers.html" title="Careers" className="inner_link">Careers <sup>04</sup></a>
                            </div>
                            <div className="twocol_col">
                                <a href="inquiry.html" title="Inquire" className="inner_link">Inquiries</a>
                                <a href="mailto:hello@fleava.com" title="Contact Us" className>Contact Us</a>
                                <a href="https://transform.fleava.com/" target="_blank" rel="noopener noreferrer" title="Transform with Fleava" className>Transform &nbsp; →</a>
                            </div>
                        </h5>
                        <p>
                            <br />
                            <a className href="https://www.facebook.com/fleava/" target="_blank" rel="noopener noreferrer" title="Fleava on Facebook">Fb &nbsp; &nbsp;</a>
                            <a className href="https://www.instagram.com/fleava/" target="_blank" rel="noopener noreferrer" title="Fleava on Instagram">Ig &nbsp; &nbsp;</a>
                            <a className href="https://twitter.com/fleava" target="_blank" rel="noopener noreferrer" title="Fleava on Twitter">Tw &nbsp; &nbsp;</a>
                            <a className href="https://www.linkedin.com/company/fleava/" target="_blank" rel="noopener noreferrer" title="Fleava on LinkedIn">In &nbsp; &nbsp;</a>
                            <a className href="https://www.behance.net/fleava" target="_blank" rel="noopener noreferrer" title="Fleava on Behance">Bē &nbsp; &nbsp;</a><br />
                            <a className="inner_link" href="terms.html">Terms. &nbsp; &nbsp;</a>
                            <a className="inner_link" href="sitemap.html">Sitemap.</a><br /><br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}