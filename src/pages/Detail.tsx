import React from "react";
import styles from "./Detail.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { LegendsData } from "../data";

const Detail = ({ legendsData }:{legendsData: LegendsData[]}) => {

  type ParamsType = {
    id : string
  };

  const { id } = useParams() as ParamsType;
  const navigate = useNavigate();

  const handleMouseClick = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.detailWrapper}>
      <h1>{legendsData[parseInt(id)].name}</h1>
      <h3>{legendsData[parseInt(id)].description}</h3>
      <p>{legendsData[parseInt(id)].detail}</p>
      <div>
        <button
          onClick={() => {
            navigate("/legends");
          }}
        >
          Back
        </button>
        <button onClick={handleMouseClick}>Go Menu</button>
      </div>
    </div>
  );
};

export default Detail;
