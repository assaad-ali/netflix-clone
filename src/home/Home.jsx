import Navbar from "../components/navbar/Navbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
        <Navbar/>
        <img 
          width="100%"
          height="1800 rem"
          src="https://wallpapercave.com/wp/wp1945897.jpg" 
          alt="background" 
        />
    </div>
  )
}

export default Home