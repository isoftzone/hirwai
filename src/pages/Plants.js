import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleArborManagement from '../components/service/SingleArborManagement';
import FooterOne from '../common/footer/FooterOne';

const Plants = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Plants"
                currentPage="Plants"
                Img='plantBanner.png' 
            />
            <SingleArborManagement para="Plants"/>
            <FooterOne />
        </>
    )
}

export default Plants;

