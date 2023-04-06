import './featured.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Featured = (type) => {
  return (
    <div className='featured'>
        {type &&(
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option >Genre</option>
                    <option value="adventure">Adevnture</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        <img 
            src="https://i0.wp.com/batman-news.com/wp-content/uploads/2022/01/The-Batman-2022-Movie-Poster-Featured-01.webp?resize=1536%2C864&quality=80&strip=info&ssl=1" 
            alt="" 
        />

        <div className="info">
            <img 
                src="https://i.insider.com/56e71048dd0895ed158b468f?width=1300&format=jpeg&auto=webp"
                alt="" 
            />
            <span className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Earum incidunt neque nobis sit excepturi ducimus facere 
                voluptates ab, doloremque fuga aliquid, praesentium optio 
                eum a consequatur natus ipsam doloribus aperiam!
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrowIcon/>
                    <span>Play</span>
                </button>
                <button className="more-info">
                    <InfoOutlinedIcon/>
                    <span>Info</span>
                </button>
            </div>
        </div>

    </div>
  )
}

export default Featured