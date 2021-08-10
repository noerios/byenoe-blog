import { useContext } from "react";
import headShot from "../../images/AboutPageHeadshot.jpg";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";



function TopBar() {
    const { user, dispatch } = useContext(Context);

    const handleLogout = () =>{
        dispatch({ type: "LOGOUT" });
    };
    return (
        <div className="top">
            <div className="topLeft">
            <Link target="_blank" to="https://www.linkedin.com/in/rnoerios/"><i className="topIcon fab fa-linkedin"></i></Link>
            <Link target="_blank" to="https://github.com/noerios"><i className="topIcon fab fa-github"></i></Link>
            <Link target="_blank" to="https://www.instagram.com/noway1010/"><i className="topIcon fab fa-instagram"></i></Link>
                </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link to="/" className="link">Home</Link></li>
                    <li className="topListItem"><Link target="_blank" to="https://radiant-depths-84649.herokuapp.com//about" className="link">About</Link></li>
                    <li className="topListItem"><Link target="_blank" to="https://radiant-depths-84649.herokuapp.com/" className="link">Portfolio</Link></li>
                    <li className="topListItem"><Link to="/write" className="link">Write</Link></li>
                    <li className="topListItem" onClick={handleLogout}>{user && "Logout"}</li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img 
                        className="topImg"
                        src={user.profilePic} 
                        alt="" />
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to="/login">Login</Link>
                            </li>
                            <li className="topListItem">
                                <Link className="link" to="/register">Register</Link>
                            </li>
                        </ul>
                    )
                }
                
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

export default TopBar;