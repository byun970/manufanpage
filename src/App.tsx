import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Stadium from "./pages/Stadium";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Hilight from "./pages/Hilight";
import NewsDetail from "./pages/NewsDetail";
import AllPlayers from "./pages/AllPlayers";
import Board from "./pages/Board";
import data from "./db/data.json";
import { NewsData, AllPlayersData, LegendsData } from "./data";


const App = () :JSX.Element => {
  /* let state = useSelector((state) => state);
  console.log(state); */
  const parseDatas = JSON.parse(JSON.stringify(data));
  const newsData:NewsData[] = parseDatas.newsData;
  const legendsData:LegendsData[] = parseDatas.legendsData;
  const playersData:AllPlayersData[] = parseDatas.playersData;

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home newsData={newsData} />} />
        <Route path="/stadium" element={<Stadium />} />
        <Route
          path="/allplayers"
          element={
            <AllPlayers
              legendsData={legendsData}
              playersData={playersData}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/board" element={<Board />} />
        <Route path="/hilight" element={<Hilight />} />

        <Route
          path="/newsdetail/:id"
          element={<NewsDetail newsData={newsData} />}
        />
        <Route
          path="*"
          element={
            <div
              style={{
                textAlign: "center",
              }}
            >
              없는 페이지
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
