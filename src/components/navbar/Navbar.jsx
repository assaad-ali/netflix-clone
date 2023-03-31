import "./navbar.scss";

const Navbar = () => {
  return (
    <div class="navbar">
        <div className="container">
            <div className="left">
                <img src="https://commons.wikimedia.org/wiki/File:Netflix_2015_logo.svg#/media/File:Netflix_logo.svg" alt="logo img" class="logo" />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar