import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// import ss from '../../../public/assets/images/home/home/company client/Frame_12-removebg-preview.png'
export default class ProjectThree extends React.Component {
    componentDidMount() {

        const $ = window.$;

        if ($(".projects-three__carousel").length) {
            $(".projects-three__carousel").owlCarousel({
              loop: true,
              margin: 30,
              nav: true,
              smartSpeed: 500,
              autoHeight: false,
              autoplay: true,
              dots: false,
              autoplayTimeout: 10000,
              navText: [
                '<span class="icon-left-arrow"></span>',
                '<span class="icon-right-arrow"></span>',
              ],
              responsive: {
                0: {
                  items: 4,
                },
                768: {
                  items: 4,
                },
                992: {
                  items: 4,
                },
                1200: {
                  items: 4,
                },
              },
            });
        }
    
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="projects-three">
                    <div className="projects-three__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/Slider8.png)'}}></div>
                    <div className="projects-three__bg-two" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/Slider1.png)'}}>

                        <ul className="projects-three__bg-two-content">
                            <li className="text-center">
                                <div className="icon-box">
                                    <span className="icon-watering-plants"></span>
                                </div>

                                <div className="title-box">
                                    <h2><a href="#">Take Care <br /> More</a></h2>
                                </div>
                            </li>

                            <li className="text-center">
                                <div className="icon-box">
                                    <span className="icon-pruning-shears"></span>
                                </div>

                                <div className="title-box">
                                    <h2><a href="#">Take Care <br /> More</a></h2>
                                </div>
                            </li>
                        </ul>

                    </div>
                    <div className="container">
                        <div className="row filter-layout masonary-layout">
                            <div className="col-xl-12">
                                <div className="projects-three__inner">
                                    <div className="sec-title-three">
                                        <div className="sec-title-three__tagline">
                                            <h6>Our Portfolio</h6>
                                        </div>
                                        <h2 className="sec-title-three__title">Our latest projects</h2>
                                    </div>

                                    <div className="owl-carousel owl-theme thm-owl__carousel projects-three__carousel">

                                        {/* Start Projects Three Single */}
                                        <div className="projects-three__single">
                                            <div className="projects-three__single-img">
                                                <img src={publicUrl+"assets/images/project/Slider2.png"} alt="#" />
                                                <div className="overlay-content">
                                                    <h2><a href="#">Landscaping</a></h2>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Projects Three Single */}

                                        {/* Start Projects Three Single */}
                                        <div className="projects-three__single mt45">
                                            <div className="projects-three__single-img">
                                                <img src={publicUrl+"assets/images/project/Slider3.png"} alt="#" />
                                                <div className="overlay-content">
                                                    <h2><a href="#">Landscaping</a></h2>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Projects Three Single */}

                                        {/* Start Projects Three Single */}
                                        <div className="projects-three__single">
                                            <div className="projects-three__single-img">
                                                <img src={publicUrl+"assets/images/project/Slider4.png"} alt="#" />
                                                <div className="overlay-content">
                                                    <h2><a href="#">Landscaping</a></h2>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Projects Three Single */}

                                        {/* Start Projects Three Single */}
                                        <div className="projects-three__single mt45">
                                            <div className="projects-three__single-img">
                                                <img src={publicUrl+"assets/images/project/Slider5.png"} alt="#" />
                                                <div className="overlay-content">
                                                    <h2><a href="#">Landscaping</a></h2>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Projects Three Single */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Start Projects Three Brand */}
                    <div className="projects-three-brand">
                        <div className="auto-container">
                            <Swiper 
                                loop={true}
                                spaceBetween={100}
                                slidesPerView={5}
                                speed={1400}
                                freeMode={true}
                                watchSlidesVisibility={true}
                                watchSlidesProgress={true}
                                autoplay={{delay:   5000}}
                                breakpoints={{
                                    0: {
                                        spaceBetween: 30,
                                        slidesPerView: 1
                                    },
                                    375: {
                                        spaceBetween: 30,
                                        slidesPerView: 1
                                    },
                                    575: {
                                        spaceBetween: 30,
                                        slidesPerView: 2
                                    },
                                    768: {
                                        spaceBetween: 30,
                                        slidesPerView: 3
                                    },
                                    992: {
                                        spaceBetween: 30,
                                        slidesPerView: 4
                                    },
                                    1200: {
                                        spaceBetween: 30,
                                        slidesPerView: 5
                                    }
                                }}
                                className="thm-swiper__slider swiper-container" >
                                <div className="swiper-wrapper">
                                    <SwiperSlide className="swiper-slide">
                                        <img src={publicUrl+"assets/images/brand/brand1.png"} alt="#" />
                                    </SwiperSlide>

                                    <SwiperSlide className="swiper-slide">
                                        <img src={publicUrl+"assets/images/brand/brand2.png"} alt="#" />
                                    </SwiperSlide>

                                    <SwiperSlide className="swiper-slide">
                                        <img src={publicUrl+"assets/images/brand/brand3.png"} alt="#" />
                                    </SwiperSlide>

                                    <SwiperSlide className="swiper-slide">
                                        <img src={publicUrl+"assets/images/brand/brand4.png"} alt="#" />
                                    </SwiperSlide>

                                    <SwiperSlide className="swiper-slide">
                                        <img src={publicUrl+"assets/images/brand/brand5.png"} alt="#" />
                                    </SwiperSlide>

                                    <SwiperSlide className="swiper-slide">
                                        <img src={publicUrl+"assets/images/brand/brand6.png"} alt="#" />
                                    </SwiperSlide>

                                    <SwiperSlide className="swiper-slide">
                                        <img src={publicUrl+"assets/images/brand/brand7.png"} alt="#" />
                                    </SwiperSlide>

                                    <SwiperSlide className="swiper-slide">
                                        <img src={publicUrl+"assets/images/brand/brand8.png"} alt="#" />
                                    </SwiperSlide>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                    {/* End Projects Three Brand */}
                </section>
            </>
        )
    }
}