import React from 'react';
import { Link } from 'react-router-dom';
// import img from '../../../public/assets/images/backgrounds/s1.png'
export default class ServiceThree extends React.Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/'
        return (
            <>
                <section className="services-three">
                    <div className="shape2  wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                        <img className="float-bob-y" src={publicUrl + "assets/images/shapes/services-v3-shape1.png"} alt="#" />
                    </div>
                    <div className="shape3 wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                        <img className="float-bob-y" src={publicUrl + "assets/images/shapes/services-v3-shape2.png"} alt="#" />
                    </div>
                    <div className="services-three__bg" style={{ backgroundImage: 'url(' + publicUrl + 'assets/images/backgrounds/wwd1.png)' }}></div>
                    <div className="container">
                        <div className="services-three__top">
                            <div className="sec-title-three">
                                <div className="sec-title-three__tagline">
                                    <h6>What we do</h6>
                                </div>
                                <h2 className="sec-title-three__title">HIRWAI LANDSCAPE</h2>
                            </div>

                            <div className="services-three__top-text">
                                <p>A landscape is part of the Earths surface that can be viewed at one time from one place. It 
                                consists of the geographic features that mark, or are characteristic of, a particular area.</p>
                            </div>
                        </div>



                        <div className="row">
                            {/* Start Services Three Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
                                <div className="services-three__single">
                                   
                                    <div className="services-three__single-icon">
                                        <div className="inner">
                                        <img src={publicUrl+"assets/images/backgrounds/hard.png"} alt="#" />
                                            {/* <img src='' style={{ backgroundImage: 'url(' + publicUrl + 'assets/images/backgrounds/s1.png)' }}></img> */}
                                            {/* <span className="icon-gardener-1"></span> */}
                                        </div>
                                       
                                    </div>

                                    <div className="services-three__single-content">
                                        <div className="title">
                                            <h2><Link to={process.env.PUBLIC_URL + `/hardscapes`}>HARDSCAPES</Link></h2>
                                        </div>
                                        <p>Hardscape includes non-living landscaping elements like patios, pathways, retaining walls.</p>

                                        <div className="bottom-box">
                                            <div className="btn-box">
                                                <Link to={process.env.PUBLIC_URL + `/hardscapes`}>Read More</Link>
                                            </div>
                                            <div className="count-box">
                                                <span>01</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* End Services Three Single */}

                            {/* Start Services Three Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.2s">
                                <div className="services-three__single">
                                   
                                    <div className="services-three__single-icon">
                                        <div className="inner">
                                        <img src={publicUrl+"assets/images/backgrounds/soft.png"} alt="#" />
                                            {/* <span className="icon-shovels">{}</span> */}
                                        </div>
                                      
                                    </div>

                                    <div className="services-three__single-content">
                                        <div className="title">
                                            <h2><Link to={process.env.PUBLIC_URL + `/softscapes`}>SOFTSCAPE</Link></h2>
                                        </div>
                                        <p>Softscape includes living landscaping elements like plants, grass, trees, and flowers</p>

                                        <div className="bottom-box">
                                            <div className="btn-box">
                                                <Link to={process.env.PUBLIC_URL + `/softscapes`}>Read More</Link>
                                            </div>
                                            <div className="count-box">
                                                <span>02</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* End Services Three Single */}

                            {/* Start Services Three Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.3s">
                                <div className="services-three__single">
                                   
                                    <div className="services-three__single-icon">
                                        <div className="inner">
                                        <img src={publicUrl+"assets/images/backgrounds/aqua.png"} alt="#" />
                                        {/* <img src='../../../public/assets/images/backgrounds/s3.png'></img> */}
                                            {/* <span className="icon-agriculture"></span> */}
                                        </div>
                                       
                                    </div>

                                    <div className="services-three__single-content">
                                        <div className="title">
                                            <h2><Link to={process.env.PUBLIC_URL + `/aquascapes`}>AQUASCAPES</Link></h2>
                                        </div>
                                        <p>Aquascape designs underwater landscapes with plants, rocks, driftwood, and aquatic creatures</p>

                                        <div className="bottom-box">
                                            <div className="btn-box">
                                                <Link to={process.env.PUBLIC_URL + `/aquascapes`}>Read More</Link>
                                            </div>
                                            <div className="count-box">
                                                <span>03</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* End Services Three Single */}

                            {/* Start Services Three Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.4s">
                                <div className="services-three__single">
                                    
                                    <div className="services-three__single-icon">
                                        <div className="inner">
                                        <img src={publicUrl+"assets/images/backgrounds/plant.png"} alt="#" />
                                        {/* <img src='../../../public/assets/images/backgrounds/s4.png'/> */}
                                            {/* <span className="icon-gardening"></span> */}
                                        </div>
                                     
                                    </div>

                                    <div className="services-three__single-content">
                                        <div className="title">
                                            <h2><Link to={process.env.PUBLIC_URL + `/plantLibrary`}>PLANT LIBRARY</Link></h2>
                                        </div>
                                        <p>A plant library is a collection of diverse and  about plant species information to collect .</p>

                                        <div className="bottom-box">
                                            <div className="btn-box">
                                                <Link to={process.env.PUBLIC_URL + `/plantLibrary`}>Read More</Link>
                                            </div>
                                            <div className="count-box">
                                                <span>04</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* End Services Three Single */}
                        </div>

                        {/* <div className="row">
                            {/* Start Services Three Single */}
                            {/* <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
                                <div className="services-three__single">
                                    <div className="shape1"></div>
                                    <div className="services-three__single-icon">
                                        <div className="inner">
                                            <span className="icon-gardener-1"></span>
                                        </div>
                                        <div className="icon">
                                            <span>+</span>
                                        </div>
                                    </div>

                                    <div className="services-three__single-content">
                                        <div className="title">
                                            <h2><Link to={process.env.PUBLIC_URL + `/hardscapes`}>HARDSCAPES</Link></h2>
                                        </div>
                                        <p>Hardscape includes non-living landscaping elements like patios, pathways, retaining walls.</p>

                                        <div className="bottom-box">
                                            <div className="btn-box">
                                                <Link to={process.env.PUBLIC_URL + `/hardscapes`}>Read More</Link>
                                            </div>
                                            <div className="count-box">
                                                <span>01</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div> */}
                            {/* End Services Three Single */}

                            {/* Start Services Three Single */}
                            {/* <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.2s">
                                <div className="services-three__single">
                                    <div className="shape1"></div>
                                    <div className="services-three__single-icon">
                                        <div className="inner">
                                            <span className="icon-shovels"></span>
                                        </div>
                                        <div className="icon">
                                            <span>+</span>
                                        </div>
                                    </div>

                                    <div className="services-three__single-content">
                                        <div className="title">
                                            <h2><Link to={process.env.PUBLIC_URL + `/softscapes`}>SOFTSCAPE</Link></h2>
                                        </div>
                                        <p>Softscape includes living landscaping elements like plants, grass, trees, and flowers</p>

                                        <div className="bottom-box">
                                            <div className="btn-box">
                                                <Link to={process.env.PUBLIC_URL + `/softscapes`}>Read More</Link>
                                            </div>
                                            <div className="count-box">
                                                <span>02</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div> */}
                            {/* End Services Three Single */}

                            {/* Start Services Three Single */}
                            {/* <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.3s">
                                <div className="services-three__single">
                                    <div className="shape1"></div>
                                    <div className="services-three__single-icon">
                                        <div className="inner">
                                            <span className="icon-agriculture"></span>
                                        </div>
                                        <div className="icon">
                                            <span>+</span>
                                        </div>
                                    </div>

                                    <div className="services-three__single-content">
                                        <div className="title">
                                            <h2><Link to={process.env.PUBLIC_URL + `/aquascapes`}>AQUASCAPES</Link></h2>
                                        </div>
                                        <p>Aquascape designs underwater landscapes with plants, rocks, driftwood, and aquatic creatures</p>

                                        <div className="bottom-box">
                                            <div className="btn-box">
                                                <Link to={process.env.PUBLIC_URL + `/aquascapes`}>Read More</Link>
                                            </div>
                                            <div className="count-box">
                                                <span>03</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div> */}
                            {/* End Services Three Single */}

                            {/* Start Services Three Single */}
                            {/* <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.4s">
                                <div className="services-three__single">
                                    <div className="shape1"></div>
                                    <div className="services-three__single-icon">
                                        <div className="inner">
                                            <span className="icon-gardening"></span>
                                        </div>
                                        <div className="icon">
                                            <span>+</span>
                                        </div>
                                    </div>

                                    <div className="services-three__single-content">
                                        <div className="title">
                                            <h2><Link to={process.env.PUBLIC_URL + `/plantLibrary`}>PLANT LIBRARY</Link></h2>
                                        </div>
                                        <p>A plant library is a collection of diverse and  about plant species information to collect .</p>

                                        <div className="bottom-box">
                                            <div className="btn-box">
                                                <Link to={process.env.PUBLIC_URL + `/plantLibrary`}>Read More</Link>
                                            </div>
                                            <div className="count-box">
                                                <span>04</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div> */}
                            {/* End Services Three Single */}
                      {/* /*</div> }*/ }
                    </div>
                </section>
            </>
        )
    }
}