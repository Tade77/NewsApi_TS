import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home--page">
      <Link to="/news-page">
        <button className="btn">Go to News Page</button>
      </Link>
    </div>
  );
};

export default HomePage;
