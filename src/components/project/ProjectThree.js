import React, { Component } from 'react';

export default class ProjectThree extends Component {
    componentDidMount() {
        const $ = window.$; // Ensure jQuery is available globally

        // Initialize Owl Carousel for .projects-three__carousel
        $(".projects-three__carousel").owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            smartSpeed: 1000,
            autoHeight: false,
            autoplay: true,
            dots: false,
            autoplayTimeout: 10000,
            navText: [
                '<span class="icon-left-arrow"></span>',
                '<span class="icon-right-arrow"></span>',
            ],
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                992: { items: 3 },
                1200: { items: 4 },
            },
        });

        // Initialize Owl Carousel for .projects-threeTwo__carousel
        $(".projects-threeTwo__carousel").owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            smartSpeed: 1000,
            autoHeight: false,
            autoplay: true,
            dots: false,
            autoplayTimeout: 10000,
            navText: [
                '<span class="icon-left-arrow"></span>',
                '<span class="icon-right-arrow"></span>',
            ],
            responsive: {
                0: { items: 2 },
                768: { items: 3 },
                992: { items: 4 },
                1200: { items: 5 },
            },
        });
    }

    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';

        return (
            <>
                <section className="projects-three">
                    <div className="projects-three__bg" style={{ backgroundImage: `url(${publicUrl}assets/images/backgrounds/Slider8.png)` }}></div>
                    <div className="projects-three__bg-two" style={{ backgroundImage: `url(${publicUrl}assets/images/backgrounds/Slider12.png)` }}>
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

                                    {/* Owl Carousel for Project Items */}
                                    <div className="owl-carousel owl-theme projects-three__carousel">
                                        <div className="projects-three__single">
                                            <div className="projects-three__single-img">
                                                <img src={`${publicUrl}assets/images/project/Slider2.png`} alt="#" />
                                                <div className="overlay-content">
                                                    <h2><a href="#">Landscaping</a></h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="projects-three__single mt45">
                                            <div className="projects-three__single-img">
                                                <img src={`${publicUrl}assets/images/project/Slider3.png`} alt="#" />
                                                <div className="overlay-content">
                                                    <h2><a href="#">Landscaping</a></h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="projects-three__single">
                                            <div className="projects-three__single-img">
                                                <img src={`${publicUrl}assets/images/project/Slider4.png`} alt="#" />
                                                <div className="overlay-content">
                                                    <h2><a href="#">Landscaping</a></h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="projects-three__single mt45">
                                            <div className="projects-three__single-img">
                                                <img src={`${publicUrl}assets/images/project/Slider5.png`} alt="#" />
                                                <div className="overlay-content">
                                                    <h2><a href="#">Landscaping</a></h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Owl Carousel */}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Brand Carousel */}
                    <div className="projects-three-brand">
                        <div className="auto-container">
                            <div className="owl-carousel owl-theme projects-threeTwo__carousel">
                                <div className="projects-threeTwo__single">
                                    <div className="projects-threeTwo__single-img">
                                        <img src={`${publicUrl}assets/images/brand/brand1.png`} alt="#" />
                                    </div>
                                </div>
                                <div className="projects-threeTwo__single">
                                    <div className="projects-threeTwo__single-img">
                                        <img src={`${publicUrl}assets/images/brand/brand2.png`} alt="#" />
                                    </div>
                                </div>
                                <div className="projects-threeTwo__single">
                                    <div className="projects-threeTwo__single-img">
                                        <img src={`${publicUrl}assets/images/brand/brand3.png`} alt="#" />
                                    </div>
                                </div>
                                <div className="projects-threeTwo__single">
                                    <div className="projects-threeTwo__single-img">
                                        <img src={`${publicUrl}assets/images/brand/brand4.png`} alt="#" />
                                    </div>
                                </div>
                                <div className="projects-threeTwo__single">
                                    <div className="projects-threeTwo__single-img">
                                        <img src={`${publicUrl}assets/images/brand/brand5.png`} alt="#" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

















