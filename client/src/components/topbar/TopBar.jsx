import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";



function TopBar() {
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/";

    const handleLogout = () =>{
        dispatch({ type: "LOGOUT" });
    };
    return (
        <div className="top">
            <div className="topLeft">
            <Link to={{ pathname: "https://www.linkedin.com/in/rnoerios/"}} target="_blank"><i className="topIcon fab fa-linkedin"></i></Link>
            <Link to={{ pathname: "https://github.com/noerios"}} target="_blank"><i className="topIcon fab fa-github"></i></Link>
            <Link to="https://www.instagram.com/noway1010/" target="_blank"><i className="topIcon fab fa-instagram"></i></Link>
                </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link to="/" className="link">Home</Link></li>
                    <li className="topListItem"><Link to="https://radiant-depths-84649.herokuapp.com//about" target="_blank" className="link">About</Link></li>
                    <li className="topListItem"><Link to="https://radiant-depths-84649.herokuapp.com/" target="_blank" className="link">Portfolio</Link></li>
                    <li className="topListItem"><Link to="/write" className="link">Write</Link></li>
                    <li className="topListItem" onClick={handleLogout}>{user && "Logout"}</li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <Link to="/settings">
                        <img 
                            className="topImg"
                            src={PF+user.profilePic} 
                            alt="" />
                    </Link>
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