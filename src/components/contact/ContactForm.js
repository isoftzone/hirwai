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























// import React, { useRef } from 'react';
// import emailjs from 'emailjs-com';

// const ContactForm = () => {
//     const form = useRef();
//     const publicUrl = process.env.PUBLIC_URL + '/';

//     const sendEmail = (e) => {
//         e.preventDefault();

//         emailjs.sendForm(
//             'service_kxf61zr',
//             'template_cjg60w8',
//             form.current,
//             'pldr8UQOSNvxDGkao'
//         )
//         .then(
//             (result) => {
//                 alert('Message Sent Successfully!');
//                 form.current.reset();
//             },
//             (error) => {
//                 alert('Failed to send message: ' + error.text);
//             }
//         );
//     };

//     return (
//         <section className="contact-page">
//             <div className="container">
//                 <div className="row">
//                     {/* Start Contact One Form Contact */}
//                     <div className="col-xl-8">
//                         <div className="contact-one__form contact-one__form--contact">
//                             <div className="sec-title">
//                                 <div className="sec-title__tagline">
//                                     <h6>Call to Action</h6>
//                                     <span className="right"></span>
//                                 </div>
//                                 <h2 className="sec-title__title">
//                                     You Can Easily Book Our <br /> Appointment
//                                 </h2>
//                             </div>

//                             <form
//                                 ref={form}
//                                 onSubmit={sendEmail}
//                                 id="contact-form"
//                                 className="default-form2 contact-form-validated"
//                                 noValidate
//                             >
//                                 <div className="row">
//                                     <div className="col-xl-6 col-lg-6 col-md-6">
//                                         <div className="input-box">
//                                             <input
//                                                 type="text"
//                                                 name="from_name"
//                                                 placeholder="Your Name"
//                                                 required
//                                             />
//                                         </div>
//                                     </div>
//                                     <div className="col-xl-6 col-lg-6 col-md-6">
//                                         <div className="input-box">
//                                             <input
//                                                 type="email"
//                                                 name="from_email"
//                                                 placeholder="Email Address"
//                                                 required
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="row">
//                                     <div className="col-xl-6 col-lg-6 col-md-6">
//                                         <div className="input-box">
//                                             <input type="text" placeholder="Phone" name="from_ph" />
//                                         </div>
//                                     </div>
//                                     <div className="col-xl-6 col-lg-6 col-md-6">
//                                         <div className="input-box">
//                                             <input type="text" placeholder="Subject" name="from_sub" />
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="row">
//                                     <div className="col-xl-12">
//                                         <div className="input-box">
//                                             <textarea name="message" placeholder="Write a Message"></textarea>
//                                         </div>
//                                     </div>

//                                     <div className="col-xl-6 col-lg-6 col-md-6">
//                                         <div className="contact-one__form-btn">
//                                             <button
//                                                 className="thm-btn"
//                                                 type="submit"
//                                             >
//                                                 <span className="txt">Book Now</span>
//                                                 <i className="fa fa-angle-double-right"></i>
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>

//                     {/* Contact Image */}
//                     <div className="col-xl-4">
//                         <div className="contact-page__img">
//                             <img src={publicUrl + "assets/images/resources/cont.png"} alt="#" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ContactForm;







import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const form = useRef();
    const publicUrl = process.env.PUBLIC_URL + '/';

    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        from_ph: '',
        from_sub: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

const validate = () => {
    const newErrors = {};
    if (!formData.from_name.trim()) newErrors.from_name = 'Name is required';

    if (!formData.from_email.trim()) {
        newErrors.from_email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.from_email)) {
        newErrors.from_email = 'Email is invalid';
    }

    if (!formData.from_ph.trim()) {
        newErrors.from_ph = 'Phone Number is required';
    } else if (!/^\d{10,15}$/.test(formData.from_ph.trim())) {
        newErrors.from_ph = 'Phone number must be at least 10 digits and digits only';
    }

    if (!formData.from_sub.trim()) newErrors.from_sub = 'Subject is required';

    if (!formData.message.trim()) newErrors.message = 'Message is required';

    return newErrors;
};


    const sendEmail = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        emailjs.sendForm(
            'service_kxf61zr',
            'template_cjg60w8',
            form.current,
            'pldr8UQOSNvxDGkao'
        ).then(
            () => {
                alert("Thank you for contacting Hirwai Landscape");
                setFormData({ from_name: '', from_email: '', from_ph: '', from_sub: '', message: '' });
                setErrors({});
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
                    {/* Contact Form */}
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
                                                value={formData.from_name}
                                                onChange={handleChange}
                                            />
                                            {errors.from_name && <span className="text-danger">{errors.from_name}</span>}
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="input-box">
                                            <input
                                                type="email"
                                                name="from_email"
                                                placeholder="Email Address"
                                                value={formData.from_email}
                                                onChange={handleChange}
                                            />
                                            {errors.from_email && <span className="text-danger">{errors.from_email}</span>}
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="input-box">
                                            <input
                                                type="text"
                                                placeholder="Phone"
                                                name="from_ph"
                                                value={formData.from_ph}
                                                onChange={handleChange}
                                            />
                                             {errors.from_ph && <span className="text-danger">{errors.from_ph}</span>}
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="input-box">
                                            <input
                                                type="text"
                                                placeholder="Subject"
                                                name="from_sub"
                                                value={formData.from_sub}
                                                onChange={handleChange}
                                            />
                                            {errors.from_sub && <span className="text-danger">{errors.from_sub}</span>}
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="input-box">
                                            <textarea
                                                name="message"
                                                placeholder="Write a Message"
                                                value={formData.message}
                                                onChange={handleChange}
                                            ></textarea>
                                            {errors.message && <span className="text-danger">{errors.message}</span>}
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

