import React from 'react';
import ReactDOM from 'react-dom';
import AppContext from './context';


import "./assets/styles/bootstrap4/bootstrap.min.css";
import "./assets/plugins/fontawesome-free-5.0.1/css/fontawesome-all.css";
import "./assets/plugins/OwlCarousel2-2.2.1/owl.carousel.css";
import "./assets/plugins/OwlCarousel2-2.2.1/owl.theme.default.css";
import "./assets/plugins/OwlCarousel2-2.2.1/animate.css";
import "./assets/plugins/slick-1.8.0/slick.css";
import "./assets/styles/main_styles.css";
import "./assets/styles/responsive.css";


ReactDOM.render(
    <AppContext/>
    ,document.getElementById('root'));
