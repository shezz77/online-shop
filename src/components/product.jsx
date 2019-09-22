import React from 'react';
import {featured_1} from "../assets";

const Product = ({product}) => {
    return (
        <div className="featured_slider_item">
            <div className="border_active"></div>
            <div className="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
                <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src={product.title_image_url} alt=""/></div>
                <div className="product_content">
                    <div className="product_price discount">$225<span>$300</span></div>
                    <div className="product_name"><div><a href="product.html">{product.title}</a></div></div>
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
    );
};

export default Product;