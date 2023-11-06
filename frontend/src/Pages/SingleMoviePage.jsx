import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../Styles/SingleMovie.module.css";

const SingleMoviePage = () => {
  const [movie, setMovie] = useState([]);
  const { imdbID } = useParams();

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=13b46831`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovie(data);
      });
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <div>
          <img src={movie.Poster} />
        </div>
        <div className={styles.info}>
          <div>Title : {movie.Title}</div>
          <div>Release : {movie.Released}</div>
          <div>Genre : {movie.Genre}</div>
          <div>Country : {movie.Country}</div>
          <div>Actors : {movie.Actors}</div>
          <div>Writer : {movie.Writer}</div>
          <div>Director : {movie.Director}</div>
          <div>Rating :{movie.imdbRating}</div>
        </div>
      </div>
      <div className={styles.plot}>
        <h3>Plot</h3>
        {movie.Plot}
      </div>
    </div>
  );
};

export default SingleMoviePage;
