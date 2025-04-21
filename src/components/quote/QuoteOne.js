// import React from 'react';
// // import ss from '../../../public/assets/images/home/home/free quote/FQ1.png'
// export default class QuoteOne extends React.Component {
//     componentDidMount() {

//         const $ = window.$;

//         if ($(".video-popup").length) {
//             $(".video-popup").magnificPopup({
//               type: "iframe",
//               mainClass: "mfp-fade",
//               removalDelay: 160,
//               preloader: true,
        
//               fixedContentPos: false
//             });
//         }

        

//         $('select:not(.ignore)').niceSelect();
          
//     }
//     render(){
//         let publicUrl = process.env.PUBLIC_URL+'/'
//         return (
//             <>
//                 <section className="free-quote-one">
//                     <div className="shape1"><img src={publicUrl+"assets/images/shapes/free-quote-v1-shape1.png"} alt="#" /></div>
//                     <div className="shape2 wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
//                         <img className="float-bob-y" src={publicUrl+"assets/images/shapes/free-quote-v1-shape2.png"} alt="#" />
//                     </div>
//                     <div className="container">
//                         <div className="row">
//                             {/* Start Free Quote One Img */}
//                             <div className="col-xl-5">
//                                 <div className="free-quote-one__img">
//                                     <div className="free-quote-one__img1">
//                                         <div className="free-quote-one__img-content">
//                                             <h2>Get <br /> A <br /> Quote</h2>
//                                         </div>
//                                         <img src={publicUrl+"assets/images/resources/FQ5.png"} alt="#" />
//                                     </div>

//                                     <div className="free-quote-one__img2">
//                                         <img src={publicUrl+"assets/images/resources/FQ4.png"} alt="#" />

//                                         <div className="video-box">
//                                             <a href="https://www.youtube.com/watch?v=1q4UnMc5kTA" className="video-popup">
//                                                 <div className="free-quote-one__video">
//                                                     <span className="icon-play-button"></span>
//                                                     <i className="ripple"></i>
//                                                 </div>
//                                             </a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             {/* End Free Quote One Img */}


//                             {/* Start Free Quote One Content */}
//                             <div className="col-xl-7">
//                                 <div className="free-quote-one__content">
//                                     <div className="sec-title-three">
//                                         <div className="sec-title-three__tagline">
//                                             <h6>free quote</h6>
//                                         </div>
//                                         <h2 className="sec-title-three__title">Get a landscaping quote <br /> to bring your vision to life!</h2>
//                                     </div>

//                                     <div className="free-quote-one__content-text">
//                                         <p>There are many variats of passages the majority available <br />
//                                             have suffered a in some form by available companu <br />
//                                             alte pic alte in some form by to at available.</p>
//                                     </div>

//                                     <div className="free-quote-one__content-form">
//                                         <form id="contact-form" name="contact_form" className="default-form2" action="#" method="post">
//                                             <div className="row">
//                                                 <div className="col-xl-12 col-lg-12 col-md-12">
//                                                     <div className="input-box">
//                                                         <input type="text" name="form_name"  placeholder="Full name"
//                                                             required="" />
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-xl-12 col-lg-12 col-md-12">
//                                                     <div className="input-box">
//                                                         <input type="email" name="form_email" 
//                                                             placeholder="Email address" required="" />
//                                                     </div>
//                                                 </div>
//                                             </div>

//                                             <div className="row">
//                                                 <div className="col-xl-12 col-lg-12 col-md-12">
//                                                     <div className="input-box">
//                                                         <div className="select-box">
//                                                             <select className="selectmenu wide">
//                                                                 <option selected="selected">Select service</option>
//                                                                 <option>Select service 01</option>
//                                                                 <option>Select service 02</option>
//                                                                 <option>Select service 03</option>
//                                                                 <option>Select service 04</option>
//                                                             </select>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>

//                                             <div className="row">
//                                                 <div className="col-xl-6">
//                                                     <div className="free-quote-one__content-form-btn">
//                                                         <button className="thm-btn" type="submit"
//                                                             data-loading-text="Please wait...">
//                                                             <span className="txt">Send</span>
//                                                             <i className="icon-double-chevron"></i>
//                                                         </button>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                             {/* End Free Quote One Content */}
//                         </div>
//                     </div>
//                 </section>
//             </>
//         )
//     }
// }






















