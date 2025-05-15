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

// import React, { useEffect, useRef, useState } from 'react';
// import emailjs from 'emailjs-com';

// const QuoteOne = () => {
//     const form = useRef();
//     const publicUrl = process.env.PUBLIC_URL + '/';
//     const [openService,setOpenService] =useState(false);
//     useEffect(() => {
//         const $ = window.$;

//         if ($('.video-popup').length) {
//             $('.video-popup').magnificPopup({
//                 type: 'iframe',
//                 mainClass: 'mfp-fade',
//                 removalDelay: 160,
//                 preloader: true,
//                 fixedContentPos: false,
//             });
//         }

//         $('select:not(.ignore)').niceSelect();
//     }, []);

// const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//         .sendForm(
//             'service_jbfh21b',       // <- replace this
//             'template_3vk5zpu',      // <- replace this
//             form.current,
//             'pldr8UQOSNvxDGkao'      // <- replace this
//         )
//         .then(
//             (result) => {
//                 alert('Thank you for contacting Hirwai Landscape');
//                 form.current.reset();

//                 // Reset the select manually
//                 const select = form.current.querySelector('select[name="from_service"]');
//                 if (select) {
//                     select.value = '';
//                     // If using jQuery NiceSelect, also refresh:
//                     if (window.$ && typeof window.$(select).niceSelect === 'function') {
//                         window.$(select).niceSelect('update');
//                     }
//                 }

//                 setOpenService(false); // Close the custom select UI if you use custom styling
//             },
//             (error) => {
//                 alert('Failed to send: ' + error.text);
//             }
//         );
// };

//     return (
//         <section className="free-quote-one">
//             <div className="shape1">
//                 <img src={publicUrl + 'assets/images/shapes/free-quote-v1-shape1.png'} alt="#" />
//             </div>
//             <div
//                 className="shape2 wow slideInRight"
//                 data-wow-delay="100ms"
//                 data-wow-duration="2500ms"
//             >
//                 <img className="float-bob-y" src={publicUrl + 'assets/images/shapes/free-quote-v1-shape2.png'} alt="#" />
//             </div>
//             <div className="container">
//                 <div className="row">
//                     {/* Quote Image */}
//                     <div className="col-xl-5">
//                         <div className="free-quote-one__img">
//                             <div className="free-quote-one__img1">
//                                 <div className="free-quote-one__img-content">
//                                     <h2>
//                                         Get <br /> A <br /> Quote
//                                     </h2>
//                                 </div>
//                                 <img src={publicUrl + 'assets/images/resources/FQ5.png'} alt="#" />
//                             </div>

//                             <div className="free-quote-one__img2">
//                                 <img src={publicUrl + 'assets/images/resources/FQ4.png'} alt="#" />
//                                 <div className="video-box">
//                                     <a href="https://www.youtube.com/watch?v=1q4UnMc5kTA" className="video-popup">
//                                         <div className="free-quote-one__video">
//                                             <span className="icon-play-button"></span>
//                                             <i className="ripple"></i>
//                                         </div>
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Quote Form */}
//                     <div className="col-xl-7">
//                         <div className="free-quote-one__content">
//                             <div className="sec-title-three">
//                                 <div className="sec-title-three__tagline">
//                                     <h6>free quote</h6>
//                                 </div>
//                                 <h2 className="sec-title-three__title">
//                                     Get a landscaping quote <br /> to bring your vision to life!
//                                 </h2>
//                             </div>

//                             <div className="free-quote-one__content-text">
//                                 <p>
//                                     There are many variants of passages, the majority available <br />
//                                     have suffered in some form by available company <br />
//                                     alternate pick alternate in some form to make available.
//                                 </p>
//                             </div>

//                             <div className="free-quote-one__content-form">
//                                 <form ref={form} onSubmit={sendEmail} className="default-form2">
//                                     <div className="row">
//                                         <div className="col-xl-12 col-lg-12 col-md-12">
//                                             <div className="input-box">
//                                                 <input
//                                                     type="text"
//                                                     name="from_name"
//                                                     placeholder="Full name"
//                                                     required
//                                                 />
//                                             </div>
//                                         </div>
//                                         <div className="col-xl-12 col-lg-12 col-md-12">
//                                             <div className="input-box">
//                                                 <input
//                                                     type="email"
//                                                     name="from_email"
//                                                     placeholder="Email address"
//                                                     required
//                                                 />
//                                             </div>
//                                         </div>
//                                     </div>
// {/*
//                                     <div className="row">
//                                         <div className="col-xl-12 col-lg-12 col-md-12">
//                                             <div className="input-box">

