import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleArborManagement from '../components/service/SingleArborManagement';
import FooterOne from '../common/footer/FooterOne';

const IndoorNOutdoor = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="INDOOR & OUTDOOR"
                currentPage="INDOOR & OUTDOOR"
                Img='ino-banner.png' 
            />
            <SingleArborManagement para="INDOOR & OUTDOOR"/>
            <FooterOne />
        </>
    )
}

export default IndoorNOutdoor;

