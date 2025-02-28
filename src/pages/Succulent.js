import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleArborManagement from '../components/service/SingleArborManagement';
import FooterOne from '../common/footer/FooterOne';

const Succulent = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Succulent"
                currentPage="Succulent"
                Img='succulentBanner.png' 
            />
            <SingleArborManagement para="Succulent"/>
            <FooterOne />
        </>
    )
}

export default Succulent;

