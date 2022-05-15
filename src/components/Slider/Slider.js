import Layer1 from "./Layer1";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { memo } from "react";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import classes from "./Slide.module.css";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", left: "10px" }}
      onClick={onClick}
    />
  );
}

const SliderMain = (props) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    cssEase: "ease-in-out",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings} className={classes.slide}>
      {props.movies.map((movie) => (
        <div key={movie.id}>
          <Link to={`/Play/${movie.id}`} className={classes.link}>
            <Layer1
              id={movie.id}
              vote={movie.vote}
              name={props.name}
              title={movie.title}
              image={movie.image}
              detail={movie.detail}
            />
          </Link>
        </div>
      ))}
    </Slider>
  );
};
export default memo(SliderMain);
