import React from 'react';
import {dealsImage, featured_1, featured_2} from "../../../assets";
import Product from "../../../components/product";
import AppContext from './../../../context/app-context';

const Deals = () => {
    const context = React.useContext(AppContext);

    return (
        <div className="deals_featured">
            <div className="container">
                <div className="row">
                    <div className="col d-flex flex-lg-row flex-column align-items-center justify-content-start">
                        {/* Deals */}

                        <div className="deals">
                            <div className="deals_title">Deals of the Week</div>
                            <div className="deals_slider_container">

                                {/* Deals Slider */}
                                <div className="owl-carousel owl-theme deals_slider">

                                    {/* Deals Item */}
                                    <div className="owl-item deals_item">
                                        <div className="deals_image"><img src={dealsImage} alt=""/></div>
                                        <div className="deals_content">
                                            <div className="deals_info_line d-flex flex-row justify-content-start">
                                                <div className="deals_item_category"><a href="#">Headphones</a></div>
                                                <div className="deals_item_price_a ml-auto">$300</div>
                                            </div>
                                            <div className="deals_info_line d-flex flex-row justify-content-start">
                                                <div className="deals_item_name">Beoplay H7</div>
                                                <div className="deals_item_price ml-auto">$225</div>
                                            </div>
                                            <div className="available">
                                                <div className="available_line d-flex flex-row justify-content-start">
                                                    <div className="available_title">Available: <span>6</span></div>
                                                    <div className="sold_title ml-auto">Already sold: <span>28</span></div>
                                                </div>
                                                <div className="available_bar"><span style={{width: '17%'}}></span></div>
                                            </div>
                                            <div className="deals_timer d-flex flex-row align-items-center justify-content-start">
                                                <div className="deals_timer_title_container">
                                                    <div className="deals_timer_title">Hurry Up</div>
                                                    <div className="deals_timer_subtitle">Offer ends in:</div>
                                                </div>
                                                <div className="deals_timer_content ml-auto">
                                                    <div className="deals_timer_box clearfix" data-target-time="">
                                                        <div className="deals_timer_unit">
                                                            <div id="deals_timer1_hr" className="deals_timer_hr"></div>
                                                            <span>hours</span>
                                                        </div>
                                                        <div className="deals_timer_unit">
                                                            <div id="deals_timer1_min" className="deals_timer_min"></div>
                                                            <span>mins</span>
                                                        </div>
                                                        <div className="deals_timer_unit">
                                                            <div id="deals_timer1_sec" className="deals_timer_sec"></div>
                                                            <span>secs</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                            </div>

                            <div className="deals_slider_nav_container">
                                <div className="deals_slider_prev deals_slider_nav"><i className="fas fa-chevron-left ml-auto"></i></div>
                                <div className="deals_slider_next deals_slider_nav"><i className="fas fa-chevron-right ml-auto"></i></div>
                            </div>
                        </div>

                        {/* Featured */}
                        <div className="featured">
                            <div className="tabbed_container">
                                <div className="tabs">
                                    <ul className="clearfix">
                                        <li className="active">Featured</li>
                                        <li>On Sale</li>
                                        <li>Best Rated</li>
                                    </ul>
                                    <div className="tabs_line"><span></span></div>
                                </div>

                                {/* Product Panel */}
                                <div className="product_panel panel active">
                                    <div className="featured_slider slider">

                                        {/* Slider Item */}
                                        {context.products.map((product, index) => (
                                            <Product key={index} product={product}/>
                                        ))}


                                    </div>
                                    <div className="featured_slider_dots_cover"></div>
                                </div>

                                {/* Product Panel */}

                                <div className="product_panel panel">
                                    <div className="featured_slider slider">

                                        {/* Slider Item */}
                                        <div className="featured_slider_item">
                                            <div className="border_active"></div>
                                            <div className="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
                                                <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_1.png" alt=""/></div>
                                                <div className="product_content">
                                                    <div className="product_price discount">$225<span>$300</span></div>
                                                    <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                    <div className="product_extras">
                                                        <div className="product_color">
                                                            <input type="radio" defaultChecked name="product_color" style={{background: '#b19c83'}}/>
                                                            <input type="radio" name="product_color" style={{background: '#000000'}}/>
                                                            <input type="radio" name="product_color" style={{background: '#999999'}}/>
                                                        </div>
                                                        <button className="product_cart_button">Add to Cart</button>
                                                    </div>
                                                </div>
                                                <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                <ul className="product_marks">
                                                    <li className="product_mark product_discount">-25%</li>
                                                    <li className="product_mark product_new">new</li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="featured_slider_dots_cover"></div>
                                </div>

                                {/* Product Panel */}

                                <div className="product_panel panel">
                                    <div className="featured_slider slider">

                                        {/* Slider Item */}
                                        <div className="featured_slider_item">
                                            <div className="border_active"></div>
                                            <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_8.png" alt=""/></div>
                                                <div className="product_content">
                                                    <div className="product_price">$225</div>
                                                    <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                    <div className="product_extras">
                                                        <div className="product_color">
                                                            <input type="radio" defaultChecked name="product_color" style={{background: '#b19c83'}}/>
                                                            <input type="radio" name="product_color" style={{background: '#000000'}}/>
                                                            <input type="radio" name="product_color" style={{background: '#999999'}}/>
                                                        </div>
                                                        <button className="product_cart_button">Add to Cart</button>
                                                    </div>
                                                </div>
                                                <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                <ul className="product_marks">
                                                    <li className="product_mark product_discount"></li>
                                                    <li className="product_mark product_new">new</li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="featured_slider_dots_cover"></div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Deals;