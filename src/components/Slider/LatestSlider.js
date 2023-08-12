import LatestLayer from "./LatestLayer";
import classes from "./LatestSlider.module.css";
import Slider from "react-slick";
import { memo } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}
function SampleNextArrow2(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", marginRight: "6px" }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow2(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", marginLeft: "4px" }}
      onClick={onClick}
    />
  );
}

const LatestSlider = (props) => {
  const checkHandler = () => {
    console.log(props.movies);
  };
  var settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 8.2,
    slidesToScroll: 8,
    swipeToSlide: true,
    cssEase: "linear",
    nextArrow: <SampleNextArrow2 />,
    prevArrow: <SamplePrevArrow2 />,

    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };

  return (
    <div className={classes.LatestBox}>
      <div className={classes.Latest} onClick={checkHandler}>
        {props.heading}
      </div>
      <Slider {...settings} className={classes.Layer2}>
        {props.movies.map((movie) => (
          <div key={movie.id}>
            <Link to={`/Play/${movie.id}`} className={classes.link}>
              <LatestLayer
                id={movie.id}
                gName={movie.vote}
                name={movie.name}
                title={movie.title}
                image={movie.image}
                detail={movie.detail}
                gid={movie.gid}
                type={movie.type}
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default memo(LatestSlider);
