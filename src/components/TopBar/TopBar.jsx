import { Search, Person, Chat, Notifications } from "@material-ui/icons";

function TopBar() {
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Rally Point</span>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search />
                    <div placeholder="Search for friends or posts" className="searchImput"></div>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
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