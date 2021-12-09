import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import "./TopBar.css";



function TopBar() {
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Rally Point</span>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search className="searchIcon" />
                    <div placeholder="Search for friends or posts" className="searchImput"></div>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Home</span>
                    <span className="topbarLink">Friends</span>
                    <span className="topbarLink">Posts</span>
                    <span className="topbarLink">Logout</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar;