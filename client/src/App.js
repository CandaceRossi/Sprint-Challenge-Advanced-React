import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ToggleButton from "./components/ToggleButton";
import PlayerList from "./components/PlayerList";
import PlayerForm from "./components/PlayerForm";

const App = () => {
  const [playerData, setPlayerData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/players")
      .then(response => setPlayerData(response.data));
  }, [playerData]);

  const handleSubmit = (event, newPlayer) => {
    event.preventDefault();
    let newPlayerData = {
      playerData: newPlayer,
      id: Date.now(),
      completed: false
    };
    const updatedPlayerList = [...playerData, newPlayerData];
    setPlayerData({
      playerData: updatedPlayerList
    });
    localStorage.setItem("PlayerList", JSON.stringify(updatedPlayerList));
  };
  const toggleCompleted = id => {
    const newPlayerById = playerData.map(playerData => {
      return playerData.id === id
        ? { ...playerData, completed: !playerData.completed }
        : playerData;
    });
    setPlayerData({ playerData: newPlayerById });
    localStorage.setItem("PlayerList", JSON.stringify(newPlayerById));
  };
  return (
    <div className="App">
      <ToggleButton />
      <PlayerForm handleSubmit={handleSubmit} />
      <PlayerList playerData={playerData} toggleCompleted={toggleCompleted} />
    </div>
  );
};

export default App;
