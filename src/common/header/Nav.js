// import React from 'react';
// import {Link} from "react-router-dom";

// const Nav = () => {
//     return (
//         <ul className="main-menu__list">
//             <li className="dropdown current">
//                 <Link to={process.env.PUBLIC_URL + `/`}>Home <span className="line"></span></Link>
//                 <ul>
//                     <li><Link to={process.env.PUBLIC_URL + `/`}>Home One</Link></li>
//                     <li><Link to={process.env.PUBLIC_URL + `/home-two`}>Home Two</Link></li>
//                     <li><Link to={process.env.PUBLIC_URL + `/home-three`}>Home Three</Link></li>
//                     <li className="dropdown">
//                         <Link to={process.env.PUBLIC_URL + `#`}>Header Styles</Link>
//                         <ul>
//                             <li><Link to={process.env.PUBLIC_URL + `/`}>Header One</Link></li>
//                             <li><Link to={process.env.PUBLIC_URL + `/home-two`}>Header Two</Link></li>
//                             <li><Link to={process.env.PUBLIC_URL + `/home-three`}>Header Three</Link></li>
//                         </ul>
//                     </li>
//                 </ul>
//             </li>

//             <li><Link to={process.env.PUBLIC_URL + `/about`}>About <span className="line"></span></Link></li>

//             <li className="dropdown">
//                 <Link to={process.env.PUBLIC_URL + `/services`}>Services <span className="line"></span></Link>
//                 <ul>
//                     {/* <li><Link to={process.env.PUBLIC_URL + `/services`}>Services</Link></li> */}
//                     <li><Link to={process.env.PUBLIC_URL + `/Hardscapes`}>Hardscapes</Link></li>
//                     <li><Link to={process.env.PUBLIC_URL + `/softscapes`}>Softscapes</Link></li>
//                     <li><Link to={process.env.PUBLIC_URL + `/aquascapes`}>Aquascapes</Link></li>
//                     <li><Link to={process.env.PUBLIC_URL + `/plantLibrary`}>Plant Library</Link></li>
//                     <li><Link to={process.env.PUBLIC_URL + `/architect`}>Architect</Link></li>
//                     {/* <li><Link to={process.env.PUBLIC_URL + `/landscape`}>Landscape</Link></li> */}
//                     <li><Link to={process.env.PUBLIC_URL + `/treeReplanting`}>Tree Replanting</Link></li>

//                 </ul>
//             </li>

//             <li className="dropdown">
//                 <Link to={process.env.PUBLIC_URL + `#`}>Pages <span className="line"></span></Link>
//                 <ul>
//                     <li><Link to={process.env.PUBLIC_URL + `/team`}>Team</Link></li>
//                     <li><Link to={process.env.PUBLIC_URL + `/team-details`}>Team Details</Link></li>
//                     <li><Link to={process.env.PUBLIC_URL + `/portfolio-1`}>Portfolio 01</Link></li>
//                     <li><Link to={process.env.PUBLIC_URL + `/portfolio-2`}>Portfolio 02</Link></li>
//                     <li><Link to={process.env.PUBLIC_URL + `/faq`}>Faq</Link></li>
//                 </ul>
//             </li>

//             <li className="dropdown">
//                 <Link to={process.env.PUBLIC_URL + `#`}>Blog <span className="line"></span></Link>
//                 <ul>
//                     <li><Link to={process.env.PUBLIC_URL + `/blog`}>Blog</Link></li>
//                     <li><Link to={process.env.PUBLIC_URL + `/blog-grid`}>Blog Grid</Link></li>
//                     <li><Link to={process.env.PUBLIC_URL + `/blog-details`}>Blog Details</Link></li>
//                 </ul>
//             </li>
//             <li><Link to={process.env.PUBLIC_URL + `/contact`}>Contact <span className="line"></span></Link></li>
//         </ul>
//     )
// }

// export default Nav;







import React from 'react';
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
    const location = useLocation(); // Get current route

    return (
        <ul className="main-menu__list">
            {/* Home Section (Default Active) */}
            <li className={location.pathname === "/home-three" ? "dropdown current" : "dropdown"}>
                <Link to={process.env.PUBLIC_URL + `/home-three`}>Home <span className="line"></span></Link>
                {/* <ul>
                    <li><Link to={process.env.PUBLIC_URL + `/`}>Home One</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + `/home-two`}>Home Two</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + `/home-three`}>Home Three</Link></li>
                    <li className="dropdown">
                        <Link to={process.env.PUBLIC_URL + `#`}>Header Styles</Link>
                        <ul>
                            <li><Link to={process.env.PUBLIC_URL + `/`}>Header One</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/home-two`}>Header Two</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/home-three`}>Header Three</Link></li>
                        </ul>
                    </li>
                </ul> */}
            </li>

            {/* About Section */}
            <li className={location.pathname === "/about" ? "current" : ""}>
                <Link to={process.env.PUBLIC_URL + `/about`}>About <span className="line"></span></Link>
            </li>

            {/* Services Section (Active for Services & Subpages) */}
            <li className={`dropdown ${["/services", "/Hardscapes", "/softscapes", "/aquascapes", "/plantLibrary", "/architect", "/treeReplanting"].includes(location.pathname) ? "current" : ""}`}>
                <Link to={process.env.PUBLIC_URL + `/services`}>Services <span className="line"></span></Link>
                <ul>
                    <li><Link to={process.env.PUBLIC_URL + `/Hardscapes`}>Hardscapes</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + `/softscapes`}>Softscapes</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + `/aquascapes`}>Aquascapes</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + `/plantLibrary`}>Plant Library</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + `/architect`}>Architect</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + `/treeReplanting`}>Tree Replanting</Link></li>
                </ul>
            </li>

            {/* Pages Section */}
            {/* <li className={`dropdown ${location.pathname.startsWith("/team") || location.pathname.startsWith("/portfolio") || location.pathname === "/faq" ? "current" : ""}`}>
                <Link to={process.env.PUBLIC_URL + `#`}>Pages <span className="line"></span></Link>
                <ul>
                    <li><Link to={process.env.PUBLIC_URL + `/team`}>Team</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + `/team-details`}>Team Details</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + `/portfolio-1`}>Portfolio 01</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + `/portfolio-2`}>Portfolio 02</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + `/faq`}>Faq</Link></li>
                </ul>
            </li> */}

            {/* Blog Section */}
            {/* <li className={`dropdown ${location.pathname.startsWith("/blog") ? "current" : ""}`}>
                <Link to={process.env.PUBLIC_URL + `#`}>Blog <span className="line"></span></Link>
                <ul>
                    <li><Link to={process.env.PUBLIC_URL + `/blog`}>Blog</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + `/blog-grid`}>Blog Grid</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + `/blog-details`}>Blog Details</Link></li>
                </ul>
            </li> */}

            {/* Contact Section */}
            <li className={location.pathname === "/contact" ? "current" : ""}>
                <Link to={process.env.PUBLIC_URL + `/contact`}>Contact <span className="line"></span></Link>
            </li>
        </ul>
    );
}

export default Nav;
