import React from "react";
import { Link } from "react-router-dom";
import LogoThree from "../header/LogoThree";

export default class FooterOne extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <>
        <footer class="footer-one">
          <div
            class="footer-one__bg"
            style={{
              backgroundImage:
                "url(" +
                publicUrl +
                "assets/images/shapes/footer-v1-shape3.png)",
            }}
          ></div>
          <div class="shape1 float-bob-y">
            <img
              src={publicUrl + "assets/images/shapes/footer-v1-shape1.png"}
              alt="#"
            />
          </div>
          <div class="shape2 float-bob-y">
            <img
              src={publicUrl + "assets/images/shapes/footer-v1-shape2.png"}
              alt="#"
            />
          </div>
          {/* Start Footer */}
          <div class="footer">
            <div class="container">
              <div class="row">
                {/* Start Footer Widget Single */}
                <div
                  class="col-xl-5 col-lg-5  wow animated fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div class="footer-widget__single">
                    <div class="footer-widget__single-about">
                      <div class="logo-box">
                        <LogoThree />
                        {/* <Link to={process.env.PUBLIC_URL + `/`}><img src={publicUrl+"assets/images/resources/footer-logo.png"} alt="#" /></Link> */}
                      </div>
                      <br />
                      {/* <form class="footer-widget__subscribe-box">
                                                <div class="title-box">
                                                    <h5>Subsrcibe for Latest Articles and Resources</h5>
                                                </div>
                                                <div class="footer-widget__subscribe-input-box">
                                                    <input type="email" placeholder="Email Address" name="email" />
                                                    <button type="submit" class="footer-widget__subscribe-btn">
                                                        <span>Go</span>
                                                    </button>
                                                </div>
                                            </form> */}
                      <p>
                        At Hirwai Landscaping, we bring your outdoor dreams to
                        life with creativity, precision, and a deep respect for
                        nature. With years of experience in landscape design and
                        execution, we specialize in crafting lush, functional,
                        and sustainable green spaces for homes, commercial
                        properties, and public areas..
                      </p>
                    </div>
                    <div
                      class="footer-one__right-bottom wow animated fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <ul class="social-links">
                        <li>
                          <Link to={`https://wa.me/919175932372`}>
                            <span class="icon-whatsapp"></span>
                          </Link>
                        </li>
                        <li>
                          <Link to={`https://www.youtube.com/@Hirwailandscape`}>
                            <span class="icon-play"></span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`https://www.pinterest.com/hirwailandscape/?invite_code=71376df149cc401faec1abf513263ccb&sender=572098096322986051`}
                          >
                            <span class="icon-pinterest"></span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`https://www.instagram.com/hirwai_landscape/?igsh=bDlvaGxvdWlyM2M%3D&utm_source=qr#`}
                          >
                            <span class="icon-instagram"></span>
                          </Link>
                        </li>
                      </ul>

                      {/* <div class="footer-one__right-bottom-contact">
                        <div class="icon-box">
                          <span class="icon-call"></span>
                        </div>
                        <div class="content-box">
                          <p>Call Anytime</p>
                          <h4>
                            <a href="tel:96875-83548">+91-91759 32372</a>
                          </h4>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
                {/* End Footer Widget Single */}

                {/* Start Footer One Right */}
                <div class="col-xl-7 col-lg-7">
                  <div class="footer-one__right">
                    <div class="row">
                      {/* Start Footer One Right Single */}
                      <div
                        class="col-xl-4 col-lg-4 wow animated fadeInUp"
                        data-wow-delay="0.2s"
                      >
                        <div class="footer-one__right-single mb50">
                          <div class="title">
                            <h2>Our Services</h2>
                          </div>
                          <div class="footer-one__right-single-services">
                            <ul class="footer-one__right-single-list">
                              <li>
                                <Link
                                  to={process.env.PUBLIC_URL + `/hardscapes`}
                                >
                                  Hardscapes
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={process.env.PUBLIC_URL + `/softscapes`}
                                >
                                  Softscapes
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={process.env.PUBLIC_URL + `/aquascapes`}
                                >
                                  Aquascapes
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={process.env.PUBLIC_URL + `/architect`}
                                >
                                  Architectural Work
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={process.env.PUBLIC_URL + `/plantLibrary`}
                                >
                                  Plant Library
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={
                                    process.env.PUBLIC_URL + `/treeReplanting`
                                  }
                                >
                                  Tree Replanting
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* End Footer One Right Single */}

                      {/* Start Footer One Right Single */}
                      <div
                        class="col-xl-3 col-lg-3 wow animated fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <div class="footer-one__right-single mb50">
                          <div class="title">
                            <h2>Links</h2>
                          </div>
                          <div class="footer-one__right-single-links">
                            <ul class="footer-one__right-single-list">
                              <li>
                                <Link
                                  to={process.env.PUBLIC_URL + `/home-three`}
                                >
                                  Home
                                </Link>
                              </li>
                              <li>
                                <Link to={process.env.PUBLIC_URL + `/about`}>
                                  About
                                </Link>
                              </li>
                              <li>
                                <Link to={process.env.PUBLIC_URL + `/services`}>
                                  Services
                                </Link>
                              </li>
                              <li>
                                <Link to={process.env.PUBLIC_URL + `/contact`}>
                                  Contact
                                </Link>
                              </li>
                              {/* <li><Link to={process.env.PUBLIC_URL + `/plantLibrary`}>PlantLibrary</Link></li>
                                                            <li><Link to={process.env.PUBLIC_URL + `/treeReplanting`}>TreeReplanting</Link></li> */}
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* End Footer One Right Single */}

                      {/* Start Footer One Right Single */}
                      <div
                        class="col-xl-5 col-lg-5 wow animated fadeInUp"
                        data-wow-delay="0.4s"
                      >
                        <div class="footer-one__right-single">
                          <div class="title">
                            <h2>Contact</h2>
                          </div>
                          <div class="footer-one__right-single-contact">
                            {/* <a href="mailto:yourmail@email.com">hirwailandscapers@gmail.com</a> */}
                        
                            
                           
                              <div class="foot-contact">
                                <span class="icon-placeholder">  </span>
                                    <a>1103 Ambika, Sardar Heights, Tithal Road, Valsad,
                                    Gujrat 396001 </a> 
                              </div>                             
                           

                           
                              <div class="foot-contact">
                                <span class="icon-message">  </span>
                                <a href="mailto:hirwailandscapers@gmail.com">
                              hirwailandscapers@gmail.com
                            </a>
                            
                              </div>
                             
                          


                            <div class="">
                              <div class="foot-contact">
                                <span class="icon-call"> </span>
                                <a href="tel:96875-83548">+91-91759 32372</a>
                              </div>
                             
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Footer One Right Single */}
                    </div>
                  </div>
                </div>
                {/* End Footer One Right */}
              </div>
            </div>
          </div>

          <div class="footer-one__bottom">
            <div class="container">
              <div class="bottom-inner">
                <div class="copyright">
                  <p>Designed and Powered  by 
                     <Link to={`https://isoftzone.com/`}>
                      i-SOFTZONE 
                    </Link></p>
                </div>

                <ul class="footer-one__bottom-menu">
                  <li>
                    <Link to={process.env.PUBLIC_URL + `/`}>
                     Home
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + `/about`}>About </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + `/contact`}>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

{
  /* <div class="footer-one__right-bottom-contact">
<div class="icon-box">
  <span class="icon-call"></span>
</div>
<div class="content-box">
  <p>Call Anytime</p>
  <h4>
    <a href="tel:96875-83548">+91-91759 32372</a>
  </h4>.footer-one__right-single-list li a
</div>
</div> */
}
