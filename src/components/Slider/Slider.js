import Layer1 from './Layer1';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import classes from './Slide.module.css'
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,right:"10px",display:"none"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none",left:"10px" }}
        onClick={onClick}
      />
    );
  }
  
const SliderMain=(props)=>{
    var settings = {
        dots: true,
        infinite: false,
        speed: 100,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        fade: true,
        cssEase: "linear",
        // dots:false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    return(
<Slider {...settings} className={classes.slide}>
    <Layer1 title={"TheBatman"} />
    <Layer1 title={"SpiderMan"}/>
    <Layer1 title={"JurasicPark"}/>
    <Layer1 title={"HarryPotter"}/>
    <Layer1 title={"GodZilla"}/>
   
</Slider>

    )
}
export default SliderMain;