import  './watch.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Watch = () => {
  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackIcon/>
            Home
        </div>
        <iframe 
            title='Game of Thrones'
            src="https://player.vimeo.com/video/231693022?h=9aef0905a8&autoplay=1&loop=1&portrait=0" 
            frameBorder="0" 
            allow="autoplay"
        ></iframe>
    </div>
  )
}
