import React from 'react';
import {Link} from 'react-router-dom';

export default class Breadcrumb extends React.Component {
    render(){
        let heading = this.props.heading;
        let publicUrl = process.env.PUBLIC_URL+'/'
        let currentPage = this.props.currentPage ? this.props.currentPage : heading
        let Img = this.props.Img ? this.props.Img :'aboutBanner.png'
        let Img2 = this.props.Img2 ? this.props.Img2 :'aboutBanner.png'
        return (
            <>
                <section class="page-header">
                    <div class="page-header__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/'+Img+')'}}></div>
                    <div class="shape1">
                        <img src={publicUrl+'assets/images/shapes/'+Img2+''} alt="#" />
                    </div>

                    <div class="container">
                        <div class="page-header__inner">
                            <h2>{heading}</h2>
                            <ul class="thm-breadcrumb">
                                <li><Link to={process.env.PUBLIC_URL + `/`}>Home</Link></li>
                                <li><span className="pl-1 pr-1"> - </span></li>
                                <li>{currentPage}</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}