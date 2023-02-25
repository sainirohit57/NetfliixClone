import React from "react";
import BannerSlider from "../components/slider/BannerSlider";
import requests from "../requests";
import Row from "../components/row/Row";

function Home() {
  return (
    <div className="home__page">
      <BannerSlider />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginal}
        isLargeRow
      />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ROMANTIC MOVIES" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTARY MOVIES" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default Home;
