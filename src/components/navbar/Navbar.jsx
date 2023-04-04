import "./navbar.scss";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
  return (
    <div className="navbar">
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
              <SearchIcon/>
              <span>KID</span>
              <NotificationsNoneIcon/>
              <img src="https://avatars.githubusercontent.com/u/6759280?v=4" alt="profile" />
              <ArrowDropDownIcon/>
            </div>
        </div>
    </div>
  )
}

export default Navbar