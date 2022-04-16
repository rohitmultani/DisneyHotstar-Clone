import LatestLayer from "./LatestLayer";
import classes from "./LatestSlider.module.css";
import Slider from "react-slick";
import { Fragment } from "react";
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
  var settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 8,
    slidesToScroll: 8,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    cssEase: "linear",
    nextArrow: <SampleNextArrow2 />,
    prevArrow: <SamplePrevArrow2 />,
    rtl: true,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };

  return (
    <div>
      <div className={classes.Latest}>Latest & Trending</div>
      <Slider {...settings} className={classes.Layer2}>
        <div>
          <LatestLayer />
        </div>
        <div>
          <LatestLayer />
        </div>
        <div>
          <LatestLayer />
        </div>
        <div>
          <LatestLayer />
        </div>
        <div>
          <LatestLayer />
        </div>
        <div>
          <LatestLayer />
        </div>
        <div>
          <LatestLayer />
        </div>
        <div>
          <LatestLayer />
        </div>
        <div>
          <LatestLayer />
        </div>
        <div>
          <LatestLayer />
        </div>
        <div>
          <LatestLayer />
        </div>
        <div>
          <LatestLayer />
        </div>
        <div>
          <LatestLayer />
        </div>
      </Slider>
    </div>
  );
};
export default LatestSlider;
