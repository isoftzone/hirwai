// import React from 'react';

// export default class ContactForm extends React.Component {
//     render(){
//         let publicUrl = process.env.PUBLIC_URL+'/'
//         return (
//             <>
//                 <section className="contact-page">
//                     <div className="container">
//                         <div className="row">

//                             {/* Start Contact One Form Contact */}
//                             <div className="col-xl-8">
//                                 <div className="contact-one__form contact-one__form--contact">
//                                     <div className="sec-title">
//                                         <div className="sec-title__tagline">
//                                             <h6>Call to Action</h6>
//                                             <span className="right"></span>
//                                         </div>
//                                         <h2 className="sec-title__title">You Can Easily Book Our <br /> Appointment</h2>
//                                     </div>


//                                     <form id="contact-form" className="default-form2 contact-form-validated" action="#" novalidate="novalidate">
//                                         <div className="row">
//                                             <div className="col-xl-6 col-lg-6 col-md-6">
//                                                 <div className="input-box">
//                                                     <input type="text" name="name"  placeholder="Your Name" required="" />
//                                                 </div>
//                                             </div>
//                                             <div className="col-xl-6 col-lg-6 col-md-6">
//                                                 <div className="input-box">
//                                                     <input type="email" name="email"  placeholder="Email Address" required="" />
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         <div className="row">
//                                             <div className="col-xl-6 col-lg-6 col-md-6">
//                                                 <div className="input-box">
//                                                     <input type="text" placeholder="Phone" name="phone" />
//                                                 </div>
//                                             </div>

//                                             <div className="col-xl-6 col-lg-6 col-md-6">
//                                                 <div className="input-box">
//                                                     <input type="text" placeholder="Subject" name="subject" />
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         <div className="row">
//                                             <div className="col-xl-12">
//                                                 <div className="input-box">
//                                                     <textarea name="message" placeholder="Write a Message"></textarea>
//                                                 </div>
//                                             </div>

//                                             <div className="col-xl-6 col-lg-6 col-md-6">
//                                                 <div className="contact-one__form-btn">
//                                                     <button className="thm-btn" type="submit" data-loading-text="Please wait...">
//                                                         <span className="txt">Book Now</span>
//                                                         <i className="fa fa-angle-double-right"></i>
//                                                     </button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                             {/* End Contact One Form Contact */}

//                             {/* Start Contact Page Img */}
//                             <div className="col-xl-4">
//                                 <div className="contact-page__img">
//                                     <img src={publicUrl+"assets/images/resources/cont.png"} alt="#" />
//                                 </div>
//                             </div>
//                             {/* End Contact Page Img */}

//                         </div>
//                     </div>
//                 </section>
//             </>
//         )
//     }
// }























import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const form = useRef();
    const publicUrl = process.env.PUBLIC_URL + '/';

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_kxf61zr',
            'template_cjg60w8',
            form.current,
            'pldr8UQOSNvxDGkao'
        )
        .then(
            (result) => {
                alert('Message Sent Successfully!');
                form.current.reset();
            },
            (error) => {
                alert('Failed to send message: ' + error.text);
            }
        );
    };

    return (
        <section className="contact-page">
            <div className="container">
                <div className="row">
                    {/* Start Contact One Form Contact */}
                    <div className="col-xl-8">
                        <div className="contact-one__form contact-one__form--contact">
                            <div className="sec-title">
                                <div className="sec-title__tagline">
                                    <h6>Call to Action</h6>
                                    <span className="right"></span>
                                </div>
                                <h2 className="sec-title__title">
                                    You Can Easily Book Our <br /> Appointment
                                </h2>
                            </div>

                            <form
                                ref={form}
                                onSubmit={sendEmail}
                                id="contact-form"
                                className="default-form2 contact-form-validated"
                                noValidate
                            >
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="input-box">
                                            <input
                                                type="text"
                                                name="from_name"
                                                placeholder="Your Name"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="input-box">
                                            <input
                                                type="email"
                                                name="from_email"
                                                placeholder="Email Address"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="input-box">
                                            <input type="text" placeholder="Phone" name="from_ph" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="input-box">
                                            <input type="text" placeholder="Subject" name="from_sub" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="input-box">
                                            <textarea name="message" placeholder="Write a Message"></textarea>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="contact-one__form-btn">
                                            <button
                                                className="thm-btn"
                                                type="submit"
                                            >
                                                <span className="txt">Book Now</span>
                                                <i className="fa fa-angle-double-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Contact Image */}
                    <div className="col-xl-4">
                        <div className="contact-page__img">
                            <img src={publicUrl + "assets/images/resources/cont.png"} alt="#" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
