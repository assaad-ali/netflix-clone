import  './listItem.scss'

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const ListItem = () => {
  return (
    <div className='listItem'>
        <img src='https://www.al.com/resizer/c7lh5csiBIzTlZ3TAagpLQHKH4U=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/expo.advance.net/img/6c16adc45f/width2048/ee8_a1.jpeg'
        alt=''
        />
        <div className="itemInfo">
            <div className="icons">
                <PlayArrowIcon/>
                <AddIcon/>
                <ThumbUpIcon/>
                <ThumbDownIcon/>
            </div>
        </div>
    </div>
    
  )
}

export default ListItem