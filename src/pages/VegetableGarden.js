import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleArborManagement from '../components/service/SingleArborManagement';
import FooterOne from '../common/footer/FooterOne';

const VegetableGarden = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Vegetable Garden"
                currentPage="Vegetable Garden"
                Img='vg-banner.png' 
            />
            <SingleArborManagement para="VegetableGarden" />
            <FooterOne />
        </>
    )
}

export default VegetableGarden;

