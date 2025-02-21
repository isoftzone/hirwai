import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleArborManagement from '../components/service/SingleArborManagement';
import FooterOne from '../common/footer/FooterOne';

const PlantLibrary = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Plant Library"
                currentPage="Plant Library" 
            />
            <SingleArborManagement para="Plant Library"/>
            <FooterOne />
        </>
    )
}

export default PlantLibrary;

