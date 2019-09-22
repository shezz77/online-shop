import React from 'react';

const Reviews = () => {
    return (
        <div className="reviews">
            <div className="container">
                <div className="row">
                    <div className="col">

                        <div className="reviews_title_container">
                            <h3 className="reviews_title">Latest Reviews</h3>
                            <div className="reviews_all ml-auto"><a href="#">view all <span>reviews</span></a></div>
                        </div>

                        <div className="reviews_slider_container">

                            {/* Reviews Slider */}
                            <div className="owl-carousel owl-theme reviews_slider">

                                {/* Reviews Slider Item */}
                                <div className="owl-item">
                                    <div className="review d-flex flex-row align-items-start justify-content-start">
                                        <div><div className="review_image"><img src="images/review_1.jpg" alt=""/></div></div>
                                        <div className="review_content">
                                            <div className="review_name">Roberto Sanchez</div>
                                            <div className="review_rating_container">
                                                <div className="rating_r rating_r_4 review_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                <div className="review_time">2 day ago</div>
                                            </div>
                                            <div className="review_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum laoreet.</p></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Reviews Slider Item */}
                                <div className="owl-item">
                                    <div className="review d-flex flex-row align-items-start justify-content-start">
                                        <div><div className="review_image"><img src="images/review_2.jpg" alt=""/></div></div>
                                        <div className="review_content">
                                            <div className="review_name">Brandon Flowers</div>
                                            <div className="review_rating_container">
                                                <div className="rating_r rating_r_4 review_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                <div className="review_time">2 day ago</div>
                                            </div>
                                            <div className="review_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum laoreet.</p></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Reviews Slider Item */}
                                <div className="owl-item">
                                    <div className="review d-flex flex-row align-items-start justify-content-start">
                                        <div><div className="review_image"><img src="images/review_3.jpg" alt=""/></div></div>
                                        <div className="review_content">
                                            <div className="review_name">Emilia Clarke</div>
                                            <div className="review_rating_container">
                                                <div className="rating_r rating_r_4 review_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                <div className="review_time">2 day ago</div>
                                            </div>
                                            <div className="review_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum laoreet.</p></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Reviews Slider Item */}
                                <div className="owl-item">
                                    <div className="review d-flex flex-row align-items-start justify-content-start">
                                        <div><div className="review_image"><img src="images/review_1.jpg" alt=""/></div></div>
                                        <div className="review_content">
                                            <div className="review_name">Roberto Sanchez</div>
                                            <div className="review_rating_container">
                                                <div className="rating_r rating_r_4 review_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                <div className="review_time">2 day ago</div>
                                            </div>
                                            <div className="review_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum laoreet.</p></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Reviews Slider Item */}
                                <div className="owl-item">
                                    <div className="review d-flex flex-row align-items-start justify-content-start">
                                        <div><div className="review_image"><img src="images/review_2.jpg" alt=""/></div></div>
                                        <div className="review_content">
                                            <div className="review_name">Brandon Flowers</div>
                                            <div className="review_rating_container">
                                                <div className="rating_r rating_r_4 review_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                <div className="review_time">2 day ago</div>
                                            </div>
                                            <div className="review_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum laoreet.</p></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Reviews Slider Item */}
                                <div className="owl-item">
                                    <div className="review d-flex flex-row align-items-start justify-content-start">
                                        <div><div className="review_image"><img src="images/review_3.jpg" alt=""/></div></div>
                                        <div className="review_content">
                                            <div className="review_name">Emilia Clarke</div>
                                            <div className="review_rating_container">
                                                <div className="rating_r rating_r_4 review_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                <div className="review_time">2 day ago</div>
                                            </div>
                                            <div className="review_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum laoreet.</p></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="reviews_dots"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;