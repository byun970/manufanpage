import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./NewsDetail.module.css";
import { NewsDataProps } from "../data";

const NewsDetail = ({ newsData }:NewsDataProps) => {
  console.log(newsData);

  type ParamsType = {
    id : string;
  }

  const { id } = useParams() as ParamsType;
  console.log(id);

  const navigate = useNavigate();

  return (
    <div className={styles.newsDetailWrapper}>
      <div className={styles.newsDetail}>
        <h2>{newsData[parseInt(id)].title}</h2>
        <p>{newsData[parseInt(id)].content}</p>
        <button
          className={styles.button}
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default NewsDetail;
