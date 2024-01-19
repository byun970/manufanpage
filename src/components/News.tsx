import React, { useState } from "react";
import styles from "./News.module.css";
import { Link } from "react-router-dom";
import { NewsDataProps } from "../data";
const News = ({ newsData }:NewsDataProps) => {
  
  const [news] = useState(newsData);
  return (
    <>
      <div className={styles.news}>
        {news.map((newsData, i) => {
          return (
            <Link
              key={i}
              to={`newsdetail/${i}`}
            >
              <div>
                <img src={`${process.env.PUBLIC_URL}/img/main1.jpg`} alt="news" />
              </div>
              <div className={styles.newsContents}>
                <h2>{newsData.title}</h2>
                <p>{newsData.content}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default News;
