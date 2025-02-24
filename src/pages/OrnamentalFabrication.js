import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleArborManagement from '../components/service/SingleArborManagement';
import FooterOne from '../common/footer/FooterOne';

const OrnamentalFabrication = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Ornamental Fabrication"
                currentPage="Ornamental Fabrication" 
                 Img='of-banner.png'
            />
            <SingleArborManagement para="Ornamental Fabrication" />
            <FooterOne />
        </>
    )
}

export default OrnamentalFabrication;

