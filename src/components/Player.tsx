import React from "react";
import styles from "./Player.module.css";
import { useSelector } from "react-redux";
import { AllPlayersData } from "../data";

const Player = ({ playersData }:{ playersData: AllPlayersData[]}):JSX.Element => { 

  const state = useSelector((state) =>  state );
  console.log(state);

  return (
    <div className={styles.players}>
      {playersData.map((players:{id:number, name:string, description: string}) => (
        <div className={styles.playersList} key={players.id}>
          <img src={`${process.env.PUBLIC_URL}/img/main1.jpg`} alt="players" />
          <div className={styles.content}>
            <h2>{players.name}</h2>
            <p>{players.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Player;
