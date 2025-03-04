import React from 'react';
// import ss from '../../../public/assets/images/home/home/testimonial/test1.png'
export default class TestimonialTwo extends React.Component {
    componentDidMount() {

        const $ = window.$;
        
        if ($(".testimonial-two__carousel").length) {
            $(".testimonial-two__carousel").owlCarousel({
              loop: true,
              margin: 30,
              nav: false,
              smartSpeed: 500,
              autoHeight: false,
              autoplay: true,
              dots: true,
              autoplayTimeout: 10000,
              navText: [
                '<span class="fa fa-angle-left"></span>',
                '<span class="fa fa-angle-right"></span>',
              ],
              responsive: {
                0: {
                  items: 1,
                },
                768: {
                  items: 1,
                },
                992: {
                  items: 2,
                },
                1200: {
                  items: 2,
                },
              },
            });
        }
    
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="testimonilas-two">
                    <div className="testimonilas-two__pattern" style={{backgroundImage: 'url('+publicUrl+'assets/images/pattern/testimonilas-v2-pattern.png)'}}></div>
                    <div className="testimonilas-two__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/pattern/testimonial/test1.png)'}}></div>
                    <div className="shape1 float-bob-y"><img src={publicUrl+"assets/images/shapes/testimonilas-v2-shape1.png"} alt="#" /></div>
                    <div className="container">

                        <div className="sec-title style2">
                            <div className="sec-title__tagline">
                                <div className="img-box"><img src={publicUrl+"assets/images/resources/sec-title-img2.png"} alt="#" /></div>
                                <h6>Our Testimonilas</h6>
                            </div>
                            <h2 className="sec-title__title">
                                People Say About Us</h2>
                            <p className="text">There are many variations of passages of available, but the majority <br />
                                have suffered alteration in some form by injected randomised.</p>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="testimonilas-two__inner">

                                    <div className="owl-carousel owl-theme thm-owl__carousel testimonial-two__carousel">

                                        {/* Start Testimonilas Two Single */}
                                        <div className="testimonilas-two__single">
                                            <div className="testimonilas-two__single-top">
                                                <p>“ Hirwai website is easy to navigate, which made me feel comfortable
                                                    The step-by-step guides are simple and beginner-friendly
                                                    I love the "Beginner's Corner"; it’s a great starting point
                                                    Some plant care terms could use simpler explanations
                                                    More pictures or short videos would help with learning”</p>
                                            </div>

                                            <div className="testimonilas-two__single-bottom">
                                                <div className="left-box">
                                                    <div className="img-box">
                                                        <div className="inner">
                                                            <img src={publicUrl+"assets/images/testimonial/t1.png"} alt="#" />
                                                        </div>
                                                        <div className="icon-box">
                                                            <span className="icon-quote-1"></span>
                                                        </div>
                                                    </div>

                                                    <div className="text-box">
                                                        <h3>Ashish Sharma</h3>
                                                        <p>Director</p>
                                                    </div>
                                                </div>

                                                <div className="right-box">
                                                    <div className="rating-box">
                                                        <ul>
                                                            <li><span className="icon-pointed-star"></span></li>
                                                            <li><span className="icon-pointed-star"></span></li>
                                                            <li><span className="icon-pointed-star"></span></li>
                                                            <li><span className="icon-pointed-star"></span></li>
                                                            <li><span className="icon-pointed-star"></span></li>
                                                        </ul>
                                                    </div>
                                                    <p>5.0 Out of 3</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Testimonilas Two Single */}

                                        {/* Start Testimonilas Two Single */}
                                        <div className="testimonilas-two__single">
                                            <div className="testimonilas-two__single-top">
                                                <p>“The seasonal planting guides are super helpful
                                                     The Hirwai site layout makes it easy to find relevant information
                                                     The search function is fast and accurate
                                                     Some articles feel too basic for someone with experience
                                                     A user forum or community section would be a great addition”</p>
                                            </div>

