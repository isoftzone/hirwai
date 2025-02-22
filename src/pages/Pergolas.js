import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleArborManagement from '../components/service/SingleArborManagement';
import FooterOne from '../common/footer/FooterOne';

const Pergolas = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Pergolas"
                currentPage="Pergolas" 
                Img='pergolas-banner.png'
            />
            <SingleArborManagement para="Pergolas" />
            <FooterOne />
        </>
    )
}

export default Pergolas;

