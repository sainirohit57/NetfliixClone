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
        fetchUrl={requests.fetchTrending}
        isLargeRow
      />
      {/* <Row title="Trending Now" fetchUrl={requests.fetchNetflixOriginal} /> */}
      {/* <Row title="NETFLIX ORIGINALS" fetchUrl={requests.primaryReleaseDate} /> */}
    </div>
  );
}

export default Home;
