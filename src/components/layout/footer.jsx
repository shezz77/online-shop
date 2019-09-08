import React from 'react';

const Footer = () => {
    return (
        <>
            {/* Newsletter */}
            <div className="newsletter">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="newsletter_container d-flex flex-lg-row flex-column align-items-lg-center align-items-center justify-content-lg-start justify-content-center">
                                <div className="newsletter_title_container">
                                    <div className="newsletter_icon"><img src="images/send.png" alt=""/></div>
                                    <div className="newsletter_title">Sign up for Newsletter</div>
                                    <div className="newsletter_text"><p>...and receive %20 coupon for first shopping.</p></div>
                                </div>
                                <div className="newsletter_content clearfix">
                                    <form action="#sa" className="newsletter_form">
                                        <input type="email" className="newsletter_input" required="required" placeholder="Enter your email address"/>
                                        <button className="newsletter_button">Subscribe</button>
                                    </form>
                                    <div className="newsletter_unsubscribe_link"><a href="#sa">unsubscribe</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}

            <footer className="footer">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 footer_col">
                            <div className="footer_column footer_contact">
                                <div className="logo_container">
                                    <div className="logo"><a href="#sa">OneTech</a></div>
                                </div>
                                <div className="footer_title">Got Question? Call Us 24/7</div>
                                <div className="footer_phone">+38 068 005 3570</div>
                                <div className="footer_contact_text">
                                    <p>17 Princess Road, London</p>
                                    <p>Grester London NW18JR, UK</p>
                                </div>
                                <div className="footer_social">
                                    <ul>
                                        <li><a href="#sa"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#sa"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#sa"><i className="fab fa-youtube"></i></a></li>
                                        <li><a href="#sa"><i className="fab fa-google"></i></a></li>
                                        <li><a href="#sa"><i className="fab fa-vimeo-v"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 offset-lg-2">
                            <div className="footer_column">
                                <div className="footer_title">Find it Fast</div>
                                <ul className="footer_list">
                                    <li><a href="#sa">Computers & Laptops</a></li>
                                    <li><a href="#sa">Cameras & Photos</a></li>
                                    <li><a href="#sa">Hardware</a></li>
                                    <li><a href="#sa">Smartphones & Tablets</a></li>
                                    <li><a href="#sa">TV & Audio</a></li>
                                </ul>
                                <div className="footer_subtitle">Gadgets</div>
                                <ul className="footer_list">
                                    <li><a href="#sa">Car Electronics</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2">
                            <div className="footer_column">
                                <ul className="footer_list footer_list_2">
                                    <li><a href="#sa">Video Games & Consoles</a></li>
                                    <li><a href="#sa">Accessories</a></li>
                                    <li><a href="#sa">Cameras & Photos</a></li>
                                    <li><a href="#sa">Hardware</a></li>
                                    <li><a href="#sa">Computers & Laptops</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2">
                            <div className="footer_column">
                                <div className="footer_title">Customer Care</div>
                                <ul className="footer_list">
                                    <li><a href="#sa">My Account</a></li>
                                    <li><a href="#sa">Order Tracking</a></li>
                                    <li><a href="#sa">Wish List</a></li>
                                    <li><a href="#sa">Customer Services</a></li>
                                    <li><a href="#sa">Returns / Exchange</a></li>
                                    <li><a href="#sa">FAQs</a></li>
                                    <li><a href="#sa">Product Support</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>

            {/* Copyright */}


            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col">

                            <div
                                className="copyright_container d-flex flex-sm-row flex-column align-items-center justify-content-start">
                                <div
                                    className="copyright_content">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                    Copyright &copy;
                                    <script>document.write(new Date().getFullYear());</script>
                                    All rights reserved | This template is made with <i className="fa fa-heart"
                                                                                        aria-hidden="true"></i> by <a
                                        href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
                                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                </div>
                                <div className="logos ml-sm-auto">
                                    <ul className="logos_list">
                                        <li><a href="#sa"><img src="images/logos_1.png" alt=""/></a></li>
                                        <li><a href="#sa"><img src="images/logos_2.png" alt=""/></a></li>
                                        <li><a href="#sa"><img src="images/logos_3.png" alt=""/></a></li>
                                        <li><a href="#sa"><img src="images/logos_4.png" alt=""/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;