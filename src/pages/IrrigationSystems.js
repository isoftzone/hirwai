import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleArborManagement from '../components/service/SingleArborManagement';
import FooterOne from '../common/footer/FooterOne';

const IrrigationSystems = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Irrigation Systems"
                currentPage="Irrigation Systems" 
            />
            <SingleArborManagement para="Irrigation Systems"/>
            <FooterOne />
        </>
    )
}

export default IrrigationSystems;

