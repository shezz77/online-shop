import React from 'react';
import Layout from "../hoc/layout";

const Home = () => {
    return (
        <Layout>
            {/* Banner */}

            <div className="banner">
                <div className="banner_background" style="background-image:url(images/banner_background.jpg)"></div>
                <div className="container fill_height">
                    <div className="row fill_height">
                        <div className="banner_product_image"><img src="images/banner_product.png" alt=""/></div>
                        <div className="col-lg-5 offset-lg-4 fill_height">
                            <div className="banner_content">
                                <h1 className="banner_text">new era of smartphones</h1>
                                <div className="banner_price"><span>$530</span>$460</div>
                                <div className="banner_product_name">Apple Iphone 6s</div>
                                <div className="button banner_button"><a href="#">Shop Now</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Characteristics */}

            <div className="characteristics">
                <div className="container">
                    <div className="row">

                        {/* Char. Item */}
                        <div className="col-lg-3 col-md-6 char_col">

                            <div className="char_item d-flex flex-row align-items-center justify-content-start">
                                <div className="char_icon"><img src="images/char_1.png" alt=""/></div>
                                <div className="char_content">
                                    <div className="char_title">Free Delivery</div>
                                    <div className="char_subtitle">from $50</div>
                                </div>
                            </div>
                        </div>

                        {/* Char. Item */}
                        <div className="col-lg-3 col-md-6 char_col">

                            <div className="char_item d-flex flex-row align-items-center justify-content-start">
                                <div className="char_icon"><img src="images/char_2.png" alt=""/></div>
                                <div className="char_content">
                                    <div className="char_title">Free Delivery</div>
                                    <div className="char_subtitle">from $50</div>
                                </div>
                            </div>
                        </div>

                        {/* Char. Item */}
                        <div className="col-lg-3 col-md-6 char_col">

                            <div className="char_item d-flex flex-row align-items-center justify-content-start">
                                <div className="char_icon"><img src="images/char_3.png" alt=""/></div>
                                <div className="char_content">
                                    <div className="char_title">Free Delivery</div>
                                    <div className="char_subtitle">from $50</div>
                                </div>
                            </div>
                        </div>

                        {/* Char. Item */}
                        <div className="col-lg-3 col-md-6 char_col">

                            <div className="char_item d-flex flex-row align-items-center justify-content-start">
                                <div className="char_icon"><img src="images/char_4.png" alt=""/></div>
                                <div className="char_content">
                                    <div className="char_title">Free Delivery</div>
                                    <div className="char_subtitle">from $50</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Deals of the week */}

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
                                            <div className="deals_image"><img src="images/deals.png" alt=""/></div>
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

                                        {/* Deals Item */}
                                        <div className="owl-item deals_item">
                                            <div className="deals_image"><img src="images/deals.png" alt=""/></div>
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
                                                                <div id="deals_timer2_hr" className="deals_timer_hr"></div>
                                                                <span>hours</span>
                                                            </div>
                                                            <div className="deals_timer_unit">
                                                                <div id="deals_timer2_min" className="deals_timer_min"></div>
                                                                <span>mins</span>
                                                            </div>
                                                            <div className="deals_timer_unit">
                                                                <div id="deals_timer2_sec" className="deals_timer_sec"></div>
                                                                <span>secs</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Deals Item */}
                                        <div className="owl-item deals_item">
                                            <div className="deals_image"><img src="images/deals.png" alt=""/></div>
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
                                                                <div id="deals_timer3_hr" className="deals_timer_hr"></div>
                                                                <span>hours</span>
                                                            </div>
                                                            <div className="deals_timer_unit">
                                                                <div id="deals_timer3_min" className="deals_timer_min"></div>
                                                                <span>mins</span>
                                                            </div>
                                                            <div className="deals_timer_unit">
                                                                <div id="deals_timer3_sec" className="deals_timer_sec"></div>
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
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_1.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price discount">$225<span>$300</span></div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_2.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Apple iPod shuffle</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
                                                                    <input type="radio" name="product_color" style={{background: '#000000'}}/>
                                                                        <input type="radio" name="product_color" style={{background: '#999999'}}/>
                                                            </div>
                                                            <button className="product_cart_button active">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_3.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Sony MDRZX310W</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_4.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price discount">$225<span>$300</span></div>
                                                        <div className="product_name"><div><a href="product.html">LUNA Smartphone</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_5.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$225</div>
                                                        <div className="product_name"><div><a href="product.html">Canon STM Kit...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_6.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Samsung J330F...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_7.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Lenovo IdeaPad</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_8.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$225</div>
                                                        <div className="product_name"><div><a href="product.html">Digitus EDNET...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_1.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$225</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_2.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_3.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_4.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$225</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_5.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$225</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_6.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_7.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_2.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Apple iPod shuffle</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
                                                                    <input type="radio" name="product_color" style={{background: '#000000'}}/>
                                                                        <input type="radio" name="product_color" style={{background: '#999999'}}/>
                                                            </div>
                                                            <button className="product_cart_button active">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_3.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Sony MDRZX310W</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_4.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price discount">$225<span>$300</span></div>
                                                        <div className="product_name"><div><a href="product.html">LUNA Smartphone</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_5.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$225</div>
                                                        <div className="product_name"><div><a href="product.html">Canon STM Kit...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_6.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Samsung J330F...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_7.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Lenovo IdeaPad</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_8.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$225</div>
                                                        <div className="product_name"><div><a href="product.html">Digitus EDNET...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_1.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$225</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_2.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_3.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_4.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$225</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_5.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$225</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_6.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_7.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_2.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Apple iPod shuffle</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
                                                                    <input type="radio" name="product_color" style={{background: '#000000'}}/>
                                                                        <input type="radio" name="product_color" style={{background: '#999999'}}/>
                                                            </div>
                                                            <button className="product_cart_button active">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_3.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Sony MDRZX310W</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_4.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price discount">$225<span>$300</span></div>
                                                        <div className="product_name"><div><a href="product.html">LUNA Smartphone</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_5.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$225</div>
                                                        <div className="product_name"><div><a href="product.html">Canon STM Kit...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_6.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Samsung J330F...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_7.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Lenovo IdeaPad</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_8.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$225</div>
                                                        <div className="product_name"><div><a href="product.html">Digitus EDNET...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_1.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$225</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_2.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_3.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_4.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$225</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_5.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$225</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_6.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                            {/* Slider Item */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_7.png" alt=""/></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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
                                                                <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

            {/* Popular Categories */}

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
                                    <div className="owl-item">
                                        <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                                            <div className="popular_category_image"><img src="images/popular_1.png" alt=""/></div>
                                            <div className="popular_category_text">Smartphones & Tablets</div>
                                        </div>
                                    </div>

                                    {/* Popular Categories Item */}
                                    <div className="owl-item">
                                        <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                                            <div className="popular_category_image"><img src="images/popular_2.png" alt=""/></div>
                                            <div className="popular_category_text">Computers & Laptops</div>
                                        </div>
                                    </div>

                                    {/* Popular Categories Item */}
                                    <div className="owl-item">
                                        <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                                            <div className="popular_category_image"><img src="images/popular_3.png" alt=""/></div>
                                            <div className="popular_category_text">Gadgets</div>
                                        </div>
                                    </div>

                                    {/* Popular Categories Item */}
                                    <div className="owl-item">
                                        <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                                            <div className="popular_category_image"><img src="images/popular_4.png" alt=""/></div>
                                            <div className="popular_category_text">Video Games & Consoles</div>
                                        </div>
                                    </div>

                                    {/* Popular Categories Item */}
                                    <div className="owl-item">
                                        <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                                            <div className="popular_category_image"><img src="images/popular_5.png" alt=""/></div>
                                            <div className="popular_category_text">Accessories</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Banner */}

            <div className="banner_2">
                <div className="banner_2_background" style="background-image:url(images/banner_2_background.jpg)"></div>
                <div className="banner_2_container">
                    <div className="banner_2_dots"></div>
                    {/* Banner 2 Slider */}

                    <div className="owl-carousel owl-theme banner_2_slider">

                        {/* Banner 2 Slider Item */}
                        <div className="owl-item">
                            <div className="banner_2_item">
                                <div className="container fill_height">
                                    <div className="row fill_height">
                                        <div className="col-lg-4 col-md-6 fill_height">
                                            <div className="banner_2_content">
                                                <div className="banner_2_category">Laptops</div>
                                                <div className="banner_2_title">MacBook Air 13</div>
                                                <div className="banner_2_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum laoreet.</div>
                                                <div className="rating_r rating_r_4 banner_2_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                <div className="button banner_2_button"><a href="#">Explore</a></div>
                                            </div>

                                        </div>
                                        <div className="col-lg-8 col-md-6 fill_height">
                                            <div className="banner_2_image_container">
                                                <div className="banner_2_image"><img src="images/banner_2_product.png" alt=""/></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Banner 2 Slider Item */}
                        <div className="owl-item">
                            <div className="banner_2_item">
                                <div className="container fill_height">
                                    <div className="row fill_height">
                                        <div className="col-lg-4 col-md-6 fill_height">
                                            <div className="banner_2_content">
                                                <div className="banner_2_category">Laptops</div>
                                                <div className="banner_2_title">MacBook Air 13</div>
                                                <div className="banner_2_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum laoreet.</div>
                                                <div className="rating_r rating_r_4 banner_2_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                <div className="button banner_2_button"><a href="#">Explore</a></div>
                                            </div>

                                        </div>
                                        <div className="col-lg-8 col-md-6 fill_height">
                                            <div className="banner_2_image_container">
                                                <div className="banner_2_image"><img src="images/banner_2_product.png" alt=""/></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Banner 2 Slider Item */}
                        <div className="owl-item">
                            <div className="banner_2_item">
                                <div className="container fill_height">
                                    <div className="row fill_height">
                                        <div className="col-lg-4 col-md-6 fill_height">
                                            <div className="banner_2_content">
                                                <div className="banner_2_category">Laptops</div>
                                                <div className="banner_2_title">MacBook Air 13</div>
                                                <div className="banner_2_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum laoreet.</div>
                                                <div className="rating_r rating_r_4 banner_2_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                <div className="button banner_2_button"><a href="#">Explore</a></div>
                                            </div>

                                        </div>
                                        <div className="col-lg-8 col-md-6 fill_height">
                                            <div className="banner_2_image_container">
                                                <div className="banner_2_image"><img src="images/banner_2_product.png" alt=""/></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Hot New Arrivals */}

            <div className="new_arrivals">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="tabbed_container">
                                <div className="tabs clearfix tabs-right">
                                    <div className="new_arrivals_title">Hot New Arrivals</div>
                                    <ul className="clearfix">
                                        <li className="active">Featured</li>
                                        <li>Audio & Video</li>
                                        <li>Laptops & Computers</li>
                                    </ul>
                                    <div className="tabs_line"><span></span></div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-9" style="z-index:1;">

                                        {/* Product Panel */}
                                        <div className="product_panel panel active">
                                            <div className="arrivals_slider slider">

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_1.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name"><div><a href="product.html">Astro M2 Black</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_2.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name"><div><a href="product.html">Transcend T.Sonic</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
                                                                        <input type="radio" name="product_color" style={{background: '#000000'}}/>
                                                                            <input type="radio" name="product_color" style={{background: '#999999'}}/>
                                                                </div>
                                                                <button className="product_cart_button active">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount"></li>
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_3.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name"><div><a href="product.html">Xiaomi Band 2...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_4.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name"><div><a href="product.html">Rapoo T8 White</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_5.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name"><div><a href="product.html">Philips BT6900A</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_6.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name"><div><a href="product.html">Nokia 3310(2017)...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_7.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name"><div><a href="product.html">Rapoo 7100p Gray</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_8.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name"><div><a href="product.html">Canon EF</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_1.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name"><div><a href="product.html">Gembird SPK-103</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_2.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name"><div><a href="product.html">Canon IXUS 175...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_3.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_4.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_5.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_6.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_7.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_8.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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
                                            <div className="arrivals_slider_dots_cover"></div>
                                        </div>

                                        {/* Product Panel */}
                                        <div className="product_panel panel">
                                            <div className="arrivals_slider slider">

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_1.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_2.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
                                                                        <input type="radio" name="product_color" style={{background: '#000000'}}/>
                                                                            <input type="radio" name="product_color" style={{background: '#999999'}}/>
                                                                </div>
                                                                <button className="product_cart_button active">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount"></li>
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_3.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_4.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_5.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_6.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_7.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_8.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_1.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_2.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_3.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_4.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_5.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_6.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_7.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_8.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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
                                            <div className="arrivals_slider_dots_cover"></div>
                                        </div>

                                        {/* Product Panel */}
                                        <div className="product_panel panel">
                                            <div className="arrivals_slider slider">

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_1.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_2.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
                                                                        <input type="radio" name="product_color" style={{background: '#000000'}}/>
                                                                            <input type="radio" name="product_color" style={{background: '#999999'}}/>
                                                                </div>
                                                                <button className="product_cart_button active">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount"></li>
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_3.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_4.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_5.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_6.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_7.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_8.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_1.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_2.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_3.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_4.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_5.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_6.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_7.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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

                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active"></div>
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_8.jpg" alt=""/></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" checked name="product_color" style={{background: '#b19c83'}}/>
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
                                            <div className="arrivals_slider_dots_cover"></div>
                                        </div>

                                    </div>

                                    <div className="col-lg-3">
                                        <div className="arrivals_single clearfix">
                                            <div className="d-flex flex-column align-items-center justify-content-center">
                                                <div className="arrivals_single_image"><img src="images/new_single.png" alt=""/></div>
                                                <div className="arrivals_single_content">
                                                    <div className="arrivals_single_category"><a href="#">Smartphones</a></div>
                                                    <div className="arrivals_single_name_container clearfix">
                                                        <div className="arrivals_single_name"><a href="#">LUNA Smartphone</a></div>
                                                        <div className="arrivals_single_price text-right">$379</div>
                                                    </div>
                                                    <div className="rating_r rating_r_4 arrivals_single_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <form action="#"><button className="arrivals_single_button">Add to Cart</button></form>
                                                </div>
                                                <div className="arrivals_single_fav product_fav active"><i className="fas fa-heart"></i></div>
                                                <ul className="arrivals_single_marks product_marks">
                                                    <li className="arrivals_single_mark product_mark product_new">new</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Best Sellers */}

            <div className="best_sellers">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="tabbed_container">
                                <div className="tabs clearfix tabs-right">
                                    <div className="new_arrivals_title">Hot Best Sellers</div>
                                    <ul className="clearfix">
                                        <li className="active">Top 20</li>
                                        <li>Audio & Video</li>
                                        <li>Laptops & Computers</li>
                                    </ul>
                                    <div className="tabs_line"><span></span></div>
                                </div>

                                <div className="bestsellers_panel panel active">

                                    {/* Best Sellers Slider */}

                                    <div className="bestsellers_slider slider">

                                        {/* Best Sellers Item */}
                                        <div className="bestsellers_item discount">
                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                <div className="bestsellers_image"><img src="images/best_1.png" alt=""/></div>
                                                <div className="bestsellers_content">
                                                    <div className="bestsellers_category"><a href="#">Headphones</a></div>
                                                    <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                    <div className="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                </div>
                                            </div>
                                            <div className="bestsellers_fav active"><i className="fas fa-heart"></i></div>
                                            <ul className="bestsellers_marks">
                                                <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                <li className="bestsellers_mark bestsellers_new">new</li>
                                            </ul>
                                        </div>

                                        {/* Best Sellers Item */}
                                        <div className="bestsellers_item discount">
                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                <div className="bestsellers_image"><img src="images/best_2.png" alt=""/></div>
                                                <div className="bestsellers_content">
                                                    <div className="bestsellers_category"><a href="#">Headphones</a></div>
                                                    <div className="bestsellers_name"><a href="product.html">Samsung J730F...</a></div>
                                                    <div className="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                </div>
                                            </div>
                                            <div className="bestsellers_fav"><i className="fas fa-heart"></i></div>
                                            <ul className="bestsellers_marks">
                                                <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                <li className="bestsellers_mark bestsellers_new">new</li>
                                            </ul>
                                        </div>

                                        {/* Best Sellers Item */}
                                        <div className="bestsellers_item">
                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                <div className="bestsellers_image"><img src="images/best_3.png" alt=""/></div>
                                                <div className="bestsellers_content">
                                                    <div className="bestsellers_category"><a href="#">Headphones</a></div>
                                                    <div className="bestsellers_name"><a href="product.html">Nomi Black White</a></div>
                                                    <div className="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                </div>
                                            </div>
                                            <div className="bestsellers_fav"><i className="fas fa-heart"></i></div>
                                            <ul className="bestsellers_marks">
                                                <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                <li className="bestsellers_mark bestsellers_new">new</li>
                                            </ul>
                                        </div>

                                        {/* Best Sellers Item */}
                                        <div className="bestsellers_item">
                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                <div className="bestsellers_image"><img src="images/best_4.png" alt=""/></div>
                                                <div className="bestsellers_content">
                                                    <div className="bestsellers_category"><a href="#">Headphones</a></div>
                                                    <div className="bestsellers_name"><a href="product.html">Samsung Charm Gold</a></div>
                                                    <div className="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                </div>
                                            </div>
                                            <div className="bestsellers_fav"><i className="fas fa-heart"></i></div>
                                            <ul className="bestsellers_marks">
                                                <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                <li className="bestsellers_mark bestsellers_new">new</li>
                                            </ul>
                                        </div>

                                        {/* Best Sellers Item */}
                                        <div className="bestsellers_item discount">
                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                <div className="bestsellers_image"><img src="images/best_5.png" alt=""/></div>
                                                <div className="bestsellers_content">
                                                    <div className="bestsellers_category"><a href="#">Headphones</a></div>
                                                    <div className="bestsellers_name"><a href="product.html">Beoplay H7</a></div>
                                                    <div className="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                </div>
                                            </div>
                                            <div className="bestsellers_fav active"><i className="fas fa-heart"></i></div>
                                            <ul className="bestsellers_marks">
                                                <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                <li className="bestsellers_mark bestsellers_new">new</li>
                                            </ul>
                                        </div>

                                        {/* Best Sellers Item */}
                                        <div className="bestsellers_item">
                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                <div className="bestsellers_image"><img src="images/best_6.png" alt=""/></div>
                                                <div className="bestsellers_content">
                                                    <div className="bestsellers_category"><a href="#">Headphones</a></div>
                                                    <div className="bestsellers_name"><a href="product.html">Huawei MediaPad T3</a></div>
                                                    <div className="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                </div>
                                            </div>
                                            <div className="bestsellers_fav active"><i className="fas fa-heart"></i></div>
                                            <ul className="bestsellers_marks">
                                                <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                <li className="bestsellers_mark bestsellers_new">new</li>
                                            </ul>
                                        </div>

                                        {/* Best Sellers Item */}
                                        <div className="bestsellers_item discount">
                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                <div className="bestsellers_image"><img src="images/best_1.png" alt=""/></div>
                                                <div className="bestsellers_content">
                                                    <div className="bestsellers_category"><a href="#">Headphones</a></div>
                                                    <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                    <div className="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                </div>
                                            </div>
                                            <div className="bestsellers_fav active"><i className="fas fa-heart"></i></div>
                                            <ul className="bestsellers_marks">
                                                <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                <li className="bestsellers_mark bestsellers_new">new</li>
                                            </ul>
                                        </div>

                                        {/* Best Sellers Item */}
                                        <div className="bestsellers_item discount">
                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                <div className="bestsellers_image"><img src="images/best_2.png" alt=""/></div>
                                                <div className="bestsellers_content">
                                                    <div className="bestsellers_category"><a href="#">Headphones</a></div>
                                                    <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                    <div className="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                </div>
                                            </div>
                                            <div className="bestsellers_fav"><i className="fas fa-heart"></i></div>
                                            <ul className="bestsellers_marks">
                                                <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                <li className="bestsellers_mark bestsellers_new">new</li>
                                            </ul>
                                        </div>

                                        {/* Best Sellers Item */}
                                        <div className="bestsellers_item">
                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                <div className="bestsellers_image"><img src="images/best_3.png" alt=""/></div>
                                                <div className="bestsellers_content">
                                                    <div className="bestsellers_category"><a href="#">Headphones</a></div>
                                                    <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                    <div className="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                </div>
                                            </div>
                                            <div className="bestsellers_fav"><i className="fas fa-heart"></i></div>
                                            <ul className="bestsellers_marks">
                                                <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                <li className="bestsellers_mark bestsellers_new">new</li>
                                            </ul>
                                        </div>

                                        {/* Best Sellers Item */}
                                        <div className="bestsellers_item">
                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                <div className="bestsellers_image"><img src="images/best_4.png" alt=""/></div>
                                                <div className="bestsellers_content">
                                                    <div className="bestsellers_category"><a href="#">Headphones</a></div>
                                                    <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                    <div className="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                </div>
                                            </div>
                                            <div className="bestsellers_fav"><i className="fas fa-heart"></i></div>
                                            <ul className="bestsellers_marks">
                                                <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                <li className="bestsellers_mark bestsellers_new">new</li>
                                            </ul>
                                        </div>

                                        {/* Best Sellers Item */}
                                        <div className="bestsellers_item discount">
                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                <div className="bestsellers_image"><img src="images/best_5.png" alt=""/></div>
                                                <div className="bestsellers_content">
                                                    <div className="bestsellers_category"><a href="#">Headphones</a></div>
                                                    <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                    <div className="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                </div>
                                            </div>
                                            <div className="bestsellers_fav active"><i className="fas fa-heart"></i></div>
                                            <ul className="bestsellers_marks">
                                                <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                <li className="bestsellers_mark bestsellers_new">new</li>
                                            </ul>
                                        </div>

                                        {/* Best Sellers Item */}
                                        <div className="bestsellers_item">
                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                <div className="bestsellers_image"><img src="images/best_6.png" alt=""/></div>
                                                <div className="bestsellers_content">
                                                    <div className="bestsellers_category"><a href="#">Headphones</a></div>
                                                    <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                    <div className="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                </div>
                                            </div>
                                            <div className="bestsellers_fav active"><i className="fas fa-heart"></i></div>
                                            <ul className="bestsellers_marks">
                                                <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                <li className="bestsellers_mark bestsellers_new">new</li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>

                                <div className="bestsellers_panel panel">

                                    {/* Best Sellers Slider */}

                                    <div className="bestsellers_slider slider">

                                        {/* Best Sellers Item */}
                                        <div className="bestsellers_item discount">
                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                <div className="bestsellers_image"><img src="images/best_1.png" alt=""/></div>
                                                <div className="bestsellers_content">
                                                    <div className="bestsellers_category"><a href="#">Headphones</a></div>
                                                    <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                    <div className="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                </div>
                                            </div>
                                            <div className="bestsellers_fav active"><i className="fas fa-heart"></i></div>
                                            <ul className="bestsellers_marks">
                                                <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                <li className="bestsellers_mark bestsellers_new">new</li>
                                            </ul>
                                        </div>

                                        {/* Best Sellers Item */}
                                        <div className="bestsellers_item discount">
                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                <div className="bestsellers_image"><img src="images/best_2.png" alt=""/></div>
                                                <div className="bestsellers_content">
                                                    <div className="bestsellers_category"><a href="#">Headphones</a></div>
                                                    <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                    <div className="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                </div>
                                            </div>
                                            <div className="bestsellers_fav"><i className="fas fa-heart"></i></div>
                                            <ul className="bestsellers_marks">
                                                <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                <li className="bestsellers_mark bestsellers_new">new</li>
                                            </ul>
                                        </div>

                                        {/* Best Sellers Item */}
                                        <div className="bestsellers_item">
                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                <div className="bestsellers_image"><img src="images/best_3.png" alt=""/></div>
                                                <div className="bestsellers_content">
                                                    <div className="bestsellers_category"><a href="#">Headphones</a></div>
                                                    <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                    <div className="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                </div>
                                            </div>
                                            <div className="bestsellers_fav"><i className="fas fa-heart"></i></div>
                                            <ul className="bestsellers_marks">
                                                <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                <li className="bestsellers_mark bestsellers_new">new</li>
                                            </ul>
                                        </div>

                                        {/* Best Sellers Item */}
                                        <div className="bestsellers_item">
                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                <div className="bestsellers_image"><img src="images/best_4.png" alt=""/></div>
                                                <div className="bestsellers_content">
                                                    <div className="bestsellers_category"><a href="#">Headphones</a></div>
                                                    <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                    <div className="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                </div>
                                            </div>
                                            <div className="bestsellers_fav"><i className="fas fa-heart"></i></div>
                                            <ul className="bestsellers_marks">
                                                <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                <li className="bestsellers_mark bestsellers_new">new</li>
                                            </ul>
                                        </div>

                                        {/* Best Sellers Item */}
                                        <div className="bestsellers_item discount">
                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                <div className="bestsellers_image"><img src="images/best_5.png" alt=""/></div>
                                                <div className="bestsellers_content">
                                                    <div className="bestsellers_category"><a href="#">Headphones</a></div>
                                                    <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                    <div className="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                </div>
                                            </div>
                                            <div className="bestsellers_fav active"><i className="fas fa-heart"></i></div>
                                            <ul className="bestsellers_marks">
                                                <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                <li className="bestsellers_mark bestsellers_new">new</li>
                                            </ul>
                                        </div>

                                        {/* Best Sellers Item */}
                                        <div className="bestsellers_item">
                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                <div className="bestsellers_image"><img src="images/best_6.png" alt=""/></div>
                                                <div className="bestsellers_content">
                                                    <div className="bestsellers_category"><a href="#">Headphones</a></div>
                                                    <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                    <div className="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                </div>
                                            </div>
                                            <div className="bestsellers_fav active"><i className="fas fa-heart"></i></div>
                                            <ul className="bestsellers_marks">
                                                <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                <li className="bestsellers_mark bestsellers_new">new</li>
                                            </ul>
                                        </div>

                                        {/* Best Sellers Item */}
                                        <div className="bestsellers_item discount">
                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                <div className="bestsellers_image"><img src="images/best_1.png" alt=""/></div>
                                                <div className="bestsellers_content">
                                                    <div className="bestsellers_category"><a href="#">Headphones</a></div>
                                                    <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                    <div className="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                </div>
                                            </div>
                                            <div className="bestsellers_fav active"><i className="fas fa-heart"></i></div>
                                            <ul className="bestsellers_marks">
                                                <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                <li className="bestsellers_mark bestsellers_new">new</li>
                                            </ul>
                                        </div>

                                        {/* Best Sellers Item */}
                                        <div className="bestsellers_item discount">
                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                <div className="bestsellers_image"><img src="images/best_2.png" alt=""/></div>
                                                <div className="bestsellers_content">
                                                    <div className="bestsellers_category"><a href="#">Headphones</a></div>
                                                    <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                    <div className="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                </div>
                                            </div>
                                            <div className="bestsellers_fav"><i className="fas fa-heart"></i></div>
                                            <ul className="bestsellers_marks">
                                                <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                <li className="bestsellers_mark bestsellers_new">new</li>
                                            </ul>
                                        </div>

                                        {/* Best Sellers Item */}
                                        <div className="bestsellers_item">
                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                <div className="bestsellers_image"><img src="images/best_3.png" alt=""/></div>
                                                <div className="bestsellers_content">
                                                    <div className="bestsellers_category"><a href="#">Headphones</a></div>
                                                    <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                    <div className="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                </div>
                                            </div>
                                            <div className="bestsellers_fav"><i className="fas fa-heart"></i></div>
                                            <ul className="bestsellers_marks">
                                                <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                <li className="bestsellers_mark bestsellers_new">new</li>
                                            </ul>
                                        </div>

                                        {/* Best Sellers Item */}
                                        <div className="bestsellers_item">
                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                <div className="bestsellers_image"><img src="images/best_4.png" alt=""/></div>
                                                <div className="bestsellers_content">
                                                    <div className="bestsellers_category"><a href="#">Headphones</a></div>
                                                    <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                    <div className="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                </div>
                                            </div>
                                            <div className="bestsellers_fav"><i className="fas fa-heart"></i></div>
                                            <ul className="bestsellers_marks">
                                                <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                <li className="bestsellers_mark bestsellers_new">new</li>
                                            </ul>
                                        </div>

                                        {/* Best Sellers Item */}
                                        <div className="bestsellers_item discount">
                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                <div className="bestsellers_image"><img src="images/best_5.png" alt=""/></div>
                                                <div className="bestsellers_content">
                                                    <div className="bestsellers_category"><a href="#">Headphones</a></div>
                                                    <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                    <div className="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                </div>
                                            </div>
                                            <div className="bestsellers_fav active"><i className="fas fa-heart"></i></div>
                                            <ul className="bestsellers_marks">
                                                <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                <li className="bestsellers_mark bestsellers_new">new</li>
                                            </ul>
                                        </div>

                                        {/* Best Sellers Item */}
                                        <div className="bestsellers_item">
                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                <div className="bestsellers_image"><img src="images/best_6.png" alt=""/></div>
                                                <div className="bestsellers_content">
                                                    <div className="bestsellers_category"><a href="#">Headphones</a></div>
                                                    <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                    <div className="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                </div>
                                            </div>
                                            <div className="bestsellers_fav active"><i className="fas fa-heart"></i></div>
                                            <ul className="bestsellers_marks">
                                                <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                <li className="bestsellers_mark bestsellers_new">new</li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>

                                <div className="bestsellers_panel panel">

                                    {/* Best Sellers Slider */}

                                    <div className="bestsellers_slider slider">

                                        {/* Best Sellers Item */}
                                        <div className="bestsellers_item discount">
                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                <div className="bestsellers_image"><img src="images/best_1.png" alt=""/></div>
                                                <div className="bestsellers_content">
                                                    <div className="bestsellers_category"><a href="#">Headphones</a></div>
                                                    <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                    <div className="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                </div>
                                            </div>
                                            <div className="bestsellers_fav active"><i className="fas fa-heart"></i></div>
                                            <ul className="bestsellers_marks">
                                                <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                <li className="bestsellers_mark bestsellers_new">new</li>
                                            </ul>
                                        </div>

                                        {/* Best Sellers Item */}
                                        <div className="bestsellers_item discount">
                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                <div className="bestsellers_image"><img src="images/best_2.png" alt=""/></div>
                                                <div className="bestsellers_content">
                                                    <div className="bestsellers_category"><a href="#">Headphones</a></div>
                                                    <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                    <div className="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                </div>
                                            </div>
                                            <div className="bestsellers_fav"><i className="fas fa-heart"></i></div>
                                            <ul className="bestsellers_marks">
                                                <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                <li className="bestsellers_mark bestsellers_new">new</li>
                                            </ul>
                                        </div>

                                        {/* Best Sellers Item */}
                                        <div className="bestsellers_item">
                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                <div className="bestsellers_image"><img src="images/best_3.png" alt=""/></div>
                                                <div className="bestsellers_content">
                                                    <div className="bestsellers_category"><a href="#">Headphones</a></div>
                                                    <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                    <div className="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                </div>
                                            </div>
                                            <div className="bestsellers_fav"><i className="fas fa-heart"></i></div>
                                            <ul className="bestsellers_marks">
                                                <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                <li className="bestsellers_mark bestsellers_new">new</li>
                                            </ul>
                                        </div>

                                        {/* Best Sellers Item */}
                                        <div className="bestsellers_item">
                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                <div className="bestsellers_image"><img src="images/best_4.png" alt=""/></div>
                                                <div className="bestsellers_content">
                                                    <div className="bestsellers_category"><a href="#">Headphones</a></div>
                                                    <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                    <div className="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                </div>
                                            </div>
                                            <div className="bestsellers_fav"><i className="fas fa-heart"></i></div>
                                            <ul className="bestsellers_marks">
                                                <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                <li className="bestsellers_mark bestsellers_new">new</li>
                                            </ul>
                                        </div>

                                        {/* Best Sellers Item */}
                                        <div className="bestsellers_item discount">
                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                <div className="bestsellers_image"><img src="images/best_5.png" alt=""/></div>
                                                <div className="bestsellers_content">
                                                    <div className="bestsellers_category"><a href="#">Headphones</a></div>
                                                    <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                    <div className="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                </div>
                                            </div>
                                            <div className="bestsellers_fav active"><i className="fas fa-heart"></i></div>
                                            <ul className="bestsellers_marks">
                                                <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                <li className="bestsellers_mark bestsellers_new">new</li>
                                            </ul>
                                        </div>

                                        {/* Best Sellers Item */}
                                        <div className="bestsellers_item">
                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                <div className="bestsellers_image"><img src="images/best_6.png" alt=""/></div>
                                                <div className="bestsellers_content">
                                                    <div className="bestsellers_category"><a href="#">Headphones</a></div>
                                                    <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                    <div className="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                </div>
                                            </div>
                                            <div className="bestsellers_fav active"><i className="fas fa-heart"></i></div>
                                            <ul className="bestsellers_marks">
                                                <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                <li className="bestsellers_mark bestsellers_new">new</li>
                                            </ul>
                                        </div>

                                        {/* Best Sellers Item */}
                                        <div className="bestsellers_item discount">
                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                <div className="bestsellers_image"><img src="images/best_1.png" alt=""/></div>
                                                <div className="bestsellers_content">
                                                    <div className="bestsellers_category"><a href="#">Headphones</a></div>
                                                    <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                    <div className="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                </div>
                                            </div>
                                            <div className="bestsellers_fav active"><i className="fas fa-heart"></i></div>
                                            <ul className="bestsellers_marks">
                                                <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                <li className="bestsellers_mark bestsellers_new">new</li>
                                            </ul>
                                        </div>

                                        {/* Best Sellers Item */}
                                        <div className="bestsellers_item discount">
                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                <div className="bestsellers_image"><img src="images/best_2.png" alt=""/></div>
                                                <div className="bestsellers_content">
                                                    <div className="bestsellers_category"><a href="#">Headphones</a></div>
                                                    <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                    <div className="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                </div>
                                            </div>
                                            <div className="bestsellers_fav"><i className="fas fa-heart"></i></div>
                                            <ul className="bestsellers_marks">
                                                <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                <li className="bestsellers_mark bestsellers_new">new</li>
                                            </ul>
                                        </div>

                                        {/* Best Sellers Item */}
                                        <div className="bestsellers_item">
                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                <div className="bestsellers_image"><img src="images/best_3.png" alt=""/></div>
                                                <div className="bestsellers_content">
                                                    <div className="bestsellers_category"><a href="#">Headphones</a></div>
                                                    <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                    <div className="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                </div>
                                            </div>
                                            <div className="bestsellers_fav"><i className="fas fa-heart"></i></div>
                                            <ul className="bestsellers_marks">
                                                <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                <li className="bestsellers_mark bestsellers_new">new</li>
                                            </ul>
                                        </div>

                                        {/* Best Sellers Item */}
                                        <div className="bestsellers_item">
                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                <div className="bestsellers_image"><img src="images/best_4.png" alt=""/></div>
                                                <div className="bestsellers_content">
                                                    <div className="bestsellers_category"><a href="#">Headphones</a></div>
                                                    <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                    <div className="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                </div>
                                            </div>
                                            <div className="bestsellers_fav"><i className="fas fa-heart"></i></div>
                                            <ul className="bestsellers_marks">
                                                <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                <li className="bestsellers_mark bestsellers_new">new</li>
                                            </ul>
                                        </div>

                                        {/* Best Sellers Item */}
                                        <div className="bestsellers_item discount">
                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                <div className="bestsellers_image"><img src="images/best_5.png" alt=""/></div>
                                                <div className="bestsellers_content">
                                                    <div className="bestsellers_category"><a href="#">Headphones</a></div>
                                                    <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                    <div className="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                </div>
                                            </div>
                                            <div className="bestsellers_fav active"><i className="fas fa-heart"></i></div>
                                            <ul className="bestsellers_marks">
                                                <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                <li className="bestsellers_mark bestsellers_new">new</li>
                                            </ul>
                                        </div>

                                        {/* Best Sellers Item */}
                                        <div className="bestsellers_item">
                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                <div className="bestsellers_image"><img src="images/best_6.png" alt=""/></div>
                                                <div className="bestsellers_content">
                                                    <div className="bestsellers_category"><a href="#">Headphones</a></div>
                                                    <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                    <div className="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                </div>
                                            </div>
                                            <div className="bestsellers_fav active"><i className="fas fa-heart"></i></div>
                                            <ul className="bestsellers_marks">
                                                <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                <li className="bestsellers_mark bestsellers_new">new</li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Adverts */}

            <div className="adverts">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 advert_col">

                            {/* Advert Item */}

                            <div className="advert d-flex flex-row align-items-center justify-content-start">
                                <div className="advert_content">
                                    <div className="advert_title"><a href="#">Trends 2018</a></div>
                                    <div className="advert_text">Lorem ipsum dolor sit amet, consectetur adipiscing Donec et.</div>
                                </div>
                                <div className="ml-auto"><div className="advert_image"><img src="images/adv_1.png" alt=""/></div></div>
                            </div>
                        </div>

                        <div className="col-lg-4 advert_col">

                            {/* Advert Item */}

                            <div className="advert d-flex flex-row align-items-center justify-content-start">
                                <div className="advert_content">
                                    <div className="advert_subtitle">Trends 2018</div>
                                    <div className="advert_title_2"><a href="#">Sale -45%</a></div>
                                    <div className="advert_text">Lorem ipsum dolor sit amet, consectetur.</div>
                                </div>
                                <div className="ml-auto"><div className="advert_image"><img src="images/adv_2.png" alt=""/></div></div>
                            </div>
                        </div>

                        <div className="col-lg-4 advert_col">

                            {/* Advert Item */}

                            <div className="advert d-flex flex-row align-items-center justify-content-start">
                                <div className="advert_content">
                                    <div className="advert_title"><a href="#">Trends 2018</a></div>
                                    <div className="advert_text">Lorem ipsum dolor sit amet, consectetur.</div>
                                </div>
                                <div className="ml-auto"><div className="advert_image"><img src="images/adv_3.png" alt=""/></div></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Trends */}

            <div className="trends">
                <div className="trends_background" style="background-image:url(images/trends_background.jpg)"></div>
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

            {/* Reviews */}

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

            {/* Recently Viewed */}

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

            {/* Brands */}

            <div className="brands">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="brands_slider_container">

                                {/* Brands Slider */}

                                <div className="owl-carousel owl-theme brands_slider">

                                    <div className="owl-item"><div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_1.jpg" alt=""/></div></div>
                                    <div className="owl-item"><div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_2.jpg" alt=""/></div></div>
                                    <div className="owl-item"><div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_3.jpg" alt=""/></div></div>
                                    <div className="owl-item"><div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_4.jpg" alt=""/></div></div>
                                    <div className="owl-item"><div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_5.jpg" alt=""/></div></div>
                                    <div className="owl-item"><div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_6.jpg" alt=""/></div></div>
                                    <div className="owl-item"><div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_7.jpg" alt=""/></div></div>
                                    <div className="owl-item"><div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_8.jpg" alt=""/></div></div>

                                </div>

                                {/* Brands Slider Navigation */}
                                <div className="brands_nav brands_prev"><i className="fas fa-chevron-left"></i></div>
                                <div className="brands_nav brands_next"><i className="fas fa-chevron-right"></i></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;