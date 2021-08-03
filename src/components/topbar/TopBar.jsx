import "./topbar.css";
import headShot from "../../images/AboutPageHeadshot.jpg";
import { Link } from "react-router-dom";

function TopBar() {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-linkedin"></i>
                <i className="topIcon fab fa-github"></i>
                <i className="topIcon fab fa-instagram"></i>
                </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link to="/" className="link">Home</Link></li>
                    <li className="topListItem"><Link to="/" className="link">About</Link></li>
                    <li className="topListItem">Portfolio</li>
                    <li className="topListItem"><Link to="/" className="link">Contact</Link></li>
                    <li className="topListItem">{user && "Logout"}</li>
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