import React from 'react';
import { Link } from 'react-router-dom';

export default class WorkProcessFour extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="work-process-one">
                    <div className="shape1"></div>
                    {/* <div className="shape2"><img src={publicUrl+"assets/images/shapes/work-process-v1-shape1.png"} alt="#" /></div> */}
                    <div className="container">
                        <div className="sec-title text-center">
                            <div className="sec-title__tagline">
                                <span className="left"></span>
                                <h6>Work Process</h6>
                                <span className="right"></span>
                            </div>
                            <h2 className="sec-title__title">How We Work Our Company</h2>
                        </div>
                        <div className="row filter-layout masonary-layout">
                            {/* Start Work Process One Single */}
                            <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1000ms">
                                <div className="work-process-one__single">
                                    <div className="work-process-one__single-icon">
                                        <div className="inner">
                                            <span className="icon-gardener"></span>
                                        </div>
                                        <div className="count-box"></div>
                                    </div>

                                    <div className="work-process-one__single-content text-center">
                                        <h2><Link to={process.env.PUBLIC_URL + `/arbor-management`}>Initial Consultation & Site Assessment</Link></h2>
                                        <p>Discuss your vision, preferences, and project requirements and with our team.</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Work Process One Single */}

                            {/* Start Work Process One Single */}
                            <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft" data-wow-delay="100ms" data-wow-duration="1000ms">
                                <div className="work-process-one__single style2 mt100">
                                    <div className="work-process-one__single-icon">
                                        <div className="inner">
                                            <span className="icon-watering-plants"></span>
                                        </div>
                                        <div className="count-box"></div>
                                    </div>

                                    <div className="work-process-one__single-content text-center">
                                        <h2><Link to={process.env.PUBLIC_URL + `/arbor-management`}>Friendly Services</Link></h2>
                                        <p>Simply free dumy text of <br /> the printing and amet <br /> piscing</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Work Process One Single */}

                            {/* Start Work Process One Single */}
                            <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1000ms">
                                <div className="work-process-one__single">
                                    <div className="work-process-one__single-icon">
                                        <div className="inner">
                                            <span className="icon-home"></span>
                                        </div>
                                        <div className="count-box"></div>
                                    </div>

                                    <div className="work-process-one__single-content text-center">
                                        <h2><Link to={process.env.PUBLIC_URL + `/arbor-management`}>Concept Design</Link></h2>
                                        <p>Present initial sketches and design concepts based on your input.</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Work Process One Single */}

                            {/* Start Work Process One Single */}
                            <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1000ms">
                                <div className="work-process-one__single style2 mt100">
                                    <div className="work-process-one__single-icon">
                                        <div className="inner">
                                            <span className="icon-field"></span>
                                        </div>
                                        <div className="count-box"></div>
                                    </div>

                                    <div className="work-process-one__single-content text-center">
                                        <h2><Link to={process.env.PUBLIC_URL + `/arbor-management`}>Budget Planning</Link></h2>
                                        <p>Budget planning is the process of creating a detailed financial plan.</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Work Process One Single */}
                                                        {/* Start Work Process One Single */}
                            <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1000ms">
                                <div className="work-process-one__single">
                                    <div className="work-process-one__single-icon">
                                        <div className="inner">
                                            <span className="icon-shovels"></span>
                                        </div>
                                        <div className="count-box"></div>
                                    </div>

                                    <div className="work-process-one__single-content text-center">
                                        <h2><Link to={process.env.PUBLIC_URL + `/arbor-management`}>Final Design Approval</Link></h2>
                                        <p>Provide a comprehensive plan with 3D visuals or mockups.</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Work Process One Single */}

                            {/* Start Work Process One Single */}
                            <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1000ms">
                                <div className="work-process-one__single style2 mt100">
                                    <div className="work-process-one__single-icon">
                                        <div className="inner">
                                            <span className="icon-agriculture"></span>
                                        </div>
                                        <div className="count-box"></div>
                                    </div>

                                    <div className="work-process-one__single-content text-center">
                                        <h2><Link to={process.env.PUBLIC_URL + `/arbor-management`}>Implementation</Link></h2>
                                        <p>Begin construction and installation under expert supervision.</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Work Process One Single */}
                            
                        </div>
                    </div>
                </section>
            </>
        )
    }
}









































// import React from 'react';
// import { Link } from 'react-router-dom';

// export default class WorkProcessFour extends React.Component {
//     componentDidMount() {

//         const $ = window.$;
    
//         if ($('.masonary-layout').length) {
//             $('.masonary-layout').isotope({
//               layoutMode: 'masonry'
//             });
//         }
//         if ($('.post-filter').length) {
//             $('.post-filter li').children('.filter-text').on('click', function () {
//               var Self = $(this);
//               var selector = Self.parent().attr('data-filter');
//               $('.post-filter li').removeClass('active');
//               Self.parent().addClass('active');
//               $('.filter-layout').isotope({
//                 filter: selector,
//                 animationOptions: {
//                   duration: 500,
//                   easing: 'linear',
//                   queue: false
//                 }
//               });
//               return false;
//             });
//         }
      
//         if ($('.post-filter.has-dynamic-filters-counter').length) {
//             // var allItem = $('.single-filter-item').length;
//             var activeFilterItem = $('.post-filter.has-dynamic-filters-counter').find('li');
//             activeFilterItem.each(function () {
//               var filterElement = $(this).data('filter');
//               var count = $('.filter-layout').find(filterElement).length;
//               $(this).children('.filter-text').append('<span class="count">' + count + '</span>');
//             });
//         };
    
//     }
//     render(){
//         let publicUrl = process.env.PUBLIC_URL+'/'
//         return (
//             <>
//                 <section className="work-process-one">
//                     <div className="shape1"></div>
//                     <div className="shape2 new"><img src={publicUrl+"assets/images/shapes/work-process.png"} alt="#" /></div>
//                     <div className="container">
//                         <div className="sec-title text-center">
//                             <div className="sec-title__tagline">
//                                 <span className="left"></span>
//                                 <h6>Work Process</h6>
//                                 <span className="right"></span>
//                             </div>
//                             <h2 className="sec-title__title">How We Work Our Company</h2>
//                         </div>
//                         <div className="row filter-layout masonary-layout">
//                             {/* Start Work Process One Single q1 */}
//                             <div className="col-xl-2 col-lg-2 col-md-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1000ms">
//                                 <div className="work-process-one__single">
//                                     <div className="work-process-one__single-icon">
//                                         <div className="inner">
//                                             <span className="icon-gardener"></span>
//                                         </div>
//                                         <div className="count-box"></div>
//                                     </div>

//                                     <div className="work-process-one__single-content text-center">
//                                         <h2><Link to={process.env.PUBLIC_URL + `/arbor-management`}>Initial Consultation & Site Assessment</Link></h2>
//                                         <p>Discuss your vision, preferences, and project requirements and with our team.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             {/* End Work Process One Single */}

//                             {/* Start Work Process One Single q2 */}
//                             <div className="col-xl-2 col-lg-2 col-md-6 wow fadeInLeft" data-wow-delay="100ms" data-wow-duration="1000ms">
//                                 <div className="work-process-one__single style2 mt100">
//                                     <div className="work-process-one__single-icon">
//                                         <div className="inner">
//                                             <span className="icon-watering-plants"></span>
//                                         </div>
//                                         <div className="count-box"></div>
//                                     </div>

//                                     <div className="work-process-one__single-content text-center">
//                                         <h2><Link to={process.env.PUBLIC_URL + `/arbor-management`}>Concept Design</Link></h2>
//                                         <p>Present initial sketches and design concepts based on your input.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             {/* End Work Process One Single */}

//                             {/* Start Work Process One Singleq3 */}
//                             <div className="col-xl-2 col-lg-2 col-md-6 wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1000ms">
//                                 <div className="work-process-one__single">
//                                     <div className="work-process-one__single-icon">
//                                         <div className="inner">
//                                             <span className="icon-home"></span>
//                                         </div>
//                                         <div className="count-box"></div>
//                                     </div>

//                                     <div className="work-process-one__single-content text-center">
//                                         <h2><Link to={process.env.PUBLIC_URL + `/arbor-management`}>Budget Planning</Link></h2>
//                                         <p>Budget planning is the process of creating a detailed financial plan.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             {/* End Work Process One Single */}

//                             {/* Start Work Process One Single q4 */}
//                             <div className="col-xl-2 col-lg-2 col-md-6 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1000ms">
//                                 <div className="work-process-one__single style2 mt100">
//                                     <div className="work-process-one__single-icon">
//                                         <div className="inner">
//                                             <span className="icon-field"></span>
//                                         </div>
//                                         <div className="count-box"></div>
//                                     </div>

//                                     <div className="work-process-one__single-content text-center">
//                                         <h2><Link to={process.env.PUBLIC_URL + `/arbor-management`}>Final Design Approval</Link></h2>
//                                         <p>Provide a comprehensive plan with 3D visuals or mockups.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             {/* End Work Process One Single */}
//                                  {/* Start Work Process One Single q5 */}
//                                  <div className="col-xl-2 col-lg-2 col-md-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1000ms">
//                                 <div className="work-process-one__single">
//                                     <div className="work-process-one__single-icon">
//                                         <div className="inner">
//                                             <span className="icon-gardener"></span>
//                                         </div>
//                                         <div className="count-box"></div>
//                                     </div>

//                                     <div className="work-process-one__single-content text-center">
//                                         <h2><Link to={process.env.PUBLIC_URL + `/arbor-management`}>Implementation</Link></h2>
//                                         <p>Begin construction and installation under expert supervision.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             {/* End Work Process One Single */}

//                             {/* Start Work Process One Single q6*/}
//                             <div className="col-xl-2 col-lg-2 col-md-6 wow fadeInLeft" data-wow-delay="100ms" data-wow-duration="1000ms">
//                                 <div className="work-process-one__single style2 mt100">
//                                     <div className="work-process-one__single-icon">
//                                         <div className="inner">
//                                             <span className="icon-watering-plants"></span>
//                                         </div>
//                                         <div className="count-box"></div>
//                                     </div>

//                                     <div className="work-process-one__single-content text-center">
//                                         <h2><Link to={process.env.PUBLIC_URL + `/arbor-management`}>Project Handover</Link></h2>
//                                         <p>Complete the project with quality checks and finishing touches.</p>
//                                     </div>
//                                 </div>
//                             </div>
                           
//                         </div>
//                     </div>
//                 </section>
//             </>
//         )
//     }
// }

// ---------------------------------------------------------------------=====================================================================================================================================================================




// .work-process-one {
//   position: relative;
//   display: block;
//   background: #ffffff;
//   padding: 120px 0px 90px;
//   counter-reset: count;
//   z-index: 1;
// }

// .work-process-one .shape1 {
//   position: absolute;
//   top: -50px;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   width: 800px;
//   height: 800px;
//   background-image: -moz-radial-gradient(50% 50%, circle closest-side, rgb(121, 184, 35) 44%, rgb(255, 255, 255) 100%);
//   background-image: -webkit-radial-gradient(50% 50%, circle closest-side, rgb(121, 184, 35) 44%, rgb(255, 255, 255) 100%);
//   background-image: -ms-radial-gradient(50% 50%, circle closest-side, rgb(121, 184, 35) 44%, rgb(255, 255, 255) 100%);
//   opacity: 0.13;
//   border-radius: 50%;
//   margin: 0 auto;
//   z-index: -1;
// }

// .work-process-one .shape2 {
//   position: absolute;
//   top: 262px;
//   left: 0;
//   right: 0;
//   text-align: center;
//   z-index: -1;
// }

// .work-process-one__single {
//   position: relative;
//   display: block;
//   margin-bottom: 30px;
// }

// .work-process-one__single.mt100 {
//   margin-top: 100px;
// }

// .work-process-one__single.mt50 {
//   margin-top: 50px;
// }

