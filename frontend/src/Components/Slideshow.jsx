import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import './components.css';
// import image from '../Images/homepage.png';
import image from '../Images/homepage.png';
import image2 from '../Images/homepage2.jpg';


const dataset = [
    {
        title: 'Title 1',
        caption: 'Caption 1',
        colorhex: '#c184ad',
    },
    {
        title: 'Title 2',
        caption: 'Caption 2',
        colorhex: '#c1841d',

    },
    {
        title: 'Title 3',
        caption: 'Caption 3',
        colorhex: '#a184ad',
    },
    {
        title: 'Title 4',
        caption: 'Caption 4',
        colorhex: '#b284ad',
    }
    ];



function Slideshow(props) {
  return (
    <div className='w-100 h-100 nav-slideshow '>
    <Carousel controls={false} indicators={false} interval={null} slide={false} i>
        <Carousel.Item >
            <img className="d-block w-100" src={image} alt=""/>
        </Carousel.Item>
        <Carousel.Caption>
                        {props.element}
        </Carousel.Caption>
        
    </Carousel>
    </div>
    
  );
}

export default Slideshow;