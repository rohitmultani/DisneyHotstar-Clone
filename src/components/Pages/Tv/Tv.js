import React,{useState,useEffect, useImperativeHandle} from 'react';
import { Fragment } from 'react';
import classes from '../Search/Search.module.css';
import {Link,useParams} from 'react-router-dom';

import LatestLayer from '../../Slider/LatestLayer';
import NavBar from '../../NavBar';
const Tv=(props)=>{
    const params=useParams();
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetchMoviesHandler();
      }, [params.any]);
      
    function fetchMoviesHandler() {
        console.log(params.any)
        const newLocal =
          `https://api.themoviedb.org/3/tv/${params.any}?api_key=8936bfb1497ed6daf448de63b7b6cb7c`;
        fetch(newLocal)
          .then((response) => {
              console.log(response)
              return response.json();
            })
            .then((data) => {
                
                const transformedMovies = data.results.map((movieData) => {
                console.log(movieData)
            
            
              return {
                id: movieData.id,
                name: movieData.name,
                image: movieData.poster_path,
                detail: movieData.overview,
                vote:movieData.vote_average
              };
            });
            setMovies(transformedMovies);
          });
          
        }
    return(
        <Fragment>
            <NavBar/>
            <div className={classes.Latest}>{params.any}</div>
            <div className={classes.movieItem}>
        
          {movies.map((movie) => (
          <div key={movie.id} className={classes.movieItem}>
            <Link to={`/Play/${movie.id}`} className={classes.link}>
              <LatestLayer
                id={movie.id}
                //  key={movie.id}
                gName={movie.vote}
                name={movie.name}
                title={movie.title}
                image={movie.image}
                detail={movie.detail}
              />
            </Link>
          </div>
        ))}
        </div>
        </Fragment>
    );
    }
    export default Tv;