import "./navbar.scss";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false: true);
    return () => (window.onscroll = null)
  }

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logo" />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
              <SearchIcon  className="icon"/>
              <span>KID</span>
              <NotificationsNoneIcon className="icon"/>
              <img 
              src="https://avatars.githubusercontent.com/u/6759280?v=4" 
              alt="profile-pic" 
              />
              <div className="profile">
                <ArrowDropDownIcon className="icon"/>
                <div className="options">
                  <span>Settings</span>
                  <span>Logout</span>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar