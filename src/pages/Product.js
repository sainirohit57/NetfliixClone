import React from "react";
import Banner from "../components/banner/Banner";
import Row from "../components/row/Row";
import requests from "../requests";

function Product() {
  return (
    <div className="product__page">
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchTrending}
        isLargeRow
      />
    </div>
  );
}

export default Product;
