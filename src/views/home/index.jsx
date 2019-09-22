import React from 'react';
import Layout from "../../hoc/layout";
import Banner from "./sections/banner";
import Characteristics from "./sections/characteristics";
import AppContext from './../../context/app-context';
import axios from 'axios';
import {popular_1} from "../../assets";
import Deals from "./sections/deals";

class HomeIndex extends React.Component {
    static contextType = AppContext;

    componentDidMount () {
        axios.get('https://solelinks.com/api/releases').then((res) => {
            console.log(res.data);

            this.context.handleUpdateMainState({products: res.data.data.data})


        }).catch((err) => {
            console.log(err);
        })
    }

    render() {
        return (
            <Layout>

                {/* Banner */}
                <Banner/>

                {/* Characteristics */}
                <Characteristics/>

                {/* Deals of the week */}
                <Deals/>


                {/* Popular Categories */}



                {/* Banner */}



                {/* Hot New Arrivals */}



                {/* Best Sellers */}



                {/* Adverts */}



                {/* Trends */}



                {/* Reviews */}



                {/* Recently Viewed */}



                {/* Brands */}


            </Layout>
        );
    }
};

export default HomeIndex;