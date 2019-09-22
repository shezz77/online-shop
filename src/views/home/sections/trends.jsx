import React from 'react';

const Trends = () => {
    return (
        <div className="trends">
            <div className="trends_background" style={{ backgroundImage: 'url(images/trends_background.jpg)'}}></div>
            <div className="trends_overlay"></div>
            <div className="container">
                <div className="row">

                    {/* Trends Content */}
                    <div className="col-lg-3">
                        <div className="trends_container">
                            <h2 className="trends_title">Trends 2018</h2>
                            <div className="trends_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing Donec et.</p></div>
                            <div className="trends_slider_nav">
                                <div className="trends_prev trends_nav"><i className="fas fa-angle-left ml-auto"></i></div>
                                <div className="trends_next trends_nav"><i className="fas fa-angle-right ml-auto"></i></div>
                            </div>
                        </div>
                    </div>

                    {/* Trends Slider */}
                    <div className="col-lg-9">
                        <div className="trends_slider_container">

                            {/* Trends Slider */}

                            <div className="owl-carousel owl-theme trends_slider">

                                {/* Trends Slider Item */}
                                <div className="owl-item">
                                    <div className="trends_item is_new">
                                        <div className="trends_image d-flex flex-column align-items-center justify-content-center"><img src="images/trends_1.jpg" alt=""/></div>
                                        <div className="trends_content">
                                            <div className="trends_category"><a href="#">Smartphones</a></div>
                                            <div className="trends_info clearfix">
                                                <div className="trends_name"><a href="product.html">Jump White</a></div>
                                                <div className="trends_price">$379</div>
                                            </div>
                                        </div>
                                        <ul className="trends_marks">
                                            <li className="trends_mark trends_discount">-25%</li>
                                            <li className="trends_mark trends_new">new</li>
                                        </ul>
                                        <div className="trends_fav"><i className="fas fa-heart"></i></div>
                                    </div>
                                </div>

                                {/* Trends Slider Item */}
                                <div className="owl-item">
                                    <div className="trends_item">
                                        <div className="trends_image d-flex flex-column align-items-center justify-content-center"><img src="images/trends_2.jpg" alt=""/></div>
                                        <div className="trends_content">
                                            <div className="trends_category"><a href="#">Smartphones</a></div>
                                            <div className="trends_info clearfix">
                                                <div className="trends_name"><a href="product.html">Samsung Charm...</a></div>
                                                <div className="trends_price">$379</div>
                                            </div>
                                        </div>
                                        <ul className="trends_marks">
                                            <li className="trends_mark trends_discount">-25%</li>
                                            <li className="trends_mark trends_new">new</li>
                                        </ul>
                                        <div className="trends_fav"><i className="fas fa-heart"></i></div>
                                    </div>
                                </div>

                                {/* Trends Slider Item */}
                                <div className="owl-item">
                                    <div className="trends_item is_new">
                                        <div className="trends_image d-flex flex-column align-items-center justify-content-center"><img src="images/trends_3.jpg" alt=""/></div>
                                        <div className="trends_content">
                                            <div className="trends_category"><a href="#">Smartphones</a></div>
                                            <div className="trends_info clearfix">
                                                <div className="trends_name"><a href="product.html">DJI Phantom 3...</a></div>
                                                <div className="trends_price">$379</div>
                                            </div>
                                        </div>
                                        <ul className="trends_marks">
                                            <li className="trends_mark trends_discount">-25%</li>
                                            <li className="trends_mark trends_new">new</li>
                                        </ul>
                                        <div className="trends_fav"><i className="fas fa-heart"></i></div>
                                    </div>
                                </div>

                                {/* Trends Slider Item */}
                                <div className="owl-item">
                                    <div className="trends_item is_new">
                                        <div className="trends_image d-flex flex-column align-items-center justify-content-center"><img src="images/trends_1.jpg" alt=""/></div>
                                        <div className="trends_content">
                                            <div className="trends_category"><a href="#">Smartphones</a></div>
                                            <div className="trends_info clearfix">
                                                <div className="trends_name"><a href="product.html">Jump White</a></div>
                                                <div className="trends_price">$379</div>
                                            </div>
                                        </div>
                                        <ul className="trends_marks">
                                            <li className="trends_mark trends_discount">-25%</li>
                                            <li className="trends_mark trends_new">new</li>
                                        </ul>
                                        <div className="trends_fav"><i className="fas fa-heart"></i></div>
                                    </div>
                                </div>

                                {/* Trends Slider Item */}
                                <div className="owl-item">
                                    <div className="trends_item">
                                        <div className="trends_image d-flex flex-column align-items-center justify-content-center"><img src="images/trends_2.jpg" alt=""/></div>
                                        <div className="trends_content">
                                            <div className="trends_category"><a href="#">Smartphones</a></div>
                                            <div className="trends_info clearfix">
                                                <div className="trends_name"><a href="product.html">Jump White</a></div>
                                                <div className="trends_price">$379</div>
                                            </div>
                                        </div>
                                        <ul className="trends_marks">
                                            <li className="trends_mark trends_discount">-25%</li>
                                            <li className="trends_mark trends_new">new</li>
                                        </ul>
                                        <div className="trends_fav"><i className="fas fa-heart"></i></div>
                                    </div>
                                </div>

                                {/* Trends Slider Item */}
                                <div className="owl-item">
                                    <div className="trends_item is_new">
                                        <div className="trends_image d-flex flex-column align-items-center justify-content-center"><img src="images/trends_3.jpg" alt=""/></div>
                                        <div className="trends_content">
                                            <div className="trends_category"><a href="#">Smartphones</a></div>
                                            <div className="trends_info clearfix">
                                                <div className="trends_name"><a href="product.html">Jump White</a></div>
                                                <div className="trends_price">$379</div>
                                            </div>
                                        </div>
                                        <ul className="trends_marks">
                                            <li className="trends_mark trends_discount">-25%</li>
                                            <li className="trends_mark trends_new">new</li>
                                        </ul>
                                        <div className="trends_fav"><i className="fas fa-heart"></i></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Trends;