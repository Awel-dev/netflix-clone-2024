import React from "react";
import "./header.css";
import logo from "../../assets/580b57fcd9996e24bc43c529.png";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import AccountBoxSharpIcon from '@mui/icons-material/AccountBoxSharp';
const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">

        <div className="header-left">
          <h2 className="logo"><img src={logo} alt="Netflix Logo" width="100" /></h2>

          <nav>
            <ul className="nav-menu">
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>My List</li>
              <li>Browse by Language</li>
            </ul>
          </nav>
        </div>

        <div className="header-right">
          <ul className="left-nav">
            <li><SearchSharpIcon width="50"/></li>
            <li><NotificationsNoneSharpIcon/></li>
            <li><AccountBoxSharpIcon/></li>
            <li><ArrowDropDownSharpIcon/></li>
          </ul>
        </div>

      </div>
    </header>
  );
};

export default Header;
