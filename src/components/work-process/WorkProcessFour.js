import React from 'react';
import { Link } from 'react-router-dom';

export default class WorkProcessFour extends React.Component {
    componentDidMount() {

        const $ = window.$;
    
        if ($('.masonary-layout').length) {
            $('.masonary-layout').isotope({
              layoutMode: 'masonry'
            });
        }
        if ($('.post-filter').length) {
            $('.post-filter li').children('.filter-text').on('click', function () {
              var Self = $(this);
              var selector = Self.parent().attr('data-filter');
              $('.post-filter li').removeClass('active');
              Self.parent().addClass('active');
              $('.filter-layout').isotope({
                filter: selector,
                animationOptions: {
                  duration: 500,
                  easing: 'linear',
                  queue: false
                }
              });
              return false;
            });
        }
      
        if ($('.post-filter.has-dynamic-filters-counter').length) {
            // var allItem = $('.single-filter-item').length;
            var activeFilterItem = $('.post-filter.has-dynamic-filters-counter').find('li');
            activeFilterItem.each(function () {
              var filterElement = $(this).data('filter');
              var count = $('.filter-layout').find(filterElement).length;
              $(this).children('.filter-text').append('<span class="count">' + count + '</span>');
            });
        };
    
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="work-process-one">
                    <div className="shape1"></div>
                    <div className="shape2 new"><img src={publicUrl+"assets/images/shapes/work-process.png"} alt="#" /></div>
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
                            {/* Start Work Process One Single q1 */}
                            <div className="col-xl-2 col-lg-2 col-md-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1000ms">
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

                            {/* Start Work Process One Single q2 */}
                            <div className="col-xl-2 col-lg-2 col-md-6 wow fadeInLeft" data-wow-delay="100ms" data-wow-duration="1000ms">
                                <div className="work-process-one__single style2 mt100">
                                    <div className="work-process-one__single-icon">
                                        <div className="inner">
                                            <span className="icon-watering-plants"></span>
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

                            {/* Start Work Process One Singleq3 */}
                            <div className="col-xl-2 col-lg-2 col-md-6 wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1000ms">
                                <div className="work-process-one__single">
                                    <div className="work-process-one__single-icon">
                                        <div className="inner">
                                            <span className="icon-home"></span>
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

                            {/* Start Work Process One Single q4 */}
                            <div className="col-xl-2 col-lg-2 col-md-6 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1000ms">
                                <div className="work-process-one__single style2 mt100">
                                    <div className="work-process-one__single-icon">
                                        <div className="inner">
                                            <span className="icon-field"></span>
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
                                 {/* Start Work Process One Single q5 */}
                                 <div className="col-xl-2 col-lg-2 col-md-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1000ms">
                                <div className="work-process-one__single">
                                    <div className="work-process-one__single-icon">
                                        <div className="inner">
                                            <span className="icon-gardener"></span>
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

                            {/* Start Work Process One Single q6*/}
                            <div className="col-xl-2 col-lg-2 col-md-6 wow fadeInLeft" data-wow-delay="100ms" data-wow-duration="1000ms">
                                <div className="work-process-one__single style2 mt100">
                                    <div className="work-process-one__single-icon">
                                        <div className="inner">
                                            <span className="icon-watering-plants"></span>
                                        </div>
                                        <div className="count-box"></div>
                                    </div>

                                    <div className="work-process-one__single-content text-center">
                                        <h2><Link to={process.env.PUBLIC_URL + `/arbor-management`}>Project Handover</Link></h2>
                                        <p>Complete the project with quality checks and finishing touches.</p>
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