import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleArborManagement from '../components/service/SingleArborManagement';
import FooterOne from '../common/footer/FooterOne';

const ShrubPlantation = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="ShrubPlantation"
                currentPage="ShrubPlantation" 
            />
            <SingleArborManagement para="ShrubPlantation" />
            <FooterOne />
        </>
    )
}

export default ShrubPlantation;

