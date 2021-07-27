import "./sidebar.css";

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img src="" alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut obcaecati ad minus, iure sed eveniet officiis odio ex dolore adipisci?</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebartitle">COUNTRIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Malaysia</li>
                    <li className="sidebarListItem">Thailand</li>
                    <li className="sidebarListItem">Cambodia</li>
                    <li className="sidebarListItem">Croatia</li>
                    <li className="sidebarListItem">Czech Republic</li>
                    <li className="sidebarListItem">Portugal</li>
                    <li className="sidebarListItem">Mexico</li>
                    <li className="sidebarListItem">Colombia</li>
                    <li className="sidebarListItem">Peru</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebartitle">SOCIAL</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-linkedin"></i>
                    <i className="sidebarIcon fab fa-github"></i>
                    <i className="sidebarIcon fab fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}

