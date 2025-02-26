import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleArborManagement from '../components/service/SingleArborManagement';
import FooterOne from '../common/footer/FooterOne';

const Deck = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Deck"
                currentPage="Deck"
                Img="deckBanner.png" 
            />
            <SingleArborManagement para="Deck" />
            <FooterOne />
        </>
    )
}

export default Deck;

