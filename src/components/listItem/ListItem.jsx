import './listItem.scss'

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { useState } from 'react';

const ListItem = ({index}) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className='listItem'
            style={{left: isHovered && index * 225 -50 + index * 2.5}}
            onMouseEnter={()=> setIsHovered(true)}
            onMouseLeave={()=> setIsHovered(false)}
        >
            <img src='https://pyxis.nymag.com/v1/imgs/4d1/dcf/a33209cb40d7dbd980ba6cdceddc56b0f6-got-poster-s8-2.2x.rhorizontal.w700.jpg'
                alt=''
            />

            {isHovered && (
            <>
                <iframe 
                title='Game of Thrones'
                src="https://player.vimeo.com/video/231693022?h=9aef0905a8&autoplay=1&loop=1&portrait=0" 
                frameBorder="0" 
                allow="autoplay;`"
                >
                </iframe>
                <script src="https://player.vimeo.com/api/player.js"></script>
                <div className="itemInfo">
                    <div className="icons">
                        <PlayArrowIcon className="icon"/>
                        <AddIcon className="icon"/>
                        <ThumbUpIcon className="icon"/>
                        <ThumbDownIcon className="icon"/>
                    </div>
                    <div className="itemInfoTop">
                        <span>1hour 40mins</span>
                        <span className="age">+16</span>
                        <span>2001</span>

                    </div>
                    <div className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Enim mollitia eius cum rerum, ducimus ad delectus in,
                        doloremque officiis soluta ratione.
                    </div>
                    <div className="genre">Thriller</div>
                </div>

            </>
                )}
        </div>

    )
}

export default ListItem