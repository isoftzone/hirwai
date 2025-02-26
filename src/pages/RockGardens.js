import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleArborManagement from '../components/service/SingleArborManagement';
import FooterOne from '../common/footer/FooterOne';

const RockGardens = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Rock Gardens"
                currentPage="Rock Gardens" 
                 Img='rg-banner.png'
            />
            <SingleArborManagement para="Rock Gardens" />
            <FooterOne />
        </>
    )
}

export default RockGardens;

