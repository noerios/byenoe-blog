import "./sidebar.css";
import headshotTwo from "../../images/headshot2.jpeg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export const Sidebar = () => {
    const [cats, setCats] = useState([]);

    useEffect(()=>{
        const getCats = async ()=>
        {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats();
    },[])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img src={headshotTwo} alt="" />
                <p>I wrote this blog in 2016 when I circled the globe with Remote Year while working as a copywriter at Ayzenberg Group in Los Angeles.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">COUNTRIES</span>
                <ul className="sidebarList">
                    {cats.map((c)=>(

                        <Link className="link" to={`/?cat=${c.name}`}>
                            <li classNa me="sidebarListItem">{c.name}</li>
                        </Link>
                        
                    ))}
                    
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