//                                             </div>
//                                         </div>
//                                     </div> */}

//                                     <div className="row">
//                                         <div className="col-xl-6">
//                                         <div onClick={() => setOpenService(prev => !prev)} className={`select-box ${ openService ? "service_select_box" :""} `}>
//                                                     <select name="from_service" className="selectmenu selecting wide" required>
//                                                         <option value="">Select service</option>
//                                                         <option value="Hardscapes">Hardscapes</option>
//                                                         <option value="Softscapes">Softscapes</option>
//                                                         <option value="Aquascapes">Aquascapes</option>
//                                                         <option value="Plant Library">Plant Library</option>
//                                                         <option value="Architectural Work">Architectural Work</option>
//                                                         <option value="Tree Replanting">Tree Replanting</option>
//                                                     </select>
//                                                 </div>
//                                             <div className="free-quote-one__content-form-btn">
//                                                 <button className="thm-btn" type="submit">
//                                                     <span className="txt">Send</span>
//                                                     <i className="icon-double-chevron"></i>
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                     {/* End Quote Form */}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default QuoteOne;

import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";

const QuoteOne = () => {
  const publicUrl = process.env.PUBLIC_URL + "/";
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    from_service: "",
  });

  const [errors, setErrors] = useState({});
 const [openService,setOpenService] =useState(false);
  useEffect(() => {
    const $ = window.$;

    if ($(".video-popup").length) {
      $(".video-popup").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: true,
        fixedContentPos: false,
      });
    }

    const $select = $('select[name="from_service"]');
    $select.niceSelect();

    // Update React state when custom dropdown changes
    const handleSelectChange = function () {
      const selectedValue = $(this).val();
      setFormData((prev) => ({
        ...prev,
        from_service: selectedValue,
      }));

      // Clear error
      setErrors((prev) => ({
        ...prev,
        from_service: "",
      }));
    };

    $select.on("change", handleSelectChange);

    return () => {
      $select.off("change", handleSelectChange);
    };
  }, []);

  const validate = () => {
    const newErrors = {};

    if (!formData.from_name.trim()) {
      newErrors.from_name = "Name is required";
    }

    if (!formData.from_email.trim()) {
      newErrors.from_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.from_email)) {
      newErrors.from_email = "Email is invalid";
    }

    if (!formData.from_service.trim()) {
      newErrors.from_service = "Service selection is required";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear individual error on change
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };
  console.log("form data", formData);
  
  const sendEmail = (e) => {
    e.preventDefault();
    const $ = window.$;
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const templateParams = {
      from_name: formData.from_name,
      from_email: formData.from_email,
      from_service: formData.from_service,
    };

    emailjs
      .send(
        "service_jbfh21b",
        "template_3vk5zpu",
        templateParams,
        "pldr8UQOSNvxDGkao"
      )
      .then(() => {
        alert("Thank you for contacting Hirwai Landscape");
        setFormData({ from_name: "", from_email: "", from_service: "" });
        setErrors({});
        $('select[name="from_service"]').val('').niceSelect('update');
      })
      .catch((error) => {
        alert("Failed to send: " + error.text);
      });
  };

  return (
    <section className="free-quote-one">
      <div className="shape1">
        <img
          src={publicUrl + "assets/images/shapes/free-quote-v1-shape1.png"}
          alt="#"
        />
      </div>
      <div
        className="shape2 wow slideInRight"
        data-wow-delay="100ms"
        data-wow-duration="2500ms"
      >
        <img
          className="float-bob-y"
          src={publicUrl + "assets/images/shapes/free-quote-v1-shape2.png"}
          alt="#"
        />
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
                <img
                  src={publicUrl + "assets/images/resources/FQ5.png"}
                  alt="#"
                />
              </div>

              <div className="free-quote-one__img2">
                <img
                  src={publicUrl + "assets/images/resources/FQ4.png"}
                  alt="#"
                />
                <div className="video-box">
                  <a
                    href="https://www.youtube.com/watch?v=1q4UnMc5kTA"
                    className="video-popup"
                  >
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
                  There are many variants of passages, the majority available{" "}
                  <br />
                  have suffered in some form by available company <br />
                  alternate pick alternate in some form to make available.
                </p>
              </div>

              <div className="free-quote-one__content-form">
                <form onSubmit={sendEmail} className="default-form2" noValidate>
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12">
                      <div className="input-box">
                        <input
                          type="text"
                          name="from_name"
                          placeholder="Full name"
                          value={formData.from_name}
                          onChange={handleChange}
                        />
                        {errors.from_name && (
                          <span className="text-danger">
                            {errors.from_name}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12">
                      <div className="input-box">
                        <input
                          type="email"
                          name="from_email"
                          placeholder="Email address"
                          value={formData.from_email}
                          onChange={handleChange}
                        />
                        {errors.from_email && (
                          <span className="text-danger">
                            {errors.from_email}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xl-6">
                    <div onClick={() => setOpenService(prev => !prev)} className={`select-box ${ openService ? "service_select_box" :""} `}>
                        <select
                          name="from_service"
                          className="selectmenu selecting wide"
                          value={formData.from_service}
                          onChange={handleChange}
                        >
                          <option value="">Select service</option>
                          <option value="Hardscapes">Hardscapes</option>
                          <option value="Softscapes">Softscapes</option>
                          <option value="Aquascapes">Aquascapes</option>
                          <option value="Plant Library">Plant Library</option>
                          <option value="Architectural Work">
                            Architectural Work
                          </option>
                          <option value="Tree Replanting">
                            Tree Replanting
                          </option>
                        </select>
                      </div>
                      {errors.from_service && (
                        <span className="text-danger">
                          {errors.from_service}
                        </span>
                      )}

                      <div className="free-quote-one__content-form-btn mt-3">
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

// import React, { useEffect, useRef, useState } from 'react';
// import emailjs from 'emailjs-com';

// const QuoteOne = () => {
//   const form = useRef();
//   const publicUrl = process.env.PUBLIC_URL + '/';

//   // Form data state to control inputs/select
//   const [formData, setFormData] = useState({
//     from_name: '',
//     from_email: '',
//     from_service: '',
//   });

//   // Validation error messages
//   const [errors, setErrors] = useState({});
//   const [openService, setOpenService] = useState(false);

//   useEffect(() => {
//     const $ = window.$;

//     if ($('.video-popup').length) {
//       $('.video-popup').magnificPopup({
//         type: 'iframe',
//         mainClass: 'mfp-fade',
//         removalDelay: 160,
//         preloader: true,
//         fixedContentPos: false,
//       });
//     }

//     // Removed niceSelect() to prevent conflict with React control
//     // $('select:not(.ignore)').niceSelect();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//     // Clear error on change
//     setErrors((prev) => ({
//       ...prev,
//       [name]: '',
//     }));
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.from_name.trim()) newErrors.from_name = 'Name is required';
//     if (!formData.from_email.trim()) {
//       newErrors.from_email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.from_email)) {
//       newErrors.from_email = 'Email is invalid';
//     }
//     if (!formData.from_service.trim()) newErrors.from_service = 'Service selection is required';
//     return newErrors;
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();

//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     emailjs
//       .sendForm('service_jbfh21b', 'template_3vk5zpu', form.current, 'pldr8UQOSNvxDGkao')
//       .then(
//         (result) => {
//           alert('Thank you for contacting Hirwai Landscape');
//           form.current.reset();
//           setFormData({ from_name: '', from_email: '', from_service: '' });
//           setErrors({});
//           setOpenService(false);
//         },
//         (error) => {
//           alert('Failed to send: ' + error.text);
//         }
//       );
//   };

//   return (
//     <section className="free-quote-one">
//       <div className="shape1">
//         <img src={publicUrl + 'assets/images/shapes/free-quote-v1-shape1.png'} alt="#" />
//       </div>
//       <div
//         className="shape2 wow slideInRight"
//         data-wow-delay="100ms"
//         data-wow-duration="2500ms"
//       >
//         <img
//           className="float-bob-y"
//           src={publicUrl + 'assets/images/shapes/free-quote-v1-shape2.png'}
//           alt="#"
//         />
//       </div>
//       <div className="container">
//         <div className="row">
//           {/* Quote Image */}
//           <div className="col-xl-5">
//             <div className="free-quote-one__img">
//               <div className="free-quote-one__img1">
//                 <div className="free-quote-one__img-content">
//                   <h2>
//                     Get <br /> A <br /> Quote
//                   </h2>
//                 </div>
//                 <img src={publicUrl + 'assets/images/resources/FQ5.png'} alt="#" />
//               </div>

//               <div className="free-quote-one__img2">
//                 <img src={publicUrl + 'assets/images/resources/FQ4.png'} alt="#" />
//                 <div className="video-box">
//                   <a href="https://www.youtube.com/watch?v=1q4UnMc5kTA" className="video-popup">
//                     <div className="free-quote-one__video">
//                       <span className="icon-play-button"></span>
//                       <i className="ripple"></i>
//                     </div>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Quote Form */}
//           <div className="col-xl-7">
//             <div className="free-quote-one__content">
//               <div className="sec-title-three">
//                 <div className="sec-title-three__tagline">
//                   <h6>free quote</h6>
//                 </div>
//                 <h2 className="sec-title-three__title">
//                   Get a landscaping quote <br /> to bring your vision to life!
//                 </h2>
//               </div>

//               <div className="free-quote-one__content-text">
//                 <p>
//                   There are many variants of passages, the majority available <br />
//                   have suffered in some form by available company <br />
//                   alternate pick alternate in some form to make available.
//                 </p>
//               </div>

//               <div className="free-quote-one__content-form">
//                 <form ref={form} onSubmit={sendEmail} className="default-form2" noValidate>
//                   <div className="row">
//                     <div className="col-xl-12 col-lg-12 col-md-12">
//                       <div className="input-box">
//                         <input
//                           type="text"
//                           name="from_name"
//                           placeholder="Full name"
//                           value={formData.from_name}
//                           onChange={handleChange}
//                           required
//                         />
//                         {errors.from_name && (
//                           <span className="text-danger">{errors.from_name}</span>
//                         )}
//                       </div>
//                     </div>
//                     <div className="col-xl-12 col-lg-12 col-md-12">
//                       <div className="input-box">
//                         <input
//                           type="email"
//                           name="from_email"
//                           placeholder="Email address"
//                           value={formData.from_email}
//                           onChange={handleChange}
//                           required
//                         />
//                         {errors.from_email && (
//                           <span className="text-danger">{errors.from_email}</span>
//                         )}
//                       </div>
//                     </div>
//                   </div>

//                   <div className="row">
//                     <div className="col-xl-6">
//                       <div className={`select-box ${openService ? 'service_select_box' : ''}`}>
//                         <select
//                           name="from_service"
//                           className="selectmenu selecting wide"
//                           value={formData.from_service}
//                           onChange={(e) => {
//                             handleChange(e);
//                             setOpenService(false);
//                           }}
//                           required
//                         >
//                           <option value="">Select service</option>
//                           <option value="Hardscapes">Hardscapes</option>
//                           <option value="Softscapes">Softscapes</option>
//                           <option value="Aquascapes">Aquascapes</option>
//                           <option value="Plant Library">Plant Library</option>
//                           <option value="Architectural Work">Architectural Work</option>
//                           <option value="Tree Replanting">Tree Replanting</option>
//                         </select>
//                         {errors.from_service && (
//                           <span className="text-danger">{errors.from_service}</span>
//                         )}
//                       </div>

//                       <div className="free-quote-one__content-form-btn" style={{ marginTop: '15px' }}>
//                         <button className="thm-btn" type="submit">
//                           <span className="txt">Send</span>
//                           <i className="icon-double-chevron"></i>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//           {/* End Quote Form */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default QuoteOne;

{
  /* <div className="input-box">
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
</div> */
}

// hirwailandscapers@gmail.com
