import React from "react";
import styles from "./Legends.module.css";
import { LegendsData } from "../data";

const Legends = ({ legendsData }: {legendsData:LegendsData[]}) => {

  const handleMouseClick = () => {
    window.scrollBy({
      top: -3000,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {/* <Detail /> */}
      <div className={styles.legends}>
        {legendsData.map((legends:LegendsData, i:number) => (
          <div key={legends.id} onClick={handleMouseClick}>
            <div className={styles.legendsList}>
              <img src={`${process.env.PUBLIC_URL}/img/main1.jpg`} alt="legends" />
              <div className={styles.content}>
                <h2>{legends.name}</h2>
                <h3>{legends.description}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Legends;
