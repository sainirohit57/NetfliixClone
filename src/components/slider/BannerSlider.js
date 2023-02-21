import React, { useState, useEffect } from "react";
import axios from "../../axios";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";
import requests from "../../requests";
import "./BannerSlider.css";
import "../banner/Banner.css";

function BannerSlider() {
  const [movie, setMovie] = useState([]);
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginal);
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
                <button className="banner__button">Watch Trailer</button>
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
