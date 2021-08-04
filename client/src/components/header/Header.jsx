import "./header.css";
import React from "react";
import headerImage from "../../images/headerimage.jpeg";


export const Header = () => {
    return (
        <>
        <div  className="header">
            <div className="headerTitles">
                <span className="headerTitleLg">#BYENOE</span>
                <span className="headerTitleSm">Blog</span>
            </div>
            <img className="headerImg" src={headerImage} alt="" />
        </div>
        </>
    )
}

export default Header