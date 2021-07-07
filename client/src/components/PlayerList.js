import React from "react";

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import PlayerData from "./PlayerData";

class PlayerList extends React.Component {
  render() {
    return (
      <div className="flex-cards">
        <ul className="flex-card">
          {this.props.playerData.map(item => {
            return <PlayerData item={item} />;
          })}
        </ul>
      </div>
    );
  }
}

export default PlayerList;

{
  /* props.playerData.includes(this.state.searchInput) && ( */
}
{
  /* )
            ); */
}
