import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleArborManagement from '../components/service/SingleArborManagement';
import FooterOne from '../common/footer/FooterOne';

const Hardscapes = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Hardscapes"
                currentPage="Hardscapes" 
                 Img='hardBanner.png'
            />
            <SingleArborManagement para="Hardscapes" />
            <FooterOne />
        </>
    )
}

export default Hardscapes;

