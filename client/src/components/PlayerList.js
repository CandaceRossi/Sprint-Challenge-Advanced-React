import React from "react";

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import PlayerData from "./PlayerData";

class PlayerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };
  }

  handleSearch = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <input
          value={this.state.searchInput}
          name="searchInput"
          onChange={this.handleSearch}
        />
        <ul>
          {/* {this.props.playerData.map(props => {
            return (
              props.playerData.includes(this.state.searchInput) && (
                <PlayerData
                  playerData={props.playerData}
                  toggleCompleted={this.props.toggleCompleted}
                />
              )
            );
          })} */}
        </ul>
      </div>
    );
  }
}

export default PlayerList;
