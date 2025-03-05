import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleArborManagement from '../components/service/SingleArborManagement';
import FooterOne from '../common/footer/FooterOne';

const Mounts = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Mounts"
                currentPage="Mounts"
                Img='mountBanner.png' 
            />
            <SingleArborManagement para="Mounts" />
            <FooterOne />
        </>
    )
}

export default Mounts;