import React, { useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';

const QuoteOne = () => {
    const form = useRef();
    const publicUrl = process.env.PUBLIC_URL + '/';

    useEffect(() => {
        const $ = window.$;

        if ($('.video-popup').length) {
            $('.video-popup').magnificPopup({
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: true,
                fixedContentPos: false,
            });
        }

        $('select:not(.ignore)').niceSelect();
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_jbfh21b',       // <- replace this
                'template_3vk5zpu',      // <- replace this
                form.current,
                'pldr8UQOSNvxDGkao'        // <- replace this
            )
            .then(
                (result) => {
                    alert('Quote request sent successfully!');
                    form.current.reset();
                },
                (error) => {
                    alert('Failed to send: ' + error.text);
                }
            );
    };

    return (
        <section className="free-quote-one">
            <div className="shape1">
                <img src={publicUrl + 'assets/images/shapes/free-quote-v1-shape1.png'} alt="#" />
            </div>
            <div
                className="shape2 wow slideInRight"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
            >
                <img className="float-bob-y" src={publicUrl + 'assets/images/shapes/free-quote-v1-shape2.png'} alt="#" />
            </div>
            <div className="container">
                <div className="row">
                    {/* Quote Image */}
                    <div className="col-xl-5">
                        <div className="free-quote-one__img">
                            <div className="free-quote-one__img1">
                                <div className="free-quote-one__img-content">
                                    <h2>
                                        Get <br /> A <br /> Quote
                                    </h2>
                                </div>
                                <img src={publicUrl + 'assets/images/resources/FQ5.png'} alt="#" />
                            </div>

                            <div className="free-quote-one__img2">
                                <img src={publicUrl + 'assets/images/resources/FQ4.png'} alt="#" />
                                <div className="video-box">
                                    <a href="https://www.youtube.com/watch?v=1q4UnMc5kTA" className="video-popup">
                                        <div className="free-quote-one__video">
                                            <span className="icon-play-button"></span>
                                            <i className="ripple"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quote Form */}
                    <div className="col-xl-7">
                        <div className="free-quote-one__content">
                            <div className="sec-title-three">
                                <div className="sec-title-three__tagline">
                                    <h6>free quote</h6>
                                </div>
                                <h2 className="sec-title-three__title">
                                    Get a landscaping quote <br /> to bring your vision to life!
                                </h2>
                            </div>

                            <div className="free-quote-one__content-text">
                                <p>
                                    There are many variants of passages, the majority available <br />
                                    have suffered in some form by available company <br />
                                    alternate pick alternate in some form to make available.
                                </p>
                            </div>

                            <div className="free-quote-one__content-form">
                                <form ref={form} onSubmit={sendEmail} className="default-form2">
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                            <div className="input-box">
                                                <input
                                                    type="text"
                                                    name="from_name"
                                                    placeholder="Full name"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                            <div className="input-box">
                                                <input
                                                    type="email"
                                                    name="from_email"
                                                    placeholder="Email address"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                            <div className="input-box">
                                                <div className="select-box">
                                                    <select name="from_service" className="selectmenu selecting wide" required>
                                                        <option value="">Select service</option>
                                                        <option value="Hardscapes">Hardscapes</option>
                                                        <option value="Softscapes">Softscapes</option>
                                                        <option value="Aquascapes">Aquascapes</option>
                                                        <option value="Plant Library">Plant Library</option>
                                                        <option value="Architectural Work">Architectural Work</option>
                                                        <option value="Tree Replanting">Tree Replanting</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="free-quote-one__content-form-btn">
                                                <button className="thm-btn" type="submit">
                                                    <span className="txt">Send</span>
                                                    <i className="icon-double-chevron"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* End Quote Form */}
                </div>
            </div>
        </section>
    );
};

export default QuoteOne;






{/* <div className="input-box">
<div className="select-box">
  <select name="from_service" required>
    <option value="">Select service</option>
    <option value="Hardscapes">Hardscapes</option>
    <option value="Softscapes">Softscapes</option>
    <option value="Aquascapes">Aquascapes</option>
    <option value="Plant Library">Plant Library</option>
    <option value="Architectural Work">Architectural Work</option>
    <option value="Tree Replanting">Tree Replanting</option>
  </select>
</div>
</div> */}
