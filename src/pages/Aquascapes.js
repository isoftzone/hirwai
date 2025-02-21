import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleArborManagement from '../components/service/SingleArborManagement';
import FooterOne from '../common/footer/FooterOne';

const Aquascapes = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Aquascapes"
                currentPage="Aquascapes" 
            />
            <SingleArborManagement para="Aquascapes"/>
            <FooterOne />
        </>
    )
}

export default Aquascapes;

