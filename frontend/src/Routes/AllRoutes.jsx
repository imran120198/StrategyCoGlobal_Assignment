import React from "react";
import Navbar from "../Components/Navbar";
import { Routes, Route } from "react-router-dom";
import MovieSearch from "../Pages/MovieSearch";
import SingleMoviePage from "../Pages/SingleMoviePage";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieSearch />} />
        <Route path="/movies/:imdbID" element={<SingleMoviePage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
