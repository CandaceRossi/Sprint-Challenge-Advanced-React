import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ToggleButton from "./components/ToggleButton";
import PlayerList from "./components/PlayerList";
import PlayerForm from "./components/PlayerForm";

class App extends React.Component {
  constructor() {
    super();
    this.setState = {
      playerData: []
    };
  }

  componentDidMount = () => {
    
      axios
        .get("http://localhost:5000/api/players/")
        .then(response => this.setState({playerData: response.data})
        .catch(err => console.log(err))
  }
  const handleSubmit = (event, newPlayer) => {
      event.preventDefault();
      let newPlayerData = {
        playerData: newPlayer,
        id: Date.now(),
        completed: false
      };
    }
      const updatedPlayerList = [...this.state.playerData, newPlayerData];
      this.setState({
        playerData: updatedPlayerList
      });
      localStorage.setItem("PlayerList", JSON.stringify(updatedPlayerList));
    
    const toggleCompleted = id => {
      const newPlayerById = this.state.playerData.map(playerData => {
        return playerData.id === id
          ? { ...playerData, completed: !playerData.completed }
          : playerData;
      });
      this.setState({ playerData: newPlayerById });
      localStorage.setItem("PlayerList", JSON.stringify(newPlayerById));
    };
    const clearCompleted = () => {
      const completed = this.state.playerData.filter(playerData => {
        return playerData.completed === false;
      });
      this.setState({
        playerData: completed
      });
      localStorage.setItem("playerData", JSON.stringify(completed));
    };

  render() {
    return (
      <div className="App">
        <ToggleButton />
        <PlayerForm
          handleSubmit={this.handleSubmit}
          clearCompleted={this.clearCompleted}
        />
        <PlayerList
          playerData={this.playerData}
          toggleCompleted={this.toggleCompleted}
        />
      </div>
      // {/* <div> */}
      // {/* {playerData.map(player => {
      //   return(
      //     <p>{player.name}</p>
      //     <p>{player.country}</p>
      //      <p>{player.searches}</p>
      //   )})
      // } */}
      // </div>
    );
  }
}



export default App;
