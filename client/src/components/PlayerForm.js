import React from "react";

class PlayerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPlayer: ""
    };
  }

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      newPlayer: ""
    });
    this.props.handleSubmit(event, this.state.newPlayer);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.newPlayer}
            name="newPlayer"
            placeholder="add a new player here"
            onChange={this.handleChanges}
          />
          <button type="submit">Add Player</button>
          <button onClick={this.props.clearCompleted}>Clear</button>
        </form>
      </div>
    );
  }
}

export default PlayerForm;
