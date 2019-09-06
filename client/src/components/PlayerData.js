import React from "react";

class PlayerData extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <li
          className={this.props.playerItem.completed ? "completed" : null}
          onClick={() => this.props.toggleCompleted(this.props.playerItem.id)}
        >
          {this.props.playerItem.task}
        </li>
      </div>
    );
  }
}

export default PlayerData;
