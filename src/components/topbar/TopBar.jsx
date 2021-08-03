import "./topbar.css";
import headShot from "../../images/AboutPageHeadshot.jpg";

export const TopBar = () => {
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-linkedin"></i>
                <i className="topIcon fab fa-github"></i>
                <i className="topIcon fab fa-instagram"></i>
                </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">Home</li>
                    <li className="topListItem">About</li>
                    <li className="topListItem">Portfolio</li>
                    <li className="topListItem">Contact</li>
                </ul>
            </div>
            <div className="topRight">
                <img 
                className="topImg"
                src={headShot} 
                alt="" />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

export default TopBar;