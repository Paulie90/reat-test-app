import React, { Component, ReactNode } from "react";

import ItemsList from "./ItemsList";
import PlaylistDetails from "./PlaylistDetails";

export class PlaylistsView extends Component {
  render(): ReactNode {
    return (
      <div className="row">
        <div className="col">
          <ItemsList />
        </div>
        <div className="col">
          <PlaylistDetails />
        </div>
      </div>
    )
  }
}