import React from "react";
import "./App.css";
// import { useState, useEffect } from "react";
import axios from "axios";
import PlayerList from "./components/PlayerList";
import ToggleButton from "./components/ToggleButton";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerData: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players/")
      .then(response => this.setState({ playerData: response.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <ToggleButton />
        <PlayerList
          playerData={this.state.playerData}
          //           toggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}
export default App;
// import React from "react";
// import "./App.css";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import ToggleButton from "./components/ToggleButton";
// import PlayerList from "./components/PlayerList";
// import PlayerForm from "./components/PlayerForm";
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       playerData: []
//     };
//   }
//   componentDidMount() {
//     axios
//       .get("http://localhost:5000/api/players/")
//       .then(response => this.setState({ playerData: response }))
//       .catch(err => console.log(err));
//   }
//   toggleCompleted(id) {
//     const newPlayerById = this.state.playerData.map(playerData => {
//       return playerData.id === id
//         ? { ...playerData, completed: !playerData.completed }
//         : playerData;
//     });
//     this.setState({ playerData: newPlayerById });
//     localStorage.setItem("PlayerList", JSON.stringify(newPlayerById));
//   }
//   onclearCompleted() {
//     const completed = this.state.playerData.filter(playerData => {
//       return playerData.completed === false;
//     });
//     this.setState({
//       playerData: completed
//     });
//     localStorage.setItem("playerData", JSON.stringify(completed));
//   }
//   render() {
//     const updatedPlayerList = [...this.state.playerData, this.newPlayerById];
//     this.setState({
//       playerData: updatedPlayerList
//     });
//     localStorage.setItem("PlayerList", JSON.stringify(updatedPlayerList));
//     return (
//       <div className="App">
//         <ToggleButton />
//         <PlayerForm
//           handleSubmit={this.handleSubmit}
//           clearCompleted={this.clearCompleted}
//         />
//         <PlayerList
//           playerData={this.playerData}
//           toggleCompleted={this.toggleCompleted}
//         />
//       </div>
//     );
//   }
// }
// export default App;