// .work-process-one__single-icon {
//   position: relative;
//   display: block;
//   width: 150px;
//   margin: 0 auto 23px;
// }

// .work-process-one__single-icon .count-box {
//   position: absolute;
//   top: 0px;
//   left: 0px;
//   width: 40px;
//   height: 40px;
//   line-height: 40px;
//   text-align: center;
//   font-size: 15px;
//   background: var(--thm-base);
//   color: #ffffff;
//   border-radius: 50%;
//   font-family: var(--thm-font-2);
//   font-weight: 400;
//   letter-spacing: -0.02em;
//   z-index: 1;
//   transition: all 400ms linear;
//   transition-delay: 0.1s;
// }

// .work-process-one__single.style2 .work-process-one__single-icon .count-box {
//   position: absolute;
//   top: auto;
//   left: auto;
//   bottom: 0;
//   right: 0px;
// }

// .work-process-one__single:hover .work-process-one__single-icon .count-box {
//   background: #ffffff;
//   color: var(--thm-base);
//   box-shadow: 0px 10px 60px 0px rgb(0, 0, 0, 0.07);
// }

// .work-process-one__single-icon .count-box::before {
//   top: -35px;
//   left: 70px;
//   width: 40px;
//   height: 40px;
//   line-height: 40px;
//   text-align: center;
//   font-size: 15px;
//   border-radius: 50%;
//   font-family: var(--thm-font-2);
//   font-weight: 400;
//   counter-increment: count;
//   content: "0"counter(count);
// }

// .work-process-one__single-icon .count-box span {
//   color: #ffffff;
// }

// .work-process-one__single-icon .inner {
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 150px;
//   height: 150px;
//   border-radius: 50%;
//   border: 1px solid rgba(var(--thm-base-rgb), 0.2);
//   margin: 0 auto;
//   z-index: 1;
// }

// .work-process-one__single-icon .inner::before {
//   position: absolute;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   border-radius: 50%;
//   background-image: -moz-radial-gradient(50% 50%, circle closest-side, rgb(121, 184, 35) 44%, rgb(255, 255, 255) 100%);
//   background-image: -webkit-radial-gradient(50% 50%, circle closest-side, rgb(121, 184, 35) 44%, rgb(255, 255, 255) 100%);
//   background-image: -ms-radial-gradient(50% 50%, circle closest-side, rgb(121, 184, 35) 44%, rgb(255, 255, 255) 100%);
//   opacity: 0.15;
//   content: "";
//   z-index: -1;
// }

// .work-process-one__single-icon .inner::after {
//   content: "";
//   position: absolute;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   background: var(--thm-base);
//   border-radius: 50%;
//   transform: scale(0.5);
//   opacity: 0;
//   -webkit-transition: all 0.4s linear;
//   -o-transition: all 0.4s linear;
//   transition: all 0.4s linear;
//   z-index: -1;
// }

// .work-process-one__single:hover .work-process-one__single-icon .inner::after {
//   transform: scale(1.0);
//   opacity: 1;
// }

// .work-process-one__single-icon .inner span::before {
//   position: relative;
//   display: inline-block;
//   color: var(--thm-base);
//   font-size: 65px;
//   transition: all 200ms linear;
//   transition-delay: 0.1s;
// }

// .work-process-one__single:hover .work-process-one__single-icon .inner span::before {
//   color: #ffffff;
// }

// .work-process-one__single-content {
//   position: relative;
//   display: block;
// }

// .work-process-one__single-content h2 {
//   font-size: 20px;
//   line-height: 30px;
//   font-weight: 400;
//   text-transform: capitalize;
//   letter-spacing: -0.02em;
//   margin-bottom: 2px;
// }

// .work-process-one__single-content h2 a {
//   color: var(--thm-black);
//   transition: all 200ms linear;
//   transition-delay: 0.1s;
// }

// .work-process-one__single-content h2 a:hover {
//   color: var(--thm-base);
// }

// .work-process-one__single-content p {
//   margin: 0;
// }