                                            <div className="testimonilas-two__single-bottom">
                                                <div className="left-box">
                                                    <div className="img-box">
                                                        <div className="inner">
                                                            <img src={publicUrl+"assets/images/testimonial/t2.png"} alt="#" />
                                                        </div>
                                                        <div className="icon-box">
                                                            <span className="icon-quote-1"></span>
                                                        </div>
                                                    </div>

                                                    <div className="text-box">
                                                        <h3>Pankaj Mehta</h3>
                                                        <p>Manager</p>
                                                    </div>
                                                </div>

                                                <div className="right-box">
                                                    <div className="rating-box">
                                                        <ul>
                                                            <li>
                                                                <span className="icon-pointed-star"></span>
                                                            </li>
                                                            <li>
                                                                <span className="icon-pointed-star"></span>
                                                            </li>
                                                            <li>
                                                                <span className="icon-pointed-star"></span>
                                                            </li>
                                                            <li>
                                                                <span className="icon-pointed-star"></span>
                                                            </li>
                                                            <li>
                                                                <span className="icon-pointed-star"></span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <p>5.0 Out of 3</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Testimonilas Two Single */}


                                        {/* Start Testimonilas Two Single */}
                                        <div className="testimonilas-two__single">
                                            <div className="testimonilas-two__single-top">
                                                <p>“ The plant care database is well-structured and informative
                                                    The mobile version of the site runs smoothly
                                                    General advice is well-written but could be more detailed
                                                    The pest and disease section needs more scientific depth
                                                    Adding sources for gardening tips would boost credibility”</p>
                                            </div>

                                            <div className="testimonilas-two__single-bottom">
                                                <div className="left-box">
                                                    <div className="img-box">
                                                        <div className="inner">
                                                            <img src={publicUrl+"assets/images/testimonial/t3.png"} alt="#" />
                                                        </div>
                                                        <div className="icon-box">
                                                            <span className="icon-quote-1"></span>
                                                        </div>
                                                    </div>

                                                    <div className="text-box">
                                                        <h3>Kapil Singh</h3>
                                                        <p>Vice Presidents</p>
                                                    </div>
                                                </div>

                                                <div className="right-box">
                                                    <div className="rating-box">
                                                        <ul>
                                                            <li><span className="icon-pointed-star"></span></li>
                                                            <li><span className="icon-pointed-star"></span></li>
                                                            <li><span className="icon-pointed-star"></span></li>
                                                            <li><span className="icon-pointed-star"></span></li>
                                                            <li><span className="icon-pointed-star"></span></li>
                                                        </ul>
                                                    </div>
                                                    <p>5.0 Out of 3</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Testimonilas Two Single */}


                                        {/* Start Testimonilas Two Single */}
                                        <div className="testimonilas-two__single">
                                            <div className="testimonilas-two__single-top">
                                                <p>“ Hirwai website design is modern, clean, and responsive
                                                     The blog section is well-maintained with fresh content
                                                     Some images take longer to load—optimization is needed
                                                     A dark mode option would improve user experience
                                                     The navigation bar could be more dynamic for better UX”</p>
                                            </div>

                                            <div className="testimonilas-two__single-bottom">
                                                <div className="left-box">
                                                    <div className="img-box">
                                                        <div className="inner">
                                                            <img src={publicUrl+"assets/images/testimonial/t4.png"} alt="#" />
                                                        </div>
                                                        <div className="icon-box">
                                                            <span className="icon-quote-1"></span>
                                                        </div>
                                                    </div>

                                                    <div className="text-box">
                                                        <h3>Ganesh Yadav</h3>
                                                        <p>Senior Manager</p>
                                                    </div>
                                                </div>

                                                <div className="right-box">
                                                    <div className="rating-box">
                                                        <ul>
                                                            <li><span className="icon-pointed-star"></span></li>
                                                            <li><span className="icon-pointed-star"></span></li>
                                                            <li><span className="icon-pointed-star"></span></li>
                                                            <li><span className="icon-pointed-star"></span></li>
                                                            <li><span className="icon-pointed-star"></span></li>
                                                        </ul>
                                                    </div>
                                                    <p>5.0 Out of 3</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Testimonilas Two Single */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}