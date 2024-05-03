import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReview from './ClientReview';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const TestimonialSlider = () => {
  return (
    <Carousel
  additionalTransfrom={0}
  arrows={true}
  centerMode={false}
  responsive={responsive}
  infinite
  autoPlay={true}
  autoPlaySpeed={5000}
  itemClass="item"
>
  
  <ClientReview 
   image="/c1.jpg"
   name="Alan Becker"  
   role="MERN stack Developer"
  />
 <ClientReview 
   image="/c2.jpg"
   name="Ali Baig"  
   role="React Developer"
  />
   <ClientReview 
   image="/c1.jpg"
   name="Ahsan Sattar"  
   role="Next Js Developer"
  />
   <ClientReview 
   image="/c2.jpg"
   name="Rabeet sati"  
   role="React Native Developer"
  />
</Carousel>
  )
}

export default TestimonialSlider