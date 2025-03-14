import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleArborManagement from '../components/service/SingleArborManagement';
import FooterOne from '../common/footer/FooterOne';

const Gazebo = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Gazebo’s"
                currentPage="Gazebo’s"
                Img='gazeboBanner.png' 
            />
            <SingleArborManagement para="Gazebo" />
            <FooterOne />
        </>
    )
}

export default Gazebo;

