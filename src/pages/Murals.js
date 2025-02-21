import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleArborManagement from '../components/service/SingleArborManagement';
import FooterOne from '../common/footer/FooterOne';

const Murals = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Murals"
                currentPage="Murals" 
            />
            <SingleArborManagement para="Murals" />
            <FooterOne />
        </>
    )
}

export default Murals;

