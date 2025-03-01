import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleArborManagement from '../components/service/SingleArborManagement';
import FooterOne from '../common/footer/FooterOne';

const TreeReplanting = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Tree Replanting"
                currentPage="Tree Replanting"
                Img="tr-banner.png" 
            />
            <SingleArborManagement para="Tree Replanting"/>
            <FooterOne />
        </>
    )
}

export default TreeReplanting;

