import React from "react";

class PlayerData extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <li
          className={this.props.playerData.completed ? "completed" : null}
          onClick={() => this.props.toggleCompleted(this.props.playerData.id)}
        >
          {this.props.playerData.name}
          {this.props.playerData.country}
          {this.props.playerData.searches}
          {this.props.playerData.id}
        </li>
      </div>
    );
  }
}

export default PlayerData;
