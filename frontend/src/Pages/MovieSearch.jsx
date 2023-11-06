import React, { useEffect, useState } from "react";
import styles from "../Styles/MovieSearch.module.css";
import { Link } from "react-router-dom";

const MovieSearch = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = () => {
    fetch(`https://www.omdbapi.com/?apikey=13b46831&s=${text}`)
      .then((res) => res.json())
      .then((res) => setData(res.Search));
  };

  console.log(data)

  useEffect(() => {
    handleSearch();
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <div className={styles.searchSection}>
        <input
          type="text"
          placeholder="Search Movies"
          onChange={handleChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className={styles.movieData_container}>
        {data?.map((elem) => {
          return (
            <div key={elem.imdbID} className={styles.mapData}>
              <img className={styles.movieData_image}
                src={elem.Poster}
                alt={elem.Title}
              />
              <h2>{elem.Title}</h2>
              <Link to={`/movies/${elem.imdbID}`}>
                <button className={styles.mapData_button}>Read More</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieSearch;
