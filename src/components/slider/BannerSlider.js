import React, { useState, useEffect } from "react";
import axios from "../../axios";
import BtnSlider from "./BtnSlider";
import requests from "../../requests";
import "./BannerSlider.css";
import { Link } from "react-router-dom";

function BannerSlider() {
  const [movie, setMovie] = useState([]);
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== 7) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === 7) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(7);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(request.data.results);
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str.length > n ? str.substring(0, n - 1) + "..." : str;
  }

  return (
    <div className="container-slider">
      {movie.map((item, index) => {
        if (index >= 7) return null;

        return (
          <div
            key={item.id}
            className={
              slideIndex === index + 1
                ? "banner slide active-anim"
                : "banner slide"
            }
            style={{
              backgroundSize: "cover",
              backgroundImage: `url("https://image.tmdb.org/t/p/original/${item?.backdrop_path}")`,
            }}
          >
            <div className="banner__contents">
              <h1 className="banner__title">
                {item?.title || item?.name || item?.original_name}
              </h1>
              <div className="banner__buttons">
                <Link className="row__poster__link" to={"/product"}>
                  <button className="banner__button">Watch Trailer</button>
                </Link>
              </div>

              <h1 className="banner__description">
                {truncate(`${item?.overview}`, 150)}
              </h1>
            </div>
            <div className="banner__fadebottom"></div>
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      <div className="container-dots">
        {Array.from({ length: 7 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default BannerSlider;
