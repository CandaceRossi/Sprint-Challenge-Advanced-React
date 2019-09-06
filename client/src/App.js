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
      .then(res => setPlayerData(res.data));
    console.log("info", playerData).catch(err => console.log(err));
  }, [playerData]);

  const handleSubmit = (event, newPlayer) => {
    event.preventDefault();
    let newPlayerData = {
      task: newPlayer,
      id: Date.now(),
      completed: false
    };
  };
  const updatedPlayerList = [...playerData, newPlayerData];
  setState({
    playerData: updatedPlayerList
  });
  localStorage.setItem("PlayerList", JSON.stringify(updatedPlayerList));
};
toggleCompleted = id => {
  const newPlayerById = playerData.map(playerData => {
    return playerData.id === id
      ? { ...playerData, completed: !playerData.completed }
      : playerData;
  });
  setState({ playerData: newPlayerById });
  localStorage.setItem("PlayerList", JSON.stringify(newPlayerById));
  return (
    <div className="App">
      <ToggleButton />
      <PlayerForm handleSubmit={handleSubmit} />
      <PlayerList playerData={playerData} toggleCompleted={toggleCompleted} />
    </div>
  );
};

export default App;
