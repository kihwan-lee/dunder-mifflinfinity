import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const QuotesCard = () => {
  return (
  <Carousel>
    <Carousel.Item>
      <p>Quote</p>
    </Carousel.Item>
    <Carousel.Item>
      <p>Another Quote</p>
    </Carousel.Item>
    <Carousel.Item>
      <p>Another Another Quote</p>
    </Carousel.Item>
</Carousel>
  )
}

export default QuotesCard;