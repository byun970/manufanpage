import React from "react";
import MainImg from "../components/MainImg";
import News from "../components/News";
import { useMediaQuery } from "react-responsive";
import { NewsDataProps } from "../data";

const Home = ({ newsData }:NewsDataProps) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  

  return (
    <>
      {isSmallScreen ? (
        <div className="main-image">
          <img src="img/main3.jpg" alt="main" />
        </div>
      ) : (
        <div className="main-image">
          <MainImg />
        </div>
      )}

      <h2 className="news">News</h2>
      <News newsData={newsData} />
    </>
  );
};

export default Home;
