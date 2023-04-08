import './list.scss'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListItem from '../listItem/ListItem';
import { useRef } from 'react';


export const List = () => {
    
    const listRef = useRef()

    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 50;

        if(direction === "left"){
            listRef.current.style.transform = `translateX(${distance + 230}px)`
        }
        if(direction === "right"){
            listRef.current.style.transform = `translateX(${distance - 230}px)`
        }
    }

  return (
    <div className='list'>
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
            <ArrowBackIosIcon className='sliderArrow left' onClick= {() => handleClick("left")}/>
            <div className="container" ref={listRef}>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                
            </div>
            <ArrowForwardIosIcon className='sliderArrow right' onClick= {() => handleClick("right")}/>
        </div>


    </div>
  )
}
