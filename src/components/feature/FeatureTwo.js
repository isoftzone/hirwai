import React from 'react';
import { Link } from 'react-router-dom';

export default class FeatureTwo extends React.Component {
    componentDidMount() {

        const $ = window.$;

        if ($(".features-one__carousel").length) {
            $(".features-one__carousel").owlCarousel({
                loop: true,
                margin: 30,
                nav: false,
                smartSpeed: 500,
                autoHeight: false,
                autoplay: true,
                dots: false,
                autoplayTimeout: 10000,
                navText: [
                    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                    '<i class="fa fa-angle-right" aria-hidden="true"></i>',
                ],
                responsive: {
                    0: {
                        items: 1,
                    },
                    768: {
                        items: 2,
                    },
                    992: {
                        items: 3,
                    },
                    1200: {
                        items: 4,
                    },
                },
            });
        }

    }
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/'
        return (
            <>
                <section className="features-two">
                    <div className="features-two__bg" style={{ backgroundImage: 'url(' + publicUrl + 'assets/images/backgrounds/features-v2-bg.png)' }}></div>
                    <div className="auto-container">
                        <div className="sec-title-three text-center">
                            <div className="sec-title-three__tagline">
                                <h6>What we offer</h6>
                            </div>
                            <h2 className="sec-title-three__title">Hirwai Landscape</h2>
                        </div>
                        <div className="row">
                            {/* Start Features Two Single */}
                            <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="features-two__single">
                                    <div className="features-two__single-content">
                                        <div className="count-box">
                                            01
                                        </div>
                                        <div className="inner">
                                            <div className="icon-box">
                                                <span className="icon-gardening-2"></span>
                                            </div>

                                            <div className="content-box">
                                                <div className="title">
                                                    <h2><Link to={process.env.PUBLIC_URL + `/arbor-management`}>Experienced & Passionate Team</Link></h2>
                                                </div>
                                                <p>Our team consists of highly skilled landscapers, designers, and horticulturists who bring years of experience and creativity to every project. We stay up to date with the latest landscaping trends, materials, and techniques to ensure you receive the best service possible </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="features-two__single-img">
                                        <img src={publicUrl + "assets/images/resources/features-v2-img4.png"} alt="#" />
                                    </div>
                                </div>
                            </div>
                            {/* End Features Two Single */}

                            {/* Start Features Two Single */}
                            <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                                <div className="features-two__single">
                                    <div className="features-two__single-content">
                                        <div className="count-box">
                                            02
                                        </div>
                                        <div className="inner">
                                            <div className="icon-box">
                                                <span className="icon-chair"></span>
                                            </div>

                                            <div className="content-box">
                                                <div className="title">
                                                    <h2><Link to={process.env.PUBLIC_URL + `/arbor-management`}>High-Quality Materials</Link></h2>
                                                </div>
                                                <p>We believe in delivering long-lasting results by using top-quality materials and the latest landscaping techniques. Whether it’s durable pavers, premium-grade plants, or eco-friendly fertilizers, we source the best products to ensure sustainability and beauty.                                             </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="features-two__single-img">
                                        <img src={publicUrl + "assets/images/resources/features-v2-img2.png"} alt="#" />
                                    </div>
                                </div>
                            </div>
                            {/* End Features Two Single */}

                            {/* Start Features Two Single */}
                            <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="features-two__single">
                                    <div className="features-two__single-content">
                                        <div className="count-box">
                                            03
                                        </div>
                                        <div className="inner">
                                            <div className="icon-box">
                                                <span className="icon-pruning-shears"></span>
                                            </div>

                                            <div className="content-box">
                                                <div className="title">
                                                    <h2><Link to={process.env.PUBLIC_URL + `/arbor-management`}>Residential Landscaping</Link></h2>
                                                </div>
                                                <p>Whether you’re a homeowner looking to create a relaxing backyard oasis or a business owner wanting to enhance your commercial property's curb appeal, we have the expertise to handle projects of all sizes. Our diverse portfolio includes residential gardens and estates.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="features-two__single-img">
                                        <img src={publicUrl + "assets/images/resources/features-v2-img3.png"} alt="#" />
                                    </div>
                                </div>
                            </div>
                            {/* End Features Two Single */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}