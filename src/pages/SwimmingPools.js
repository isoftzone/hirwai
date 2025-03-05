import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleArborManagement from '../components/service/SingleArborManagement';
import FooterOne from '../common/footer/FooterOne';

const SwimmingPools = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Swimming Pools"
                currentPage="Swimming Pools"
                Img='swp-banner.png' 
            />
            <SingleArborManagement para="Swimming Pools"/>
            <FooterOne />
        </>
    )
}

export default SwimmingPools;

