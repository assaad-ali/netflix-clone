import './featured.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function Featured() {
  return (
    <div className='featured'>
        <img 

          src="https://media.wdwnt.com/2020/06/299579-featured.jpg" 
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
                </button>
                <button className="more-info">
                    <InfoOutlinedIcon/>
                </button>
            </div>
        </div>

    </div>
  )
}

export default Featured