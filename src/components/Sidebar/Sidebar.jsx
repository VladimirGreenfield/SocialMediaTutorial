import "./Sidebar.css";
import {RssFeed, People, PostAdd } from "@material-ui/icons"



function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon" />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <People className="sidebarIcon" />
                        <span className="sidebarListItemText">Friends</span>
                    </li>
                    <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <PostAdd className="sidebarIcon" />
                        <span className="sidebarListItemText">Posts</span>
                    </li>
                </ul>
                </ul>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar