import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleArborManagement from '../components/service/SingleArborManagement';
import FooterOne from '../common/footer/FooterOne';

const Waterfalls = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Waterfalls"
                currentPage="Waterfalls"
                Img='waterfallBanner.png' 
            />
            <SingleArborManagement para="Waterfalls"/>
            <FooterOne />
        </>
    )
}

export default Waterfalls;

