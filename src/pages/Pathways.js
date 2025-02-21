import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleArborManagement from '../components/service/SingleArborManagement';
import FooterOne from '../common/footer/FooterOne';

const Pathways = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Pathways"
                currentPage="Pathways" 
            />
            <SingleArborManagement para="Pathways" />
            <FooterOne />
        </>
    )
}

export default Pathways;

