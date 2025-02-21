import React from 'react';
import { Link } from 'react-router-dom';

export default class ServiceTwo extends React.Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/'
        return (
            <>
                <section className="services-two">
                    <div className="services-two__bg" style={{ backgroundImage: 'url(' + publicUrl + 'assets/images/backgrounds/services-v2-bg.jpg)' }}></div>
                    <div className="services-two__bg2" style={{ backgroundImage: 'url(' + publicUrl + 'assets/images/shapes/services-v2-shape2.png)' }}></div>
                    <div className="shape1 wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                        <img className="float-bob-y" src={publicUrl + "assets/images/shapes/services-v2-shape3.png"} alt="#" />
                    </div>
                    <div className="shape2 wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                        <img className="float-bob-y" src={publicUrl + "assets/images/shapes/services-v2-shape4.png"} alt="#" />
                    </div>
                    <div className="container">
                        <div className="sec-title style2 text-center">
                            <div className="sec-title__tagline center">
                                <div className="img-box"><img src={publicUrl + "assets/images/resources/sec-title-img.png"} alt="#" /></div>
                                <h6>Our Services</h6>
                            </div>
                            <h2 className="sec-title__title">
                               HIRWAI LANDSCAPE</h2>
                        </div>

                        <div className="row">
                            {/* Start Services Two Single */}
                            <div className="col-xl-4 col-lg-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="services-two__single">
                                    <div className="services-two__single-inner">
                                        <div className="services-two__single-img">
                                            <div className="inner">
                                                <img src={publicUrl + "assets/images/services/services-v2-img1.jpg"} alt="#" />
                                            </div>
                                            <div className="icon-box">
                                                <span className="icon-shovels"></span>
                                            </div>
                                        </div>

                                        <div className="services-two__single-content">
                                            <div className="services-two__single-content-bg" style={{ backgroundImage: 'url(' + publicUrl + 'assets/images/shapes/services-v2-shape1.png)' }}>
                                            </div>
                                            <h2><Link to={process.env.PUBLIC_URL + `/hardscapes`}>HARDSCAPES</Link></h2>
                                            <p>Hardscape includes non-living landscaping elements like patios, pathways,</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Services Two Single */}

                            {/* Start Services Two Single */}
                            <div className="col-xl-4 col-lg-6 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                                <div className="services-two__single">
                                    <div className="services-two__single-inner">
                                        <div className="services-two__single-img">
                                            <div className="inner">
                                                <img src={publicUrl + "assets/images/services/services-v2-img2.jpg"} alt="#" />
                                            </div>
                                            <div className="icon-box">
                                                <span className="icon-lawn-mower"></span>
                                            </div>
                                        </div>

                                        <div className="services-two__single-content">
                                            <div className="services-two__single-content-bg" style={{ backgroundImage: 'url(' + publicUrl + 'assets/images/shapes/services-v2-shape1.png)' }}>
                                            </div>
                                            <h2><Link to={process.env.PUBLIC_URL + `/softscapes`}>SOFTSCAPE</Link></h2>
                                            <p>Softscape includes living
                                                landscaping elements like
                                                plants, grass, trees, and flowers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Services Two Single */}

                            {/* Start Services Two Single */}
                            <div className="col-xl-4 col-lg-6 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="services-two__single">
                                    <div className="services-two__single-inner">
                                        <div className="services-two__single-img">
                                            <div className="inner">
                                                <img src={publicUrl + "assets/images/services/services-v2-img3.jpg"} alt="#" />
                                            </div>
                                            <div className="icon-box">
                                                <span className="icon-agriculture"></span>
                                            </div>
                                        </div>

                                        <div className="services-two__single-content">
                                            <div className="services-two__single-content-bg" style={{ backgroundImage: 'url(' + publicUrl + 'assets/images/shapes/services-v2-shape1.png)' }}></div>
                                            <h2><Link to={process.env.PUBLIC_URL + `/aquascapes`}>Aquascapes</Link></h2>
                                            <p>Aquascape designs underwater landscapes with plants, rocks,
                                                driftwood,</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Services Two Single */}

                            {/* Start Services Two Single */}
                            <div className="col-xl-4 col-lg-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="services-two__single">
                                    <div className="services-two__single-inner">
                                        <div className="services-two__single-img">
                                            <div className="inner">
                                                <img src={publicUrl + "assets/images/services/services-v2-img4.jpg"} alt="#" />
                                            </div>
                                            <div className="icon-box">
                                                <span className="icon-gardening-1"></span>
                                            </div>
                                        </div>

                                        <div className="services-two__single-content">
                                            <div className="services-two__single-content-bg" style={{ backgroundImage: 'url(' + publicUrl + 'assets/images/shapes/services-v2-shape1.png)' }}></div>
                                            <h2><Link to={process.env.PUBLIC_URL + `/plantLibrary`}>Plant Library</Link></h2>
                                            <p>A plant library is a collection of
                                                diverse plant species
                                                information..</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Services Two Single */}

                            {/* Start Services Two Single */}
                            <div className="col-xl-4 col-lg-6 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                                <div className="services-two__single">
                                    <div className="services-two__single-inner">
                                        <div className="services-two__single-img">
                                            <div className="inner">
                                                <img src={publicUrl + "assets/images/services/services-v2-img5.jpg"} alt="#" />
                                            </div>
                                            <div className="icon-box">
                                                <span className="icon-pruning-shears"></span>
                                            </div>
                                        </div>

                                        <div className="services-two__single-content">
                                            <div className="services-two__single-content-bg" style={{ backgroundImage: 'url(' + publicUrl + 'assets/images/shapes/services-v2-shape1.png)' }}></div>
                                            <h2><Link to={process.env.PUBLIC_URL + `/treeReplanting`}>Tree Replanting</Link></h2>
                                            <p>Hirwai landscape was conceptualized in the year 2010 with a dream to extend 
</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Services Two Single */}

                            {/* Start Services Two Single */}
                            <div className="col-xl-4 col-lg-6 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="services-two__single">
                                    <div className="services-two__single-inner">
                                        <div className="services-two__single-img">
                                            <div className="inner">
                                                <img src={publicUrl + "assets/images/services/services-v2-img6.jpg"} alt="#" />
                                            </div>
                                            <div className="icon-box">
                                                <span className="icon-planting"></span>
                                            </div>
                                        </div>

                                        <div className="services-two__single-content">
                                            <div className="services-two__single-content-bg" style={{ backgroundImage: 'url(' + publicUrl + 'assets/images/shapes/services-v2-shape1.png)' }}></div>
                                            <h2><Link to={process.env.PUBLIC_URL + `/architect`}>Architect</Link></h2>
                                            <p>We ensure that a landscape well designed is also well maintained</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Services Two Single */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}