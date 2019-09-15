import React from 'react';
import {char_1, char_2, char_3, char_4} from "../../../assets";

const Characteristics = () => {
    return (
        <div className="characteristics">
            <div className="container">
                <div className="row">

                    {/* Char. Item */}
                    <div className="col-lg-3 col-md-6 char_col">

                        <div className="char_item d-flex flex-row align-items-center justify-content-start">
                            <div className="char_icon"><img src={char_1} alt=""/></div>
                            <div className="char_content">
                                <div className="char_title">Free Delivery</div>
                                <div className="char_subtitle">from $50</div>
                            </div>
                        </div>
                    </div>

                    {/* Char. Item */}
                    <div className="col-lg-3 col-md-6 char_col">

                        <div className="char_item d-flex flex-row align-items-center justify-content-start">
                            <div className="char_icon"><img src={char_2} alt=""/></div>
                            <div className="char_content">
                                <div className="char_title">Free Delivery</div>
                                <div className="char_subtitle">from $50</div>
                            </div>
                        </div>
                    </div>

                    {/* Char. Item */}
                    <div className="col-lg-3 col-md-6 char_col">

                        <div className="char_item d-flex flex-row align-items-center justify-content-start">
                            <div className="char_icon"><img src={char_3} alt=""/></div>
                            <div className="char_content">
                                <div className="char_title">Free Delivery</div>
                                <div className="char_subtitle">from $50</div>
                            </div>
                        </div>
                    </div>

                    {/* Char. Item */}
                    <div className="col-lg-3 col-md-6 char_col">

                        <div className="char_item d-flex flex-row align-items-center justify-content-start">
                            <div className="char_icon"><img src={char_4} alt=""/></div>
                            <div className="char_content">
                                <div className="char_title">Free Delivery</div>
                                <div className="char_subtitle">from $50</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Characteristics;