import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import "./MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=34b48b52b540b388c905dafb7991ea03`
      )
      .then((res) => {
        setMovie(res.data);
      });
  }, [id]);

  return (
    <section id="movieDetails">
      <Navbar />
      <div id="movieDetailsContainers">
        <div id="movieDetailsContainer">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            id="movieDetailsImg"
          />
        </div>
        <div id="movieDetailsDivTwo">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <button id="watchListBtn">Add To Watch List</button>
        </div>
      </div>
    </section>
  );
}

export default MovieDetails;
