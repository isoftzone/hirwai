import React from 'react';

export default class FaqTwo extends React.Component {
    componentDidMount() {

        const $ = window.$;

        if ($(".odometer").length) {
            var odo = $(".odometer");
            odo.each(function () {
              $(this).appear(function () {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
              });
            });
        }
        
        if ($('.accordion-box').length) {
            $(".accordion-box").on('click', '.acc-btn', function () {
        
              var outerBox = $(this).parents('.accordion-box');
              var target = $(this).parents('.accordion');
        
              if ($(this).hasClass('active') !== true) {
                $(outerBox).find('.accordion .acc-btn').removeClass('active');
              }
        
              if ($(this).next('.acc-content').is(':visible')) {
                return false;
              } else {
                $(this).addClass('active');
                $(outerBox).children('.accordion').removeClass('active-block');
                $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
                target.addClass('active-block');
                $(this).next('.acc-content').slideDown(300);
              }
            });
        }
    
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="faq-two">
                    <div className="shape1 float-bob-y">
                        <img src={publicUrl+"assets/images/shapes/faq-v2-shape1.png"} alt="#" />
                    </div>
                    <div className="container">
                        <div className="row">
                            {/* Start Faq Two Accordion */}
                            <div className="col-xl-5">
                                <div className="faq-two__accordion">
                                    <div className="sec-title-three">
                                        <div className="sec-title-three__tagline">
                                            <h6>faq</h6>
                                        </div>
                                        <h2 className="sec-title-three__title">Have you question?</h2>
                                    </div>

                                    <ul className="accordion-box">
                                        <li className="accordion block active-block">
                                            <div className="acc-btn active">
                                                <div className="icon-outer">
                                                    <i className="icon-plus-1"></i>
                                                </div>
                                                <h3>
                                                    1.What services do you offer ?
                                                </h3>
                                            </div>
                                            <div className="acc-content current">
                                                <p>We offer a wide range of landscaping services including lawn care, 
                                                   garden design, tree trimming, hardscaping, irrigation system installation,
                                                   landscape lighting, and seasonal clean-up services.</p>
                                            </div>
                                        </li>

                                        <li className="accordion block">
                                            <div className="acc-btn">
                                                <div className="icon-outer">
                                                    <i className="icon-plus-1"></i>
                                                </div>
                                                <h3>
                                                    2.How long does a landscaping project take ?
                                                </h3>
                                            </div>
                                            <div className="acc-content">
                                                <p>The duration of a landscaping project depends on its complexity and size.
                                                     Small projects like lawn care or garden maintenance may take a few hours,
                                                     while larger projects like hardscaping or garden design may take several days to weeks.</p>
                                            </div>
                                        </li>

                                        <li className="accordion block">
                                            <div className="acc-btn">
                                                <div className="icon-outer">
                                                    <i className="icon-plus-1"></i>
                                                </div>
                                                <h3>
                                                    3. How much does landscaping cost?
                                                </h3>
                                            </div>
                                            <div className="acc-content">
                                                <p>The cost of landscaping varies depending on the size of your property,
                                                  the services required, and the materials used. We will provide you with a 
                                                  detailed quote after assessing your needs.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* End Faq Two Accordion */}

                            {/* Start Faq Two Content */}
                            <div className="col-xl-7">
                                <div className="faq-two__content">
                                    <div className="faq-two__content-img">
                                        <img src={publicUrl+"assets/images/resources/faq3.png"} alt="#" />
                                    </div>

                                    <div className="faq-two__content-bottom clearfix">
                                        <div className="experience-box text-center">
                                            <div className="icon-box">
                                                <span className="icon-gardener-1"></span>
                                            </div>

                                            <div className="text-box">
                                                <h3> 
                                                    <span className="odometer" data-count="14">00</span> 
                                                    <span className="plus"> +</span>Years of <br /> experience
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="faq-two__content-bottom-inner">
                                            <ul className="faq-two__content-list">
                                                <li>
                                                    <div className="icon-box">
                                                        <span className="icon-tick"></span>
                                                    </div>

                                                    <div className="text-box">
                                                        <p>We offer expert landscaping solutions tailored to your needs.</p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="icon-box">
                                                        <span className="icon-tick"></span>
                                                    </div>

                                                    <div className="text-box">
                                                        <p>High-quality landscaping services at budget-friendly rates</p>
                                                    </div>
                                                </li>
                                            </ul>

                                            <ul className="faq-two__content-list style2">
                                                <li>
                                                    <div className="icon-box">
                                                        <span className="icon-tick"></span>
                                                    </div>

                                                    <div className="text-box">
                                                        <p>Get a free consultation and estimate for your landscape project.</p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="icon-box">
                                                        <span className="icon-tick"></span>
                                                    </div>

                                                    <div className="text-box">
                                                        <p>We use sustainable materials and eco-friendly methods.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Faq Two Content */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}