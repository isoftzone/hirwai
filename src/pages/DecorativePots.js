import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleArborManagement from '../components/service/SingleArborManagement';
import FooterOne from '../common/footer/FooterOne';

const DecorativePots = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Decorative Pots"
                currentPage="DecorativePots"
                Img='potsBanner.png' 
            />
            <SingleArborManagement para="DecorativePots"/>
            <FooterOne />
        </>
    )
}

export default DecorativePots;

