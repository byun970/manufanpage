import React, { useState,useEffect } from "react";
import styles from "./Hilight.module.css";
import { HilightData } from "../data";
import axios from "axios";

const Hilight = () => {
  const [loading, setLoading] = useState(true);
  const [hilightData, setHilightData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://www.scorebat.com/video-api/v3/feed/?token=MTM2OTgxXzE3MDQyNjA5MjVfMGFmNTg5YTQxM2Q2MjU3MmJkMWM2YzQwNmM5YWU2NjFmNmI0OGI4YQ=="
        );
        setHilightData(res.data.response);
        setLoading(false);
      } catch (error) {
        console.error("요청 실패", error);
      }
    };

    fetchData();
  }, []);

  return loading ? (
    <h1 className={styles.loading}>Loading...</h1>
  ) : (
    <div className={styles.hilight}>
      <h1>(Europe) 최근 경기 하이라이트</h1>
      <ul>
        {hilightData.map((data: HilightData, i: number) => {
          const utcDate = new Date(data.date);

          const koreanTime = new Intl.DateTimeFormat("ko-KR", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            timeZone: "Asia/Seoul",
          }).format(utcDate);
          return (
            <li className={styles.list} key={i}>
              <a href={data.matchviewUrl} target="_blank" rel="noreferrer">
                <img width="30%" src={data.thumbnail} alt="thumbnail" />
                <span>{data.title}</span>
                <span>{koreanTime}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Hilight;
