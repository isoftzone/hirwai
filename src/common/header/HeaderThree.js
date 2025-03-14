import React from 'react';
import {Link} from "react-router-dom";
import Nav from './Nav';
import MobileMenu from './MobileMenu';
import SearchButton from './SearchButton';
import LogoThree from './LogoThree';


export default class HeaderThree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSticky: false,
        };
        this.headerRef = React.createRef();
    }

    handleScroll = () => {
        if (window.scrollY > this.headerRef.current.offsetHeight) {
            this.setState({ isSticky: true });
        } else {
            this.setState({ isSticky: false });
        }
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    render(){
        const { isSticky } = this.state;
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                   <header className={`main-header main-header-three ${isSticky ? 'sticky' : ''}`} ref={this.headerRef}>
                <div className="main-header-three__inner">
                    <nav className="main-menu main-menu-one">
                        <div className="main-menu__wrapper clearfix">
                            <div className="container-fluid">
                                <div className="main-menu__wrapper-inner">
                                    <div className="main-header-three__left">
                                        <div className="main-menu-box">
                                            <MobileMenu />
                                            <Nav />
                                        </div>
                                    </div>

                                    <div className="main-header-three__middle">
                                        <LogoThree />
                                    </div>

                                    <div className="main-header-three__right">
                                        <div className="main-header-three__right-contact">
                                            <div className="icon-box">
                                                <span className="icon-phone"></span>
                                            </div>

                                            <div className="content-box">
                                                <p>Call In Anytime</p>
                                                <a href="tel:9288006780">+91-91759 32372</a>
                                            </div>
                                        </div>

                                        <SearchButton />

                                        <div className="right-box">

                                            <div className="btn-box">
                                                <Link to={`https://wa.me/919175932372`}><span class="icon-whatsapp"></span> Book An Appointment</Link>
                                              {/* <Link to={process.env.PUBLIC_URL + `/contact`}> <span class="icon-whatsapp"></span> Book Appointment</Link> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            </>
        )
    }
}









// import React from 'react';
// import {Link} from "react-router-dom";
// import Nav from './Nav';
// import MobileMenu from './MobileMenu';
// import SearchButton from './SearchButton';
// import LogoThree from './LogoThree';


// export default class HeaderThree extends React.Component {
//     render(){
//         let publicUrl = process.env.PUBLIC_URL+'/'
//         return (
//             <>
//                 <header className="main-header main-header-three">

//                     <div className="main-header-three__inner">
//                         <nav className="main-menu main-menu-one">
//                             <div className="main-menu__wrapper clearfix">
//                                 <div className="container-fluid">
//                                     <div className="main-menu__wrapper-inner">

//                                         <div className="main-header-three__left">
//                                             <div className="main-menu-box">
//                                                 <MobileMenu />
//                                                 <Nav />
//                                             </div>
//                                         </div>

//                                         <div className="main-header-three__middle">
//                                             <LogoThree />
//                                         </div>

//                                         <div className="main-header-three__right">
//                                             <div className="main-header-three__right-contact">
//                                                 <div className="icon-box">
//                                                     <span className="icon-phone"></span>
//                                                 </div>

//                                                 <div className="content-box">
//                                                     <p>Call In Anytime</p>
//                                                     <a href="tel:9288006780">+91-96875 83548</a>
//                                                 </div>
//                                             </div>

//                                             <SearchButton />

//                                             <div className="right-box">
//                                                 {/* <div className="top-box">
//                                                     <div className="icon-box">
//                                                         <span className="icon-dollar"></span>
//                                                     </div>
//                                                     <div className="text-box">
//                                                         <p>We do not received <br /> extra charges </p>
//                                                     </div>
//                                                 </div> */}

//                                                 <div className="btn-box">
//                                                     <Link to={process.env.PUBLIC_URL + `/contact`}>Book Appointment</Link>
//                                                 </div>
//                                             </div>

//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </nav>
//                     </div>

//                 </header>
//             </>
//         )
//     }
// }