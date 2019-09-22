import React from 'react';

const RecentlyViewed = () => {
    return (
        <div className="viewed">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="viewed_title_container">
                            <h3 className="viewed_title">Recently Viewed</h3>
                            <div className="viewed_nav_container">
                                <div className="viewed_nav viewed_prev"><i className="fas fa-chevron-left"></i></div>
                                <div className="viewed_nav viewed_next"><i className="fas fa-chevron-right"></i></div>
                            </div>
                        </div>

                        <div className="viewed_slider_container">

                            {/* Recently Viewed Slider */}

                            <div className="owl-carousel owl-theme viewed_slider">

                                {/* Recently Viewed Item */}
                                <div className="owl-item">
                                    <div className="viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                                        <div className="viewed_image"><img src="images/view_1.jpg" alt=""/></div>
                                        <div className="viewed_content text-center">
                                            <div className="viewed_price">$225<span>$300</span></div>
                                            <div className="viewed_name"><a href="#">Beoplay H7</a></div>
                                        </div>
                                        <ul className="item_marks">
                                            <li className="item_mark item_discount">-25%</li>
                                            <li className="item_mark item_new">new</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Recently Viewed Item */}
                                <div className="owl-item">
                                    <div className="viewed_item d-flex flex-column align-items-center justify-content-center text-center">
                                        <div className="viewed_image"><img src="images/view_2.jpg" alt=""/></div>
                                        <div className="viewed_content text-center">
                                            <div className="viewed_price">$379</div>
                                            <div className="viewed_name"><a href="#">LUNA Smartphone</a></div>
                                        </div>
                                        <ul className="item_marks">
                                            <li className="item_mark item_discount">-25%</li>
                                            <li className="item_mark item_new">new</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Recently Viewed Item */}
                                <div className="owl-item">
                                    <div className="viewed_item d-flex flex-column align-items-center justify-content-center text-center">
                                        <div className="viewed_image"><img src="images/view_3.jpg" alt=""/></div>
                                        <div className="viewed_content text-center">
                                            <div className="viewed_price">$225</div>
                                            <div className="viewed_name"><a href="#">Samsung J730F...</a></div>
                                        </div>
                                        <ul className="item_marks">
                                            <li className="item_mark item_discount">-25%</li>
                                            <li className="item_mark item_new">new</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Recently Viewed Item */}
                                <div className="owl-item">
                                    <div className="viewed_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                        <div className="viewed_image"><img src="images/view_4.jpg" alt=""/></div>
                                        <div className="viewed_content text-center">
                                            <div className="viewed_price">$379</div>
                                            <div className="viewed_name"><a href="#">Huawei MediaPad...</a></div>
                                        </div>
                                        <ul className="item_marks">
                                            <li className="item_mark item_discount">-25%</li>
                                            <li className="item_mark item_new">new</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Recently Viewed Item */}
                                <div className="owl-item">
                                    <div className="viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                                        <div className="viewed_image"><img src="images/view_5.jpg" alt=""/></div>
                                        <div className="viewed_content text-center">
                                            <div className="viewed_price">$225<span>$300</span></div>
                                            <div className="viewed_name"><a href="#">Sony PS4 Slim</a></div>
                                        </div>
                                        <ul className="item_marks">
                                            <li className="item_mark item_discount">-25%</li>
                                            <li className="item_mark item_new">new</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Recently Viewed Item */}
                                <div className="owl-item">
                                    <div className="viewed_item d-flex flex-column align-items-center justify-content-center text-center">
                                        <div className="viewed_image"><img src="images/view_6.jpg" alt=""/></div>
                                        <div className="viewed_content text-center">
                                            <div className="viewed_price">$375</div>
                                            <div className="viewed_name"><a href="#">Speedlink...</a></div>
                                        </div>
                                        <ul className="item_marks">
                                            <li className="item_mark item_discount">-25%</li>
                                            <li className="item_mark item_new">new</li>
                                        </ul>
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

export default RecentlyViewed;