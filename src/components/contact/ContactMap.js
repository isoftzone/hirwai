import React from 'react';

export default class ContactMap extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="contact-page-bottom">
                    <div className="container">
                        <div className="row">
                            {/* Start Contact Page Bottom Map */}
                            <div className="col-xl-6">
                                <div className="contact-page-bottom-map">
                                    <iframe
                                        title="Address"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.6336614295406!2d72.91088410000003!3d20.60301290000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0c3fe2837f369%3A0x995adfaf82e89fbc!2sSardar%20Heights!5e0!3m2!1sen!2sin!4v1741097837950!5m2!1sen!2sin"
                                        className="contact-page__google-map" allowfullscreen>
                                    </iframe>
                                </div>
                            </div>
                            {/* End Contact Page Bottom Map */}

                            {/* Start Contact Page Bottom Content */}
                            <div className="col-xl-6">
                                <div className="contact-page-bottom__content">
                                    <div className="sec-title">
                                        <div className="sec-title__tagline">
                                            <h6>Contact Us</h6>
                                            <span className="right"></span>
                                        </div>
                                        <h2 className="sec-title__title">Get In Touch</h2>
                                    </div>
                                    <div className="contact-page-bottom__content-img">
                                        <img src={publicUrl+"assets/images/resources/contact-page-bottom-img.jpg"} alt="#" />

                                        <div className="contact-info">
                                            <ul>
                                                <li>
                                                    <div className="inner">
                                                        <div className="icon-box">
                                                            <span className="icon-phone-call-1"></span>
                                                        </div>

                                                        <div className="content-box">
                                                            <p> Tel : <a href="tel:12345615523">096875 83548
                                                        </a></p>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="inner">
                                                        <div className="icon-box">
                                                            <span className="icon-message"></span>
                                                        </div>

                                                        <div className="content-box">
                                                            <p> Email : <a href="mailto:yourmail@email.com">hirwailandscapers@gmail.com</a></p>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="inner">
                                                        <div className="icon-box">
                                                            <span className="icon-placeholder"></span>
                                                        </div>

                                                        <div className="content-box">
                                                            <p>Add :1103, Ambika, Sardar Heights, Tithal Road, Valsad, Gujrat 396001</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Contact Page Bottom Content */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}