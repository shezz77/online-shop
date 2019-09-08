import React from 'react';
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

const Layout = ({children}) => {
    return (
        <div>
            <div>
                <div className="super_container">
                    <Header/>
                    {children}
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

export default Layout;