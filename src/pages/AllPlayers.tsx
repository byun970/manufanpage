import React, { useState } from 'react';
import styles from './AllPlayers.module.css';
import Legends from '../components/Legends';
import Player from '../components/Player';
import { AllPlayersData, LegendsData } from '../data';

const AllPlayers = ({legendsData, playersData}:{legendsData:LegendsData[]; playersData: AllPlayersData[]}) => {
  const [tab, setTab] = useState(0);
  return (
    <div className={styles.allplayers}>
      <h1>선수단</h1>
      <button className={tab ? '':styles.selected} onClick={()=>{
        setTab(0);
      }}>1군</button>
      <button className={tab ? styles.selected:''} onClick={()=>{
        setTab(1);
      }}>전설의 선수</button>
      {
        tab ? <Legends legendsData={legendsData}/> : <Player playersData={playersData}/>
      }
    </div>
  )
}

export default AllPlayers;