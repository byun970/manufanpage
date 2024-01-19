import React from "react";
import styles from "./Stadium.module.css";

const Stadium = () => {
  const stdDatas = [
    {
      id: 0,
      title: "이름",
      description: "올드트래포드",
    },
    {
      id: 1,
      title: "위치",
      description:
        "영국 그레이터맨체스터 트래포드 맷 버스비 거리 (Sir Matt Busby Way)",
    },
    {
      id: 2,
      title: "시공",
      description: "1909년",
    },
    {
      id: 3,
      title: "개장",
      description: "1910년 2월 19일",
    },
    {
      id: 4,
      title: "그라운드 크기",
      description: "105m×68m",
    },
    {
      id: 5,
      title: "그라운드 잔디",
      description: "Desso GrassMaster",
    },
    {
      id: 6,
      title: "좌석수",
      description: "74,310석",
    },
    {
      id: 7,
      title: "설계자",
      description: "아치볼드 리치",
    },
  ];

  return (
    <div className={styles.stadiumWrapper}>
      <h1>올드 트래포드</h1>
      <div className={styles.stadium}>
        <img src={`${process.env.PUBLIC_URL}/img/main1.jpg`} alt="main" />
        <div className={styles.stdgrid}>
          {stdDatas.map((stdData) => {
            return (
              <div className={styles.stdmenu} key={stdData.id}>
                <h2>{stdData.title}</h2>
                <p>{stdData.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stadium;
