import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import FeatureOne from '../components/feature/FeatureOne';
import ServiceTwo from '../components/service/ServiceTwo';
import WorkProcessThree from '../components/work-process/WorkProcessThree';
import BlogFour from '../components/blog/BlogFour';
import FooterOne from '../common/footer/FooterOne';
import WorkProcessFour from '../components/work-process/WorkProcessFour';
import ExcellentWorkOne from '../components/excellent-work/ExcellentWorkOne';

const Service = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Our Services"
                currentPage="Our Services" 
                Img="aboutBanner.png"
            />
            {/* <FeatureOne /> */}
            <ExcellentWorkOne />
            <ServiceTwo />
             <WorkProcessFour />
            {/* <BlogFour /> */}
            <FooterOne />
        </>
    )
}

export default Service;