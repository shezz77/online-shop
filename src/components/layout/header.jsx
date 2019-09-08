import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="top_bar">
                <div className="container">
                    <div className="row">
                        <div className="col d-flex flex-row">
                            <div className="top_bar_contact_item">
                                <div className="top_bar_icon"><img src="images/phone.png" alt=""/></div>
                                +38 068 005 3570
                            </div>
                            <div className="top_bar_contact_item">
                                <div className="top_bar_icon"><img src="images/mail.png" alt=""/></div>
                                <a href="mailto:fastsales@gmail.com">fastsales@gmail.com</a></div>
                            <div className="top_bar_content ml-auto">
                                <div className="top_bar_menu">
                                    <ul className="standard_dropdown top_bar_dropdown">
                                        <li>
                                            <a href="#sa">English<i className="fas fa-chevron-down"></i></a>
                                            <ul>
                                                <li><a href="#sa">Italian</a></li>
                                                <li><a href="#sa">Spanish</a></li>
                                                <li><a href="#sa">Japanese</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#sa">$ US dollar<i
                                                className="fas fa-chevron-down"></i></a>
                                            <ul>
                                                <li><a href="#sa">EUR Euro</a></li>
                                                <li><a href="#sa">GBP British Pound</a></li>
                                                <li><a href="#sa">JPY Japanese Yen</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="top_bar_user">
                                    <div className="user_icon"><img src="images/user.svg" alt=""/></div>
                                    <div><a href="#sa">Register</a></div>
                                    <div><a href="#sa">Sign in</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header_main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-sm-3 col-3 order-1">
                            <div className="logo_container">
                                <div className="logo"><a href="#sa">OneTech</a></div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
                            <div className="header_search">
                                <div className="header_search_content">
                                    <div className="header_search_form_container">
                                        <form action="#" className="header_search_form clearfix">
                                            <input type="search" required="required"
                                                   className="header_search_input"
                                                   placeholder="Search for products..."/>
                                            <div className="custom_dropdown">
                                                <div className="custom_dropdown_list">
                                                    <span className="custom_dropdown_placeholder clc">All Categories</span>
                                                    <i className="fas fa-chevron-down"></i>
                                                    <ul className="custom_list clc">
                                                        <li><a className="clc" href="#sa">All
                                                            Categories</a></li>
                                                        <li><a className="clc" href="#sa">Computers</a>
                                                        </li>
                                                        <li><a className="clc" href="#sa">Laptops</a></li>
                                                        <li><a className="clc" href="#sa">Cameras</a></li>
                                                        <li><a className="clc" href="#sa">Hardware</a>
                                                        </li>
                                                        <li><a className="clc" href="#sa">Smartphones</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <button type="submit"
                                                    className="header_search_button trans_300"
                                                    value="Submit"><img src="images/search.png" alt=""/>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
                            <div
                                className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                                <div
                                    className="wishlist d-flex flex-row align-items-center justify-content-end">
                                    <div className="wishlist_icon"><img src="images/heart.png" alt=""/></div>
                                    <div className="wishlist_content">
                                        <div className="wishlist_text"><a href="#sa">Wishlist</a></div>
                                        <div className="wishlist_count">115</div>
                                    </div>
                                </div>

                                <div className="cart">
                                    <div
                                        className="cart_container d-flex flex-row align-items-center justify-content-end">
                                        <div className="cart_icon">
                                            <img src="images/cart.png" alt=""/>
                                            <div className="cart_count"><span>10</span></div>
                                        </div>
                                        <div className="cart_content">
                                            <div className="cart_text"><a href="#sa">Cart</a></div>
                                            <div className="cart_price">$85</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <nav className="main_nav">
                <div className="container">
                    <div className="row">
                        <div className="col">

                            <div className="main_nav_content d-flex flex-row">


                                <div className="cat_menu_container">
                                    <div
                                        className="cat_menu_title d-flex flex-row align-items-center justify-content-start">
                                        <div className="cat_burger"><span></span><span></span><span></span>
                                        </div>
                                        <div className="cat_menu_text">categories</div>
                                    </div>

                                    <ul className="cat_menu">
                                        <li><a href="#sa">Computers & Laptops <i
                                            className="fas fa-chevron-right ml-auto"></i></a></li>
                                        <li><a href="#sa">Cameras & Photos<i
                                            className="fas fa-chevron-right"></i></a></li>
                                        <li className="hassubs">
                                            <a href="#sa">Hardware<i className="fas fa-chevron-right"></i></a>
                                            <ul>
                                                <li className="hassubs">
                                                    <a href="#sa">Menu Item<i
                                                        className="fas fa-chevron-right"></i></a>
                                                    <ul>
                                                        <li><a href="#sa">Menu Item<i
                                                            className="fas fa-chevron-right"></i></a></li>
                                                        <li><a href="#sa">Menu Item<i
                                                            className="fas fa-chevron-right"></i></a></li>
                                                        <li><a href="#sa">Menu Item<i
                                                            className="fas fa-chevron-right"></i></a></li>
                                                        <li><a href="#sa">Menu Item<i
                                                            className="fas fa-chevron-right"></i></a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#sa">Menu Item<i
                                                    className="fas fa-chevron-right"></i></a></li>
                                                <li><a href="#sa">Menu Item<i
                                                    className="fas fa-chevron-right"></i></a></li>
                                                <li><a href="#sa">Menu Item<i
                                                    className="fas fa-chevron-right"></i></a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#sa">Smartphones & Tablets<i
                                            className="fas fa-chevron-right"></i></a></li>
                                        <li><a href="#sa">TV & Audio<i
                                            className="fas fa-chevron-right"></i></a></li>
                                        <li><a href="#sa">Gadgets<i className="fas fa-chevron-right"></i></a>
                                        </li>
                                        <li><a href="#sa">Car Electronics<i
                                            className="fas fa-chevron-right"></i></a></li>
                                        <li><a href="#sa">Video Games & Consoles<i
                                            className="fas fa-chevron-right"></i></a></li>
                                        <li><a href="#sa">Accessories<i className="fas fa-chevron-right"></i></a>
                                        </li>
                                    </ul>
                                </div>


                                <div className="main_nav_menu ml-auto">
                                    <ul className="standard_dropdown main_nav_dropdown">
                                        <li><a href="#sa">Home<i className="fas fa-chevron-down"></i></a></li>
                                        <li className="hassubs">
                                            <a href="#sa">Super Deals<i
                                                className="fas fa-chevron-down"></i></a>
                                            <ul>
                                                <li>
                                                    <a href="#sa">Menu Item<i
                                                        className="fas fa-chevron-down"></i></a>
                                                    <ul>
                                                        <li><a href="#sa">Menu Item<i
                                                            className="fas fa-chevron-down"></i></a></li>
                                                        <li><a href="#sa">Menu Item<i
                                                            className="fas fa-chevron-down"></i></a></li>
                                                        <li><a href="#sa">Menu Item<i
                                                            className="fas fa-chevron-down"></i></a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#sa">Menu Item<i
                                                    className="fas fa-chevron-down"></i></a></li>
                                                <li><a href="#sa">Menu Item<i
                                                    className="fas fa-chevron-down"></i></a></li>
                                                <li><a href="#sa">Menu Item<i
                                                    className="fas fa-chevron-down"></i></a></li>
                                            </ul>
                                        </li>
                                        <li className="hassubs">
                                            <a href="#sa">Featured Brands<i
                                                className="fas fa-chevron-down"></i></a>
                                            <ul>
                                                <li>
                                                    <a href="#sa">Menu Item<i
                                                        className="fas fa-chevron-down"></i></a>
                                                    <ul>
                                                        <li><a href="#sa">Menu Item<i
                                                            className="fas fa-chevron-down"></i></a></li>
                                                        <li><a href="#sa">Menu Item<i
                                                            className="fas fa-chevron-down"></i></a></li>
                                                        <li><a href="#sa">Menu Item<i
                                                            className="fas fa-chevron-down"></i></a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#sa">Menu Item<i
                                                    className="fas fa-chevron-down"></i></a></li>
                                                <li><a href="#sa">Menu Item<i
                                                    className="fas fa-chevron-down"></i></a></li>
                                                <li><a href="#sa">Menu Item<i
                                                    className="fas fa-chevron-down"></i></a></li>
                                            </ul>
                                        </li>
                                        <li className="hassubs">
                                            <a href="#sa">Pages<i className="fas fa-chevron-down"></i></a>
                                            <ul>
                                                <li><a href="shop.html">Shop<i
                                                    className="fas fa-chevron-down"></i></a></li>
                                                <li><a href="product.html">Product<i
                                                    className="fas fa-chevron-down"></i></a></li>
                                                <li><a href="blog.html">Blog<i
                                                    className="fas fa-chevron-down"></i></a></li>
                                                <li><a href="blog_single.html">Blog Post<i
                                                    className="fas fa-chevron-down"></i></a></li>
                                                <li><a href="regular.html">Regular Post<i
                                                    className="fas fa-chevron-down"></i></a></li>
                                                <li><a href="cart.html">Cart<i
                                                    className="fas fa-chevron-down"></i></a></li>
                                                <li><a href="contact.html">Contact<i
                                                    className="fas fa-chevron-down"></i></a></li>
                                            </ul>
                                        </li>
                                        <li><a href="blog.html">Blog<i className="fas fa-chevron-down"></i></a>
                                        </li>
                                        <li><a href="contact.html">Contact<i
                                            className="fas fa-chevron-down"></i></a></li>
                                    </ul>
                                </div>


                                <div className="menu_trigger_container ml-auto">
                                    <div
                                        className="menu_trigger d-flex flex-row align-items-center justify-content-end">
                                        <div className="menu_burger">
                                            <div className="menu_trigger_text">menu</div>
                                            <div className="cat_burger menu_burger_inner">
                                                <span></span><span></span><span></span></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>


            <div className="page_menu">
                <div className="container">
                    <div className="row">
                        <div className="col">

                            <div className="page_menu_content">

                                <div className="page_menu_search">
                                    <form action="#">
                                        <input type="search" required="required"
                                               className="page_menu_search_input"
                                               placeholder="Search for products..."/>
                                    </form>
                                </div>
                                <ul className="page_menu_nav">
                                    <li className="page_menu_item has-children">
                                        <a href="#sa">Language<i className="fa fa-angle-down"></i></a>
                                        <ul className="page_menu_selection">
                                            <li><a href="#sa">English<i className="fa fa-angle-down"></i></a>
                                            </li>
                                            <li><a href="#sa">Italian<i className="fa fa-angle-down"></i></a>
                                            </li>
                                            <li><a href="#sa">Spanish<i className="fa fa-angle-down"></i></a>
                                            </li>
                                            <li><a href="#sa">Japanese<i className="fa fa-angle-down"></i></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="page_menu_item has-children">
                                        <a href="#sa">Currency<i className="fa fa-angle-down"></i></a>
                                        <ul className="page_menu_selection">
                                            <li><a href="#sa">US Dollar<i
                                                className="fa fa-angle-down"></i></a></li>
                                            <li><a href="#sa">EUR Euro<i className="fa fa-angle-down"></i></a>
                                            </li>
                                            <li><a href="#sa">GBP British Pound<i
                                                className="fa fa-angle-down"></i></a></li>
                                            <li><a href="#sa">JPY Japanese Yen<i
                                                className="fa fa-angle-down"></i></a></li>
                                        </ul>
                                    </li>
                                    <li className="page_menu_item">
                                        <a href="#sa">Home<i className="fa fa-angle-down"></i></a>
                                    </li>
                                    <li className="page_menu_item has-children">
                                        <a href="#sa">Super Deals<i className="fa fa-angle-down"></i></a>
                                        <ul className="page_menu_selection">
                                            <li><a href="#sa">Super Deals<i className="fa fa-angle-down"></i></a>
                                            </li>
                                            <li className="page_menu_item has-children">
                                                <a href="#sa">Menu Item<i
                                                    className="fa fa-angle-down"></i></a>
                                                <ul className="page_menu_selection">
                                                    <li><a href="#sa">Menu Item<i
                                                        className="fa fa-angle-down"></i></a></li>
                                                    <li><a href="#sa">Menu Item<i
                                                        className="fa fa-angle-down"></i></a></li>
                                                    <li><a href="#sa">Menu Item<i
                                                        className="fa fa-angle-down"></i></a></li>
                                                    <li><a href="#sa">Menu Item<i
                                                        className="fa fa-angle-down"></i></a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#sa">Menu Item<i
                                                className="fa fa-angle-down"></i></a></li>
                                            <li><a href="#sa">Menu Item<i
                                                className="fa fa-angle-down"></i></a></li>
                                            <li><a href="#sa">Menu Item<i
                                                className="fa fa-angle-down"></i></a></li>
                                        </ul>
                                    </li>
                                    <li className="page_menu_item has-children">
                                        <a href="#sa">Featured Brands<i className="fa fa-angle-down"></i></a>
                                        <ul className="page_menu_selection">
                                            <li><a href="#sa">Featured Brands<i
                                                className="fa fa-angle-down"></i></a></li>
                                            <li><a href="#sa">Menu Item<i
                                                className="fa fa-angle-down"></i></a></li>
                                            <li><a href="#sa">Menu Item<i
                                                className="fa fa-angle-down"></i></a></li>
                                            <li><a href="#sa">Menu Item<i
                                                className="fa fa-angle-down"></i></a></li>
                                        </ul>
                                    </li>
                                    <li className="page_menu_item has-children">
                                        <a href="#sa">Trending Styles<i className="fa fa-angle-down"></i></a>
                                        <ul className="page_menu_selection">
                                            <li><a href="#sa">Trending Styles<i
                                                className="fa fa-angle-down"></i></a></li>
                                            <li><a href="#sa">Menu Item<i
                                                className="fa fa-angle-down"></i></a></li>
                                            <li><a href="#sa">Menu Item<i
                                                className="fa fa-angle-down"></i></a></li>
                                            <li><a href="#sa">Menu Item<i
                                                className="fa fa-angle-down"></i></a></li>
                                        </ul>
                                    </li>
                                    <li className="page_menu_item"><a href="blog.html">blog<i
                                        className="fa fa-angle-down"></i></a></li>
                                    <li className="page_menu_item"><a href="contact.html">contact<i
                                        className="fa fa-angle-down"></i></a></li>
                                </ul>

                                <div className="menu_contact">
                                    <div className="menu_contact_item">
                                        <div className="menu_contact_icon"><img src="images/phone_white.png"
                                                                                alt=""/></div>
                                        +38 068 005 3570
                                    </div>
                                    <div className="menu_contact_item">
                                        <div className="menu_contact_icon"><img src="images/mail_white.png"
                                                                                alt=""/></div>
                                        <a href="mailto:fastsales@gmail.com">fastsales@gmail.com</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
};

export default Header;