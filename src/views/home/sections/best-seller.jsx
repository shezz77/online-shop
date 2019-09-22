import React from 'react';

const BestSeller = () => {
    return (
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
    );
};

export default BestSeller;