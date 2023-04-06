import './list.scss'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListItem from '../listItem/ListItem';


export const List = () => {
  return (
    <div className='list'>
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
            <ArrowBackIosIcon/>
            <div className="container">
                <ListItem/>
            </div>
            <ArrowForwardIosIcon/>
        </div>


    </div>
  )
}
