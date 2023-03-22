import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import './components.css';

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



function Slideshow() {
  return (
    <div className='w-100'>
    <Carousel >
        {
            dataset.map((dataset) => {
                return (
                    <Carousel.Item style={{backgroundColor:dataset.colorhex}} >
                    <img src="https://www.colorhexa.com/c184ad.png" alt="" style={{opacity:"0"}}/>
                    <Carousel.Caption>
                        <h3>{dataset.title}</h3>
                        <p>{dataset.caption}</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                );
            }
            )
        }
    </Carousel>
    </div>
  );
}

export default Slideshow;