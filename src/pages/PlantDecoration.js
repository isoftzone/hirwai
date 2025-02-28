import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleArborManagement from '../components/service/SingleArborManagement';
import FooterOne from '../common/footer/FooterOne';

const PlantDecoration = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Plant Decoration"
                currentPage="Plant Decoration"
                Img='pd-Banner.png' 
            />
            <SingleArborManagement para="Plant Decoration"/>
            <FooterOne />
        </>
    )
}

export default PlantDecoration;

