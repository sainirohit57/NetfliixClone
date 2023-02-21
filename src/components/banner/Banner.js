import React, { useEffect, useState } from "react";
import axios from "../../axios";
import requests from "../../requests";
import "./Banner.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Banner() {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [play, setPlay] = useState(0);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginal);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str.length > n ? str.substring(0, n - 1) + "..." : str;
  }

  const opts = {
    height: "448px",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      mute: play,
    },
  };

  const handleClick = (movie) => {
    // if (trailerUrl) {
    //   setTrailerUrl("");
    // } else {
    movieTrailer(movie?.title || movie?.name)
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
        console.log(trailerUrl, " trailerUrl");
      })
      .catch((error) => console.log(error));
    // }
    setPlay(1);
    console.log(setPlay, "setPlay");
  };
  const handleMouseLeave = () => {
    setTrailerUrl("");
    // setPlay(0);
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button
            className="banner__button"
            onClick={() => {
              handleClick(movie);
            }}
          >
            Play
          </button>
        </div>

        <h1 className="banner__description">
          {truncate(`${movie?.overview}`, 150)}
        </h1>
      </div>
      <div className="banner__fadebottom"></div>
      <div className="movie__trailer">
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </header>
  );
}

export default Banner;
