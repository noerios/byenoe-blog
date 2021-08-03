import "./sidebar.css";
import headshotTwo from "../../images/headshot2.jpeg";
import { Link } from "react-router-dom";

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img src={headshotTwo} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut obcaecati ad minus, iure sed eveniet officiis odio ex dolore adipisci?</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">COUNTRIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem"><Link to="/" className="link">Malaysia</Link></li>
                    <li className="sidebarListItem"><Link to="/" className="link">Thailand</Link></li>
                    <li className="sidebarListItem"><Link to="/" className="link">Cambodia</Link></li>
                    <li className="sidebarListItem"><Link to="/" className="link">Croatia</Link></li>
                    <li className="sidebarListItem"><Link to="/" className="link">Czech Rep</Link></li>
                    <li className="sidebarListItem"><Link to="/" className="link">Portugal</Link></li>
                    <li className="sidebarListItem"><Link to="/" className="link">Mexico</Link></li>
                    <li className="sidebarListItem"><Link to="/" className="link">Colombia</Link></li>
                    <li className="sidebarListItem"><Link to="/" className="link">Peru</Link></li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">SOCIAL</span>
                <div className="sidebarSocial">
                <Link className="link" target="_blank" to="https://www.linkedin.com/in/rnoerios/"><i className="sidebarIcon fab fa-linkedin"></i></Link>
                <Link className="link" target="_blank" to="https://github.com/noerios"><i className="sidebarIcon fab fa-github"></i></Link>
                <Link className="link" target="_blank" to="https://www.instagram.com/noway1010/"><i className="sidebarIcon fab fa-instagram"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;