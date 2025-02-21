import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleArborManagement from '../components/service/SingleArborManagement';
import FooterOne from '../common/footer/FooterOne';

const SpiceGarden = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Spice Garden"
                currentPage="Spice Garden" 
            />
            <SingleArborManagement para="Spice Garden" />
            <FooterOne />
        </>
    )
}

export default SpiceGarden;

