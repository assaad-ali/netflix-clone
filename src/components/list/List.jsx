import './list.scss'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListItem from '../listItem/ListItem';
import { useRef, useState } from 'react';


export const List = () => {
    
    const[slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef()

    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 50;

        if(direction === "left" && slideNumber > 0){
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${distance + 230}px)`
        }
        if(direction === "right" && slideNumber < 5){
            setSlideNumber(slideNumber + 1)
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
                <ListItem/>
                <ListItem/>
                
            </div>
            <ArrowForwardIosIcon className='sliderArrow right' onClick= {() => handleClick("right")}/>
        </div>


    </div>
  )
}
