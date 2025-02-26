import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleArborManagement from '../components/service/SingleArborManagement';
import FooterOne from '../common/footer/FooterOne';

const PavedAreas = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Paved Areas"
                currentPage="Paved Areas"
                Img='pa-banner.png'
            />
            <SingleArborManagement para="Paved Areas" />
            <FooterOne />
        </>
    )
}

export default PavedAreas;

