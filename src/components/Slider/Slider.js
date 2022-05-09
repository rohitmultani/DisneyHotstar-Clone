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
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        swipeToSlide: true,
        fade: true,
        pauseOnHover: true,
        cssEase: "linear",
        // dots:false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    return(
<Slider {...settings} className={classes.slide}>
  
{props.movies.map((movie)=>(
           <div key={movie.id}>
           <Layer1
           id={movie.id}
          //  key={movie.id}
          genre={props.genre}
           title={movie.title}
           image={movie.image}
           detail={movie.detail}/>
          
         </div>
        ))}
   
</Slider>

    )
}
export default SliderMain;