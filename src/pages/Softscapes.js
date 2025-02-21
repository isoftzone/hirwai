import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleArborManagement from '../components/service/SingleArborManagement';
import FooterOne from '../common/footer/FooterOne';

const Softscapes = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Softscapes"
                currentPage="Softscapes" 
            />
            <SingleArborManagement para="Softscapes" />
            <FooterOne />
        </>
    )
}

export default Softscapes;

