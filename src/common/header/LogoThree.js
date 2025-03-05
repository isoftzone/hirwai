import React from 'react';
import {Link} from "react-router-dom";

export default class LogoThree extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <div className="logo-box-one">
                    <Link to={process.env.PUBLIC_URL + `/home-three`}>
                        <img src={publicUrl+"assets/images/resources/Artboard-3.png"} alt="Awesome Logo" title="" />
                    </Link>
                </div>
            </>
        )
    }
}