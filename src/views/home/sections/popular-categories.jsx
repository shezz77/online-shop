import React from 'react';

const PopularCategories = () => {
    return (
        <div className="popular_categories">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="popular_categories_content">
                            <div className="popular_categories_title">Popular Categories</div>
                            <div className="popular_categories_slider_nav">
                                <div className="popular_categories_prev popular_categories_nav"><i className="fas fa-angle-left ml-auto"></i></div>
                                <div className="popular_categories_next popular_categories_nav"><i className="fas fa-angle-right ml-auto"></i></div>
                            </div>
                            <div className="popular_categories_link"><a href="#">full catalog</a></div>
                        </div>
                    </div>

                    {/* Popular Categories Slider */}

                    <div className="col-lg-9">
                        <div className="popular_categories_slider_container">
                            <div className="owl-carousel owl-theme popular_categories_slider">

                                {/* Popular Categories Item */}

                                {this.context.products && this.context.products.map((product, index) => (
                                    <div key={index} className="owl-item">
                                        <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                                            <div className="popular_category_image"><img src={product.title_image_url} alt=""/></div>
                                            <div className="popular_category_text">Smartphones & Tablets</div>
                                        </div>
                                    </div>
                                ))}


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularCategories;