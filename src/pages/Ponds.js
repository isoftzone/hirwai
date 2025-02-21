import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleArborManagement from '../components/service/SingleArborManagement';
import FooterOne from '../common/footer/FooterOne';

const Ponds = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Ponds"
                currentPage="Ponds" 
            />
            <SingleArborManagement para="Ponds"/>
            <FooterOne />
        </>
    )
}

export default Ponds;

