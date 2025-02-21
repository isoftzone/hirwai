import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleArborManagement from '../components/service/SingleArborManagement';
import FooterOne from '../common/footer/FooterOne';

const Topiaries = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Topiaries"
                currentPage="Topiaries" 
            />
            <SingleArborManagement para="Topiaries" />
            <FooterOne />
        </>
    )
}

export default Topiaries;

