import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleArborManagement from '../components/service/SingleArborManagement';
import FooterOne from '../common/footer/FooterOne';

const Fountains = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Fountains"
                currentPage="Fountains"
                Img='fountainBanner.png' 
            />
            <SingleArborManagement para="Fountains"/>
            <FooterOne />
        </>
    )
}

export default Fountains;

