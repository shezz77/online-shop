import React from 'react';
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

const Layout = (props) => {
    const {children} = props;
    return (
        <div>
            <div>
                <div className="super_container">
                    <Header/>
                    {props.children}
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

export default Layout;