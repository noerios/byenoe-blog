import "./header.css";
import React from "react";
import VideoBg from "reactjs-videobg";
import herovideo from "../images/HalfwayPoint.mp4";
import poster from "../images/poster.jpg";

export const Header = () => {
    return (
        <div  className="header">
            
                
                <div className="headerTitles">
                    <span className="headerTitleLg">#BYENOE</span>
                    <span className="headerTitleSm">Blog</span>
                </div>
                <div className="video">
                <VideoBg className="headerVid" poster={poster} wrapperClass="videoWrapper">
                    <VideoBg.Source src={herovideo} type="video/mp4" />
                </VideoBg>
                </div>
        </div>
    )
}

export default Header