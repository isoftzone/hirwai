import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleArborManagement from '../components/service/SingleArborManagement';
import FooterOne from '../common/footer/FooterOne';

const Sculptures = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Sculptures"
                currentPage="Sculptures" 
            />
            <SingleArborManagement para="Sculptures" />
            <FooterOne />
        </>
    )
}

export default Sculptures;

