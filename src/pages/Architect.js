import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleArborManagement from '../components/service/SingleArborManagement';
import FooterOne from '../common/footer/FooterOne';

const Architect = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Architect"
                currentPage="Architect" 
            />
            <SingleArborManagement para="Architect"/>
            <FooterOne />
        </>
    )
}

export default Architect;

