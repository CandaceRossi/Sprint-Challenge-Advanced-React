import React from "react";

class PlayerData extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cards-style">
        <h3 data-testid="List-Header">Soccer Players</h3>
        <p>Name: {this.props.item.name}</p>
        <p>Country: {this.props.item.country}</p>
        <p>Searches: {this.props.item.searches}</p>
        <p>ID: {this.props.item.id}</p>
      </div>
    );
  }
}

export default PlayerData;

// className={this.props.playerData.completed ? "completed" : null}
// onClick={() => this.props.toggleCompleted(this.props.playerData.id)}
