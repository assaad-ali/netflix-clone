import './featured.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function Featured() {
  return (
    <div className='featured'>
        <img 

          src="https://i0.wp.com/batman-news.com/wp-content/uploads/2022/01/The-Batman-2022-Movie-Poster-Featured-01.webp?resize=1536%2C864&quality=80&strip=info&ssl=1" 
          alt="" 
        />

        <div className="info">
            <img src="https://media-cache.cinematerial.com/p/500x/jgtvkdgr/hamilton-logo.jpg?v=1592705013" alt="" />
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