// import React, { Component, createRef } from 'react';
// import { Autoplay, Navigation } from 'swiper';
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";

// export default class 
// ProjectThree extends Component {
//     constructor(props) {
//         super(props);
//         this.progressCircle = createRef();
//         this.progressContent = createRef();
//     }

//     onAutoplayTimeLeft = (s, time, progress) => {
//         if (this.progressCircle.current) {
//             this.progressCircle.current.style.setProperty('--progress', 1 - progress);
//         }
//         if (this.progressContent.current) {
//             this.progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
//         }
//     };

//     render() {
//         let publicUrl = process.env.PUBLIC_URL + '/';

//         return (
//             <section className="projects-three">
//                 {/* Background Images */}
//                 <div className="projects-three__bg" style={{ backgroundImage: `url(${publicUrl}assets/images/backgrounds/Slider8.png)` }}></div>
//                 <div className="projects-three__bg-two" style={{ backgroundImage: `url(${publicUrl}assets/images/backgrounds/Slider12.png)` }}></div>

//                 {/* Swiper Container */}
//                 <div className="container">
//                     <div className="projects-three__inner">
//                         <div className="sec-title-three">
//                             <h6 className="sec-title-three__tagline">Our Portfolio</h6>
//                             <h2 className="sec-title-three__title">Our Latest Projects</h2>
//                         </div>

//                         {/* Swiper Section */}
//                         <Swiper
//                             loop={true}
//                             spaceBetween={10}
//                             autoplay={{ delay: 3000 }}
//                             navigation={true}
//                             modules={[Autoplay, Navigation]}
//                             breakpoints={{
//                                 0: { slidesPerView: 1 },
//                                 575: { slidesPerView: 2 },
//                                 768: { slidesPerView: 3 },
//                                 992: { slidesPerView: 4 }
//                             }}
//                             className="projects-three__swiper"
//                         >
//                             <SwiperSlide><img src={`${publicUrl}assets/images/project/Slider2.png`} alt="Project 1" /></SwiperSlide>
//                             <SwiperSlide><img src={`${publicUrl}assets/images/project/Slider3.png`} alt="Project 2" /></SwiperSlide>
//                             <SwiperSlide><img src={`${publicUrl}assets/images/project/Slider4.png`} alt="Project 3" /></SwiperSlide>
//                             <SwiperSlide><img src={`${publicUrl}assets/images/project/Slider5.png`} alt="Project 4" /></SwiperSlide>
//                         </Swiper>
//                     </div>
//                 </div>

//                 {/* Brand Logos Section */}
//                 <div className="projects-three-brand">
//                     <div className="container">
//                         <div className="brand-logos">
//                         <Swiper
//                             loop={true}
//                             spaceBetween={10}
//                             autoplay={{ delay: 3000 }}
//                             // navigation={true}
//                             modules={[Autoplay, Navigation]}
//                             breakpoints={{
//                                 0: { slidesPerView: 1 },
//                                 575: { slidesPerView: 2 },
//                                 768: { slidesPerView: 3 },
//                                 992: { slidesPerView: 4 }
//                             }}
//                             className="projects-three__swiper"
//                         >
//                             <SwiperSlide><img src={`${publicUrl}assets/images/brand/brand1.png`} alt="Brand 1" /></SwiperSlide>
//                             <SwiperSlide><img src={`${publicUrl}assets/images/brand/brand2.png`} alt="Brand 2" /></SwiperSlide>
//                             <SwiperSlide><img src={`${publicUrl}assets/images/brand/brand3.png`} alt="Brand 3" /></SwiperSlide>
//                             <SwiperSlide><img src={`${publicUrl}assets/images/brand/brand4.png`} alt="Brand 4" /></SwiperSlide>
//                             <SwiperSlide><img src={`${publicUrl}assets/images/brand/brand5.png`} alt="Brand 5" /></SwiperSlide>

//                         </Swiper>
                          
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         );
//     }
// }













