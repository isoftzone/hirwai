import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleArborManagement from '../components/service/SingleArborManagement';
import FooterOne from '../common/footer/FooterOne';

const DesignerWalls = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Designer Walls"
                currentPage="Designer Walls" 
                 Img='dw-banner.png'
            />
            <SingleArborManagement para="Designer Walls" />
            <FooterOne />
        </>
    )
}

export default DesignerWalls;

