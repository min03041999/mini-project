import { Carousel } from "antd";
import "./carousel-slider.css";

const CarouselSlider = (props) => {
  const carousel = props.carousel;
  return (
    <Carousel autoplay dotPosition={props.dotPosition} effect={props.effect}>
      {carousel.map((item) => (
        <img src={`${item.image}`} alt={item.name} className="carousel-img" />
      ))}
    </Carousel>
  );
};

export default CarouselSlider;
